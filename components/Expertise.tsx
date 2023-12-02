"use client";

import React, { useRef } from "react";
import { ExpertiseInfos } from "@/constants";
import { useIsVisible } from "../utils/useIsVisible";

const Expertise = () => {
  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  return (
    <section>
      <h2
        ref={ref3}
        className={`text-white text-4xl font-bold mb-[2rem] flex-col transition-opacity ease-in duration-700 ${
          isVisible3 ? "opacity-100" : "opacity-0"
        }`}
      >
        Expertise
      </h2>
      <div
        ref={ref4}
        className={`flex-row gap-8 w-full mb-[3rem] transition-opacity ease-in duration-700 ${
          isVisible4 ? "opacity-100" : "opacity-0"
        } md:grid-cols-2 md:grid md:gap-4`}
      >
        {ExpertiseInfos.map((item) => {
          return (
            <div key={item.title} className="pt-8 lg:w-[80%]">
              <h3 className="text-white text-xl pb-2 font-semibold lg:text-2xl">
                {item.title}
              </h3>
              <p className="text-white font-light leading-tight  lg:text-lg">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
