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
    imageUrl: "/assets/images/devflow.png",
    projectTitle: "Devflow",
    projectDescription: "Project with Next.JS",
  },
  {
    imageUrl: "/assets/images/binteriores.png",
    projectTitle: "Binteriores",
    projectDescription: "Project with React.JS",
  },
  {
    imageUrl: "/assets/images/portfolio1.png",
    projectTitle: "My Portfolio",
    projectDescription: "This is my recente project",
  },
  {
    imageUrl: "/assets/images/progress.jpeg",
    projectTitle: "Work in Progress...",
    projectDescription: "Stay tune for new projects 🚀",
  },
];
