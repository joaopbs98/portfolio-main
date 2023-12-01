"use client";

import React, { useRef, useState } from "react";
import Card from "./shared/Card";
import { Cards } from "@/constants";
import { Button } from "./ui/button";
import { useIsVisible } from "../utils/useIsVisible";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 2;
  const totalCards = Cards.length;

  const handleNext = () => {
    let newIndex = startIndex + cardsPerPage;

    if (newIndex >= totalCards) {
      newIndex = 0;
    }

    setStartIndex(newIndex);
  };

  const visibleCards = Cards.slice(startIndex, startIndex + cardsPerPage);

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  return (
    <section className="w-full flex-col gap-4">
      <div
        ref={ref1}
        className={`mb-[3rem] flex-col transition-opacity ease-in duration-700 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full flex justify-between align-items-end">
          <h2 className="text-4xl mb-[1rem] text-white font-bold md:text-5xl">
            Projects
          </h2>

          <a
            href="/projects"
            className="group text-white text-sm transition h-fit self-end pb-4 md:text-normal duration-300"
          >
            More →
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
        </div>
        <p className="text-white w-[99%] font-light leading-tight md:w-3/4 lg:w-2/4">
          With experience in designing and developing user-friendly web designs
          and digital solutions, I aim to assist your company in constructing
          the ideal project.
        </p>
      </div>
      <div
        ref={ref2}
        className={`flex-col justify-between gap-14 items-center transition-opacity ease-in duration-700 md:flex md:flex-row md:justify-center ${
          isVisible2 ? "opacity-100" : "opacity-0"
        } `}
      >
        {visibleCards.map((item) => (
          <Card
            key={item.projectTitle}
            imageUrl={item.imageUrl}
            projectDescription={item.projectDescription}
            projectTitle={item.projectTitle}
          />
        ))}
        <Button
          className="hidden p-4 pb-6 w-14 h-14 ml-6 rounded-full items-center bg-141414 justify-center cursor-pointer border border-white hover:border-none hover:animate-none lg:flex"
          onClick={handleNext}
        >
          <span className="text-extrabold text-[2rem]">→</span>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
