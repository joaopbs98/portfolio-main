"use client";

import React from "react";
import { Banners } from "@/constants";
import Marquee from "react-fast-marquee";

const InfiniteScroll = () => {
  return (
    <div className="align-center flex h-fit w-screen justify-center self-center p-0 m-0 ">
      <Marquee gradient={true} gradientColor="#141414">
        {Banners.map((item) => {
          return (
            <div
              key={item.name}
              className="px-8 text-4xl md:text-7xl font-white black text-white text-center"
            >
              {item.name}
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default InfiniteScroll;
