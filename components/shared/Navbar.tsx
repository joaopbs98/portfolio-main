"use client";

import { usePathname } from "next/navigation";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={`w-fit flex items-end align-center justify-center gap-4 p-2 bg-black self-end rounded-full z-10 transition fixed md:items-center md:self-center`}
    >
      {navbarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <Link legacyBehavior key={item.route} href={item.route}>
            <a
              className={
                isActive
                  ? "hidden md:flex bg-white transition font-semibold text-base px-4 py-2 relative rounded-full hover:bg-[#d8d8d8]"
                  : "hidden md:flex text-[#B8B8B8] transition font-semibold text-sm px-4 py-2 relative rounded-md hover:text-[#d8d8d8]"
              }
            >
              {item.label}
            </a>
          </Link>
        );
      })}
      <MobileNav />
    </nav>
  );
};

export default Navbar;
