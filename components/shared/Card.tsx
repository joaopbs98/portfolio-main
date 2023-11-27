import React from "react";
import Image from "next/image";

const Card = ({ imageUrl, projectTitle, projectDescription }: any) => {
  return (
    <div>
      <div className="relative w-[600px] h-[600px] overflow-hidden">
        <Image
          className="rounded-3xl transition duration-300 ease-in-out  hover:opacity-70 cursor-pointer"
          src={imageUrl}
          alt={`project ${projectTitle}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h5 className="text-2xl font-bold text-white pt-8 pb-4">
        {projectTitle}
      </h5>
      <p className="font-normal text-gray-500">{projectDescription}</p>
    </div>
  );
};

export default Card;
