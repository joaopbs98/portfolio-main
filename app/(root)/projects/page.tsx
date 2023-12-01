import { Cards } from "@/constants";

import Card from "@/components/shared/Card";
import CTA from "@/components/shared/CTA";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <section className="w-full flex flex-col gap-4 py-10 md:py-20">
      <div className="mb-[3rem] flex-col md:flex-row xl:flex-row transition-opacity ease-in duration-700">
        <div className="w-full flex flex-col md:flex-row xl:flex-row md:justify-between  md:gap-20  ">
          <h2 className="text-4xl mb-[1rem] text-white font-semibold md:text-5xl md:order-1 xl:order-1 xl:mr-60">
            &#123;Projects&#125;
          </h2>
          <p className="text-white font-light md:text-lg md:order-2 xl:order-2 items-end md:ml-40 xl:ml-50 md:pb-10">
            With experience in designing and developing user-friendly web
            designs and digital solutions, I aim to assist your company in
            constructing the ideal project.
          </p>
        </div>
        <hr className="hidden md:flex border-t-2 border-[#303030]"></hr>
      </div>

      <div className="gap-4 md:gap-14 transition-opacity ease-in duration-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:pb-20 ">
        {Cards.map((item) => (
          <div key={item.projectTitle} className="w-full">
            <Link
              legacyBehavior
              href={`/projects/${encodeURIComponent(item.projectTitle)}`}
            >
              <a>
                <Card
                  imageUrl={item.imageUrl}
                  projectDescription={item.projectDescription}
                  projectTitle={item.projectTitle}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
      <CTA />
    </section>
  );
};

export default ProjectsPage;
