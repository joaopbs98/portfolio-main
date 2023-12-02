import { NavbarLink } from "@/types";

export const navbarLinks: NavbarLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

import { Card } from "@/types";

export const Cards: Card[] = [
  {
    imageUrl: "/devflow.jpg",
    projectTitle: "Devflow",
    projectDescription: "Project with Next.JS",
    pageHeader: "Devflow - An ongoing project with NextJS",
    challenge:
      "Devflow is an under-development platform. It's envisioned as a space where developers can ask questions, share knowledge, and connect with other developers. The goal is to create a Stack Overflow clone with all its functionalities. The project is currently being developed using NextJS, Typescript, TailwindCSS, among other technologies. Clerk is being integrated for authentication and MongoDB is planned for the database. Features like a search engine and a voting system are also in the pipeline.",
    firstImage: "/devflowFirst.png",
    secondImage: "/devflowSecond.png",
    sectionHeader: "The biggest project I have worked on so far.",
    sectionDesc:
      "Embarking on the journey to create a Stack Overflow clone with all its functionalities is proving to be an exciting challenge. The development process involves creating a database, a backend, and a frontend. Implementing features such as a search engine, voting system, and authentication are also part of the plan. This project marks my first encounter with NextJS, turning it into a significant learning experience. I'm currently gaining a wealth of knowledge about NextJS, Typescript, TailwindCSS, and much more.",
    thirdImage: "/devflow.jpg",
    fourthImage: "/devflowFourth.png",
    bottomHeader: "Crafting a cohesive user experience with NextJS.",
    bottomDesc:
      "NextJS is my go-to framework for building websites. It is a React framework that enables server-side rendering and static site generation. It is fast, secure, and scalable. In future projects, I will continue to use NextJS to provide a fast, secure, and scalable experience. These are the foundations of my web development approach.",
    vercelLink: "https://stack-overflow-app-henna.vercel.app/",
  },
  {
    imageUrl: "/binteriores.jpg",
    projectTitle: "B-Interiores",
    projectDescription: "Project with React.JS",
    pageHeader: "B-Interiores - A Family Project",
    challenge:
      "B-Interiores is my father's furniture company. Being nit-picky and minimalist, I wanted to create a website that would reflect the company's values. The goal was to create a simple, clean, and modern website. Being the final project of my EDIT. Full-Stack Development Bootcamp, it was my first big challenge as a developer. I'll always be grateful for the opportunity to work on this project. It was a great learning experience. ",
    firstImage: "/binterioresSecond.jpg",
    secondImage: "/binterioresFirst.png",
    sectionHeader: "A breeze of fresh air for a family business.",
    sectionDesc:
      "Since day 1, it was a challenge to develop this. Ignoring the part where I'm a 'newbie' on the development field, I had to deal with the fact that I had to design everything from scratch. Thankfully, I've gathered some previous experience on UI Design with my Lisbon School of Design course, so it wasn't a hassle, just a nice challenge. On the other hand, I had to deal with the fact that I had to develop the website with ReactJS, a framework that I had never used before. It was a great learning experience, and I'm very proud of the final result, despite knowing that If it was developed today, it would be much better.",
    thirdImage: "/binterioresFourth.png",
    fourthImage: "/binterioresThird.png",
    bottomHeader: "NextJS Onwards!",
    bottomDesc:
      "The current plan with this project is to migrate it to NextJS and host it on the company Vercel account. To be honest, the only thing that is preventing me to do it is that I would love to do another redesign of the website, with a much more cleaner development approach. In the near future, when I'm done with my courses and land my first development job, I'll be sure to do it. Until then, I'll keep it as it is, a reminder of my first steps as a developer.",
    vercelLink: "https://b-interiores-site-oficial.vercel.app/",
  },
  {
    imageUrl: "/portfolioHero.jpg",
    projectTitle: "Portfolio",
    projectDescription: "This is my most recent project",
    pageHeader: "My Portfolio - The project I'm most proud of",
    challenge:
      "Developing your own portfolio is always a challenge. It's the first impression that you give to your potential companies, so it has to be perfect. I'm sure in a few months time I'll look back at this and think that I could have done better, but for now, I'm very proud of the final result. I've learned a lot with this project, and I'm sure that I'll learn even more in the future.",
    firstImage: "/portfolioFirst.png",
    secondImage: "/portfolioSecond.png",
    sectionHeader: "Minimalism, Animations and Bug Fixing",
    sectionDesc:
      "Being the first time I'm using Framer Motion, I'm very proud of the animations that I've created. I'm sure that in the future I'll be able to create much more complex animations, but for now, I'm very happy with the final result. Had the luck of having an e-book that helped me resolve the bugs that come with using NextJS and Framer Motion. Talking to communities, other developers and having valid input from peers drove me to create a portfolio that I'm very proud of.",
    thirdImage: "/portfolioHero.jpg",
    fourthImage: "/portfolioFourth.png",
    bottomHeader: "The First of Many",
    bottomDesc:
      "I'm sure this is a project I'll remember for a long time. It's the first time I'm developing my own image as a developer, and I'm sure it won't be the last. I'm very excited to see what the future holds for me, and I'm sure that I'll be able to create many more complex and exciting projects in the future.",
    vercelLink: "https://portfolio-joao-dev.vercel.app/",
  },
  {
    imageUrl: "/progress.png",
    projectTitle: "Work in Progress...",
    projectDescription: "Stay tuned for new projects 🚀",
    pageHeader: "Example Text",
    challenge: "Example Text",
    firstImage: "/progress.png",
    secondImage: "/progress.png",
    sectionHeader: "Example Text",
    sectionDesc: "Example Text",
    thirdImage: "/progress.png",
    fourthImage: "/progress.png",
    bottomHeader: "Example Text",
    bottomDesc: "Example Text",
    vercelLink: "https://devflow.vercel.app/",
  },
];

import { ExpertiseInfo } from "@/types";

export const ExpertiseInfos: ExpertiseInfo[] = [
  {
    title: "Front-End Development",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined templates. I design from scratch. The combination of NextJS and Vercel forms the foundation of my web development appraoch. I employ it to provide a fast, secure, and scalable experience.",
  },
  {
    title: "Backend Development",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined templates. I design from scratch. The combination of NextJS and Vercel forms the foundation of my web development appraoch. I employ it to provide a fast, secure, and scalable experience.",
  },
  {
    title: "UI/UX Design",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined templates. I design from scratch. The combination of NextJS and Vercel forms the foundation of my web development appraoch. I employ it to provide a fast, secure, and scalable experience.",
  },
  {
    title: "Project Management",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined templates. I design from scratch. The combination of NextJS and Vercel forms the foundation of my web development appraoch. I employ it to provide a fast, secure, and scalable experience.",
  },
];

import { Banner } from "@/types";

export const Banners: Banner[] = [
  { name: "NEXTJS" },
  { name: "REACT" },
  { name: "TYPESCRIPT" },
  { name: "TAILWIND" },
  { name: "JAVASCRIPT" },
  { name: "REACT" },
  { name: "FIGMA" },
  { name: "SCRUM" },
  { name: "GIT" },
  { name: "JIRA" },
];
