import React from "react";
import Image from "next/image";
import CTA from "@/components/shared/CTA";
import { LibrarySquare, PenLine, Zap } from "lucide-react";

const Page = () => {
  return (
    <section className="w-full flex flex-col gap-8 py-20 text-white">
      <div className="mb-[3rem] flex-col md:flex-row xl:flex-row transition-opacity ease-in duration-700">
        <div className="w-full flex flex-col gap-10 md:flex-row xl:flex-row md:justify-between md:gap-20">
          <div className="flex-col w-full">
            <h2 className="text-4xl mb-[1rem] text-white font-semibold md:text-5xl md:order-1 xl:order-1 xl:mr-60">
              &#123;About&#125;
            </h2>
            <Image
              src="/applemoji.webp"
              width={200}
              height={200}
              alt="Apple Profile Picture"
              className="w-full md:w-fit self-center"
            />
          </div>
          <p className="text-white font-light md:text-lg md:order-2 xl:order-2 items-end md:ml-40 xl:ml-50 md:pb-10">
            I&apos;m a Front-End developer with a strong passion for continuous
            learning. Currently delving into{" "}
            <span className="font-bold">Java</span> with a focus on the{" "}
            <span className="font-bold">Spring Framework</span>, I&apos;m
            dedicated to honing my skills and becoming a well-rounded developer.
            Drawing from my background in UI/UX Design, I strive to create
            compelling user interfaces. Additionally, my experience in project
            management has instilled in me a keen sense of organization and
            efficiency, qualities I bring to every aspect of my work. Always
            eager to tackle new challenges and elevate my craft, I&apos;m
            committed to delivering impactful digital solutions.
          </p>
        </div>
        <hr className="hidden md:flex border-t-2 border-[#303030]" />
      </div>

      <div className="gap-4 md:gap-14 transition-opacity ease-in duration-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:pb-20">
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Education</h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">ISAG Porto</h4>
              <p className="text-sm font-light">
                Bachelor of Business Relations
              </p>
              <p className="text-sm font-light">2017 - 2021</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">EDIT. Porto</h4>
              <p className="text-sm font-light">
                Full-Stack Development Bootcamp
              </p>
              <p className="text-sm font-light">2023</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Lisbon School of Design</h4>
              <p className="text-sm font-light">UI/UX Design Course</p>
              <p className="text-sm font-light">2022 - 2023</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Experience</h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">
                Freelance Front-End Developer
              </h4>
              <p className="text-sm font-light">Self-Employed</p>
              <p className="text-sm font-light">September 2023 - Now</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Adminstrative Manager</h4>
              <p className="text-sm font-light">B-Interiores</p>
              <p className="text-sm font-light">October 2022 - August 2023</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Project Manager</h4>
              <p className="text-sm font-light">PRIMARIU</p>
              <p className="text-sm font-light">February 2021 - June 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pb-4 md:gap-14 transition-opacity ease-in duration-700">
        <h2 className="text-3xl font-semibold">Why work with me?</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between w-full md:px-[2rem]">
          <div className="flex flex-col items-center w-full gap-2">
            <LibrarySquare size={24} />
            <h4 className="text-normal font-semibold">Eagerness to Learn</h4>
            <p className="text-sm font-light ">
              As a dedicated developer, I thrive on a constant quest for
              knowledge. Eager to explore emerging technologies and frameworks,
              I approach challenges as opportunities for growth.
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-2">
            <Zap size={24} />
            <h4 className="text-normal font-semibold">Dynamic and Proactive</h4>
            <p className="text-sm font-light">
              I embrace change with enthusiasm, translating it into impactful
              and efficient solutions. In the ever-evolving landscape of
              development, my proactive mindset propels projects forward with
              agility and effectiveness.
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-2">
            <PenLine size={24} />
            <h4 className="text-normal font-semibold">Creative Solutions</h4>
            <p className="text-sm font-light">
              As a developer committed to creativity, I specialize in delivering
              innovative solutions. Embracing challenges as opportunities for
              inventive problem-solving, I bring a unique perspective to every
              project.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-[#303030] md:pb-48" />
      <CTA />
    </section>
  );
};

export default Page;
