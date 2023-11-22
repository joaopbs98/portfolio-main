import React from "react";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <section className="flex w-fit self-center flex-col px-1 py-8 gap-4">
      <h1 className="text-white text-[4rem] sm:text-[6rem] leading-[0.8] md:text-[8rem] lg:text-[10rem] xl:text-[16rem]">
        Websites&
        <br />
        Design
        <Button className="w-fit relative hover:bg-main ml-3 bottom-3 cursor-default text-center xl:ml-40 xl:bottom-12 md:ml-[40px] md:bottom-10 text-normal font-semibold md:text-lg lg:text-xl px-2 py-6 md:px-4 md:py-8 lg:px-6 lg:py-8 rounded-full">
          Scroll Down&nbsp;
          <span className="animate-bounce text-extrabold text-[2rem]">↓</span>
        </Button>
      </h1>{" "}
      <div className="w-full flex justify-between">
        <div className="w-4 flex flex-col flex-wrap text-white p-6 justify-between">
          <p className="text-xl font-bold">Let's talk</p>
          <p>joaopbs98@gmail.com</p>
        </div>
        <div className="w-[24rem] flex flex-col text-white text-end justify-center">
          <p className="flex justify-self-end flex-col gap-2">
            Hello, I&apos;m João, a Frontend Developer focusing on learning a
            bit of everything, everyday.
            <p className="text-sm">
              <span className="font-bold">Current goal:</span> Master NextJS 14
              and Java.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
