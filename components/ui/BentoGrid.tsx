'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { lazy, Suspense, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Lottie from "react-lottie";

const GlobeDemo = lazy(() => import("./GridGlobe").then(m => ({ default: m.GlobeDemo })));
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-5 lg:gap-9 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('shour908@gmail.com');

    setCopied(true)
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border-neutral-200 bg-white transition duration-200 hover:shadow-xl border-white/[0.2] dark:bg-black dark:shadow-none",
        `${id === 3 && 'p-4'}`,
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              fill
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-90'}`}>
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              fill
              className={cn(imgClassName, 'object-cover object-center w-full h-full')}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>

          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName,
          'group-hover:/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:xs lg:text-base z-10">
            {description}
          </div>

          <div className="lg:text-3xl max-96 z-10 font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200">
            {title}
          </div>

          {id === 2 && <LazyGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-1 ">
              <div className="flex flex-col gap-3 lg:gap-8">
                {['React.js', 'Next.js', 'Typescript'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {['Express', 'MongoDB', 'Node.js'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied, animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                  height={100}
                  width={100}
                />
              </div>

              <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Lazy Globe component with Intersection Observer
const LazyGlobe = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before it comes into view
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {shouldLoad ? (
        <Suspense fallback={
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple" />
          </div>
        }>
          <GlobeDemo />
        </Suspense>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="text-sm text-gray-400">🌍 Globe loading...</div>
        </div>
      )}
    </div>
  );
};