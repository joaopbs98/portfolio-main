import { Button } from "@/components/ui/button";
import React from "react";

const emailsend = () => {
  return (
    <div className="flex flex-col self-center px-6 py-10 h-full">
      <span className="flex justify-center  text-white text-4xl leading-[1] md:text-7xl xl:text-[6rem] animate-fade-right animate-once animate-delay-100">
        Your message was succesfully delivered.
      </span>
      <span className="py-10 font-bold text-white text-3xl leading-[1] md:text-6xl xl:text-[4rem] animate-fade-right animate-once animate-delay-100">
        Thank you!
      </span>
      <Button className=" w-fit text-sm rounded-full cursor-pointer py-6 px-6 md:text-normal xl:text-lg xl:py-8 animate-fade-left animate-once animate-delay-100">
        <a href="/">← Back to Home page</a>
      </Button>
    </div>
  );
};

export default emailsend;
