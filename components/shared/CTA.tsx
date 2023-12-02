"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";
import { useIsVisible } from "@/utils/useIsVisible";

const CTA = () => {
  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref5);

  return (
    <section
      ref={ref5}
      className={`flex flex-col justify-items-center gap-10 pb-[20%] transition-opacity ease-in duration-700 ${
        isVisible1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <h5 className="self-center text-white text-7xl leading-[1] md:text-9xl xl:text-[10rem] animate-fade-right animate-once animate-delay-100">
        Let&apos;s talk!
      </h5>
      <Button className=" w-fit text-center text-sm px-8 py-8 rounded-full cursor-pointer self-center md:text-normal xl:text-lg xl:py-10 animate-fade-left animate-once animate-delay-100">
        <a href="mailto:joaopbs98@gmail.com">joaopbs98@gmail.com →</a>
      </Button>
    </section>
  );
};

export default CTA;
