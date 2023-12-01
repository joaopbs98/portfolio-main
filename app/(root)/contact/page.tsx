import React from "react";
import ContactUs from "@/components/Contact";

const Contact = () => {
  return (
    <section className="flex flex-col gap-10 py-16">
      <div className=" flex flex-col self-center ">
        <span className="flex justify-center text-center text-white text-4xl leading-[1] md:text-7xl xl:text-[6rem] animate-fade-right animate-once animate-delay-100">
          Want to work with me?
        </span>
        <span className=" font-bold flex justify-center text-white text-4xl leading-[1] md:text-7xl xl:text-[6rem] animate-fade-right animate-once animate-delay-100">
          Let&apos;s connect!
        </span>
      </div>
      <ContactUs />
    </section>
  );
};

export default Contact;
