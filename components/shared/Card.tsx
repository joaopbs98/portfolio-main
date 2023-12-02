import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ imageUrl, projectTitle, projectDescription, href }: any) => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[300px] overflow-hidden md:w-[40vw] lg:w-[100%] lg:h-[500px]">
        {href ? (
          <Link legacyBehavior href={href}>
            <a>
              <Image
                className="rounded-3xl transition duration-300 ease-in-out hover:opacity-70 cursor-pointer"
                src={imageUrl}
                alt={`project ${projectTitle}`}
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        ) : (
          <Image
            className="rounded-3xl transition duration-300 ease-in-out hover:opacity-70 cursor-pointer"
            src={imageUrl}
            alt={`project ${projectTitle}`}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className="flex-col pb-8 pt-2 gap-4">
        <h5 className="text-2xl font-bold text-white">{projectTitle}</h5>
        <p className=" text-gray-500 text-sm font-light">
          {projectDescription}
        </p>
      </div>
    </div>
  );
};

export default Card;
