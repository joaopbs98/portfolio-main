"use client";

import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import { Button } from "./ui/button";

export default function ContactUs() {
  const [feedback, setFeedback] = useState("");

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "joaoPedroSilva",
        "template_av1kpzh",
        form.current,
        "w1xcLaDaWwQOymyPe"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.href = "/emailsend";
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 self-center justify-items-center py-6 w-full md:w-[600px] xl:w-[800px] animate-fade-right animate-once animate-delay-100"
    >
      <div className="flex bg-black rounded-full px-4 py-4 gap-4">
        <label className="text-[#B8B8B8] font-semibold text-sm px-2">
          <input
            type="text"
            name="user_name "
            className="text-[#B8B8B8] font-semibold text-sm bg-black focus:outline-none w-full md:w-[550px] xl:w-[750px]"
            placeholder="Name"
            required
          />
        </label>
      </div>
      <div className="flex bg-black rounded-full px-4 py-4 gap-4">
        <label className="text-[#B8B8B8] font-semibold text-sm px-2">
          <input
            type="email"
            name="user_name"
            className="text-[#B8B8B8] font-semibold text-sm bg-black  focus:outline-none w-full md:w-[550px] xl:w-[750px]"
            placeholder="E-Mail Adress"
            required
          />
        </label>
      </div>
      <div className="flex bg-black rounded-full px-4 py-4 gap-4">
        <label className="text-[#B8B8B8] font-semibold text-sm px-2">
          <input
            type="text"
            name="user_name "
            className="text-[#B8B8B8] font-semibold text-sm bg-black focus:outline-none w-full md:w-[550px] xl:w-[750px]"
            placeholder="Mobile Number"
          />
        </label>
      </div>
      <div className="flex bg-black rounded-full px-4 py-4 gap-4">
        <label className="text-[#B8B8B8] font-semibold text-sm px-2">
          {" "}
          <input
            type="text"
            name="user_name "
            className="text-[#B8B8B8] font-semibold text-sm bg-black focus:outline-none w-full md:w-[550px] xl:w-[750px]"
            placeholder="Title"
            required
          />
        </label>
      </div>
      <div className="flex bg-black rounded-xl px-4 py-4 gap-4 ">
        <label className="text-[#B8B8B8] font-semibold w-full text-sm px-2">
          <textarea
            name="message"
            className="text-[#B8B8B8] font-semibold text-sm bg-black resize-y h-auto  w-full md:w-[550px] xl:w-[750px] focus:outline-none "
            placeholder="Your message here..."
            rows={8}
            required
          />
        </label>
      </div>
      <Button className="rounded-full bg-white text-141414 cursor-pointer hover:bg-[#d8d8d8] w-fit px-6 self-center">
        Submit
      </Button>
    </form>
  );
}
