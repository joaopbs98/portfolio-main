import React from "react";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";

const Page = () => {
  return (
    <main className="flex self-center flex-col pt-12 gap-10 md:gap-16 w-full xl:gap-[12rem]">
      <Hero />
      <Projects />
      <Expertise />
    </main>
  );
};

export default Page;
