"use client";

import React from "react";
import { Button } from "./ui/button";
import Lottie from "lottie-react";
import animationData from "../public/lottie/hero.json";

const Hero = () => {
  return (
    <section className="flex self-center flex-col gap-10 md:gap-16 w-full xl:gap-20 cursor-default py-14">
      <Lottie
        animationData={animationData}
        className="absolute top-[8rem] animate-fade-right animate-once animate-delay-100 md:top-[4rem]"
        loop={true}
      />
      <div className="text-white flex flex-col w-full justify-self-center gap-10 md:flex-row md:justify-between ">
        <h1 className=" text-7xl text-start leading-[1] md:text-9xl xl:text-[10rem] animate-fade-right animate-once animate-delay-100">
          Hi! <br />
          <span className="xl:text-[12rem]">
            I&apos;m <span className="font-bold">João.</span>
          </span>
        </h1>{" "}
        <Button className="w-fit text-center text-sm px-2 py-4 cursor-default rounded-full hover:bg-main self-end md:text-normal xl:text-lg xl:p-6 animate-fade-left animate-once animate-delay-100">
          SCROLL DOWN&nbsp;
          <span className="animate-bounce text-extrabold text-[1.5rem] md:text-[2rem]">
            ↓
          </span>
        </Button>
      </div>
      <div className="flex flex-row w-full gap-4 justify-between">
        <div className="flex flex-col w-2/5 text-white animate-fade animate-once animate-delay-200">
          <p className="text-[20px] md:text-3xl w-full font-bold">
            Let&apos;s talk
          </p>
          <p className="text-[14px] w-full font-light md:text-lg xl:text-xl">
            joaopbs98@gmail.com
          </p>
        </div>
        <div className="flex w-4/6 text-left text-white lg:w-2/6 animate-fade animate-once animate-delay-200">
          <p className="text-[0.95rem] md:text-lg xl:text-xl leading-tight">
            In the Frontend realm, excelling with NextJS 14, bringing creativity
            to every digital venture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
