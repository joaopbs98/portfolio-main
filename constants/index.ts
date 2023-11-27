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
  },
  {
    imageUrl: "/binteriores.jpg",
    projectTitle: "B-Interiores",
    projectDescription: "Project with React.JS",
  },
  {
    imageUrl: "/portfolio1.jpg",
    projectTitle: "My Portfolio",
    projectDescription: "This is my recente project",
  },
  {
    imageUrl: "/progress.png",
    projectTitle: "Work in Progress...",
    projectDescription: "Stay tune for new projects 🚀",
  },
];

import { ExpertiseInfo } from "@/types";

export const ExpertiseInfos: ExpertiseInfo[] = [
  {
    title: "• Frontend Development",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined templates. I design from scratch. The combination of NextJS and Vercel forms the foundation of my web development appraoch. I employ it to provide a fast, secure, and scalable experience.",
  },
  {
    title: "• Backend Development",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined templates. I design from scratch. The combination of NextJS and Vercel forms the foundation of my web development appraoch. I employ it to provide a fast, secure, and scalable experience.",
  },
  {
    title: "• UI/UX Design",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined templates. I design from scratch. The combination of NextJS and Vercel forms the foundation of my web development appraoch. I employ it to provide a fast, secure, and scalable experience.",
  },
  {
    title: "• Project Management",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined templates. I design from scratch. The combination of NextJS and Vercel forms the foundation of my web development appraoch. I employ it to provide a fast, secure, and scalable experience.",
  },
];
