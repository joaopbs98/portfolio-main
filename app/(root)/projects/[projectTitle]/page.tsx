import React from "react";
import { Cards } from "@/constants";
import Image from "next/image";
import CTA from "@/components/shared/CTA";
import { Button } from "@/components/ui/button";

const page = ({ params }: any) => {
  const Card = Cards.find((card) => card.projectTitle === params.projectTitle);

  return (
    <section className="w-full flex flex-col gap-12 md:gap-24 py-20 text-white">
      <h2 className=" text-3xl black flex w-full md:w-[80%] md:text-6xl">
        {Card?.pageHeader}
      </h2>
      <div className="relative w-full h-[200px] md:h-[400px] lg:h-[500px]">
        <Image
          src={Card!.firstImage}
          alt="Project Image"
          fill={true}
          className="rounded-xl lg:object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <h3 className="text-2xl w-full font-semibold md:text-4xl md:w-[20%]">
          Challenge
        </h3>
        <p className=" w-full text-sm font-light md:w-[60%]">
          {Card?.challenge}
        </p>
      </div>
      <div className="flex flex-col w-full justify-between gap-4 md:flex-row">
        <div className="relative flex gap-8 md:gap-0 w-full h-[300px] md:h-[350px] md:w-[50%] lg:h-[550px] lg:w-[45%]">
          <Image
            src={Card!.secondImage}
            alt="Project Image"
            fill={true}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="relative flex gap-8 md:gap-0 w-full h-[300px] md:h-[350px] md:w-[50%] lg:h-[550px] lg:w-[45%]">
          <Image
            src={Card!.thirdImage}
            alt="Project Image"
            fill={true}
            className="rounded-xl object-fill"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <h3 className="text-2xl w-full font-semibold md:text-4xl md:w-[35%]">
          {Card?.sectionHeader}
        </h3>
        <p className=" w-full text-sm font-light md:w-[60%]">
          {Card?.sectionDesc}
        </p>
      </div>
      <div className="relative flex gap-8 w-full h-[300px] md:h-[550px] md:w-full">
        <Image
          src={Card!.fourthImage}
          alt="Project Image"
          fill={true}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 justify-between lg:w-[50%]">
        <h3 className="text-2xl w-full font-semibold md:text-4xl">
          {Card?.bottomHeader}
        </h3>
        <p className="text-sm font-light">{Card?.bottomDesc}</p>
        <Button className="w-fit">
          <a href={Card!.vercelLink}>Vercel Link</a>
        </Button>
      </div>
      <CTA />
    </section>
  );
};

export default page;
