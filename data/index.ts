import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a real time Nasa information app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "Nasa information - Real Time",
    des: "delivers up-to-date space data with dynamic animations and content powered by Sanity CMS. Built using React, Next.js, GSAP, and Acternnity, it offers a smooth, real-time experience across devices.",
    img: "",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/gsap.svg"],
    link: "Upcomming Still in Development",
  },
  {
    id: 2,
    title: "LinkClient Copy",
    des: "Developed Navbar, Hero, and Highlights sections using React and Tailwind CSS, focusing on responsive design and clean component structure. Integrated these parts into the linkedClient website — a project copy I created based on the original linkClient site.",
    img: "linkclient.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://linkclientcopy.vercel.app/",
  },
  {
    id: 3,
    title: "YC Startup Directory with Sanity & GSAP",
    des: "An animated YC startup directory powered by Sanity CMS and GSAP for a smooth, dynamic browsing experience.",
    img: "ycDirectory.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/fm.svg"],
    link: "https://ycdirectory-iota.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "iPhone.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://i-phone-copy-slop.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with [Your Name] has been a game-changer for our business. From the very first meeting, it was clear we were dealing with someone not only highly skilled but also deeply committed to excellence. The quality of the work exceeded our expectations, delivered on time and with meticulous attention to detail. We’ve seen measurable improvements since implementing their solutions.",
    name: "Michael1 Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with [Your Name] has been a game-changer for our business. From the very first meeting, it was clear we were dealing with someone not only highly skilled but also deeply committed to excellence. The quality of the work exceeded our expectations, delivered on time and with meticulous attention to detail. We’ve seen measurable improvements since implementing their solutions.",
    name: "Michael2 Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with [Your Name] has been a game-changer for our business. From the very first meeting, it was clear we were dealing with someone not only highly skilled but also deeply committed to excellence. The quality of the work exceeded our expectations, delivered on time and with meticulous attention to detail. We’ve seen measurable improvements since implementing their solutions.",
    name: "Michael3 Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with [Your Name] has been a game-changer for our business. From the very first meeting, it was clear we were dealing with someone not only highly skilled but also deeply committed to excellence. The quality of the work exceeded our expectations, delivered on time and with meticulous attention to detail. We’ve seen measurable improvements since implementing their solutions.",
    name: "Michael4 Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with [Your Name] has been a game-changer for our business. From the very first meeting, it was clear we were dealing with someone not only highly skilled but also deeply committed to excellence. The quality of the work exceeded our expectations, delivered on time and with meticulous attention to detail. We’ve seen measurable improvements since implementing their solutions.",
    name: "Michael5 Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    desc: "Collaborated with product managers to design wireframes and prototypes, improving user engagement by 20%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer Intern",
    desc: "Built reusable components and optimized web performance, contributing to a 30% reduction in load time.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/shour0"
  },
  {
    id: 2,
    img: "/insta.svg",
    link: 'https://www.instagram.com/shour191/'
  },
  {
    id: 3,
    img: "/wha.svg",
  },
];

