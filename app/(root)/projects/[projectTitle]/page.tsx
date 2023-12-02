import React from "react";
import { Cards } from "@/constants";
import Image from "next/image";
import CTA from "@/components/shared/CTA";
import { Button } from "@/components/ui/button";

const page = ({ params }: any) => {
  const Card = Cards.find((card) => card.projectTitle === params.projectTitle);

  return (
    <section className="w-full flex flex-col gap-24 py-20 text-white">
      <h2 className="text-6xl black flex w-[80%]">{Card?.pageHeader}</h2>
      <div className="relative w-full h-[500px]">
        <Image
          src={Card!.firstImage}
          alt="Project Image"
          fill={true}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex justify-between">
        <h3 className="text-4xl w-[20%] font-semibold">Challenge</h3>
        <p className="w-[60%] text-sm font-light">{Card?.challenge}</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="relative flex gap-8 w-[45%] h-[550px]">
          <Image
            src={Card!.secondImage}
            alt="Project Image"
            fill={true}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="relative flex gap-8 w-[45%] h-[550px]">
          <Image
            src={Card!.thirdImage}
            alt="Project Image"
            fill={true}
            className="rounded-xl object-fill"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="text-4xl w-[30%] font-semibold">
          {Card?.sectionHeader}
        </h3>
        <p className="w-[50%] text-sm font-light">{Card?.sectionDesc}</p>
      </div>
      <div className="relative w-full h-[500px]">
        <Image
          src={Card!.fourthImage}
          alt="Project Image"
          fill={true}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col w-[50%] gap-4 justify-between pb-24">
        <h3 className="text-4xl font-semibold">{Card?.bottomHeader}</h3>
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
