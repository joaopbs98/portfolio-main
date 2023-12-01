import React from "react";
import { Banners } from "@/constants";
import { Item } from "@radix-ui/react-menubar";

const InfiniteScroll = () => {
  return (
    <div className="align-center flex h-fit w-screen justify-center self-center p-0 m-0 ">
      <div className="slider">
        <div className="slide-track items-center place-content-center justify-center align-middle gap-2">
          {Banners.map((item) => {
            return (
              <div
                key={item.name}
                className="slide text-4xl md:text-7xl font-white black text-white text-center"
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
