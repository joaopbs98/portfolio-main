import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FlareCursor from "@/components/FlareCursor";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex bg-[#141414] min-h-screen flex-1 flex-col px-6 pb-6 pt-12 max-md:pb-14 sm:px-14">
      <div className="flex flex-col mx-auto w-full max-w-5x1 xl:max-w-screen-xl">
        <FlareCursor />
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
