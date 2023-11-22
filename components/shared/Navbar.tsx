"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const [animateClass, setAnimateClass] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimateClass("animate-fade-down");
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <nav
      className={`w-fit flex items-center align-center justify-center gap-4 p-2 bg-[#141414] self-center rounded-full ${animateClass}`}
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
                  ? " bg-white font-semibold text-base px-4 py-2 relative rounded-full "
                  : "text-[#B8B8B8] font-semibold text-sm px-4 py-2 relative rounded-md"
              }
            >
              {item.label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
