import React from "react";
import { Cards } from "@/constants";
import Image from "next/image";
import CTA from "@/components/shared/CTA";

const page = () => {
  const devflowCard = Cards.find((card) => card.projectTitle === "Devflow");

  return (
    <section className="w-full flex flex-col gap-24 py-20 text-white">
      <h2 className="text-6xl black flex w-[80%]">{devflowCard?.pageHeader}</h2>
      <div className="relative w-full h-[500px]">
        <Image
          src={devflowCard?.firstImage}
          alt="devflow"
          fill={true}
          className="rounded-xl"
        />
      </div>
      <div className="flex justify-between">
        <h3 className="text-4xl w-[20%] font-semibold">Challenge</h3>
        <p className="w-[60%] text-sm font-light">{devflowCard?.challenge}</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="relative flex gap-8 w-[45%] h-[550px]">
          <Image
            src={devflowCard?.secondImage}
            alt="devflow"
            fill={true}
            className="rounded-xl"
          />
        </div>
        <div className="relative flex gap-8 w-[45%] h-[550px]">
          <Image
            src={devflowCard?.thirdImage}
            alt="devflow"
            fill={true}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="text-4xl w-[30%] font-semibold">
          {devflowCard?.sectionHeader}
        </h3>
        <p className="w-[50%] text-sm font-light">{devflowCard?.sectionDesc}</p>
      </div>
      <div className="relative w-full h-[500px]">
        <Image
          src={devflowCard?.fourthImage}
          alt="devflow"
          fill={true}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col w-[50%] gap-4 justify-between pb-24">
        <h3 className="text-4xl font-semibold">{devflowCard?.bottomHeader}</h3>
        <p className="text-sm font-light">{devflowCard?.bottomDesc}</p>
      </div>
      <CTA />
    </section>
  );
};

export default page;
