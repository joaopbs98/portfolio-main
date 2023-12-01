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
    firstImage: "/devflow.jpg",
    secondImage: "/devflow.jpg",
    sectionHeader: "The biggest project I have worked on so far.",
    sectionDesc:
      "Embarking on the journey to create a Stack Overflow clone with all its functionalities is proving to be an exciting challenge. The development process involves creating a database, a backend, and a frontend. Implementing features such as a search engine, voting system, and authentication are also part of the plan. This project marks my first encounter with NextJS, turning it into a significant learning experience. I'm currently gaining a wealth of knowledge about NextJS, Typescript, TailwindCSS, and much more.",
    thirdImage: "/devflow.jpg",
    fourthImage: "/devflow.jpg",
    bottomHeader: "Crafting a cohesive user experience with NextJS.",
    bottomDesc:
      "NextJS is my go-to framework for building websites. It is a React framework that enables server-side rendering and static site generation. It is fast, secure, and scalable. In future projects, I will continue to use NextJS to provide a fast, secure, and scalable experience. These are the foundations of my web development approach.",
    vercelLink: "https://devflow.vercel.app/",
  },
  {
    imageUrl: "/binteriores.jpg",
    projectTitle: "B-Interiores",
    projectDescription: "Project with React.JS",
    pageHeader: "string;",
    challenge: "string;",
    firstImage: "string;",
    secondImage: "string;",
    sectionHeader: "string;",
    sectionDesc: "string;",
    thirdImage: "string;",
    fourthImage: "string;",
    bottomHeader: "string;",
    bottomDesc: "string;",
    vercelLink: "https://devflow.vercel.app/",
  },
  {
    imageUrl: "/portfolio1.jpg",
    projectTitle: "My Portfolio",
    projectDescription: "This is my most recent project",
    pageHeader: "string;",
    challenge: "string;",
    firstImage: "string;",
    secondImage: "string;",
    sectionHeader: "string;",
    sectionDesc: "string;",
    thirdImage: "string;",
    fourthImage: "string;",
    bottomHeader: "string;",
    bottomDesc: "string;",
    vercelLink: "https://devflow.vercel.app/",
  },
  {
    imageUrl: "/progress.png",
    projectTitle: "Work in Progress...",
    projectDescription: "Stay tuned for new projects 🚀",
    pageHeader: "string;",
    challenge: "string;",
    firstImage: "string;",
    secondImage: "string;",
    sectionHeader: "string;",
    sectionDesc: "string;",
    thirdImage: "string;",
    fourthImage: "string;",
    bottomHeader: "string;",
    bottomDesc: "string;",
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
