"use client";

import React, { useState } from "react";
import Card from "./shared/Card";
import { Cards } from "@/constants";
import { Button } from "./ui/button";

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

  return (
    <section className="bg-black border-none w-[600px] pt-24">
      <h3 className="text-5xl font-bold text-white pt-8 pb-10 ">Projects:</h3>
      <div className="flex justify-between gap-14 items-center">
        {visibleCards.map((item) => (
          <Card
            key={item.projectTitle}
            imageUrl={item.imageUrl}
            projectDescription={item.projectDescription}
            projectTitle={item.projectTitle}
          />
        ))}
        <Button
          className="animate-ping p-4 pb-6 w-14 h-14 mb-20 ml-6 rounded-full flex items-center bg-black justify-center cursor-pointer border border-white hover:border-none hover:animate-none"
          onClick={handleNext}
        >
          <span className="text-extrabold text-[2rem]">→</span>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
