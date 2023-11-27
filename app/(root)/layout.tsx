import React from "react";
import Navbar from "@/components/shared/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex bg-black min-h-screen flex-1 flex-col px-6 pb-6 pt-12 max-md:pb-14 sm:px-14">
      <div className="flex flex-col mx-auto w-full max-w-5x1 xl:max-w-screen-xl">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
