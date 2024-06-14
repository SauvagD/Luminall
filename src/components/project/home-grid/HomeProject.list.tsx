"use client";

import { getProjects } from "@/lib/data";
import { computed } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HomeProjectListItem = ({
  reference,
  images,
  title,
  description,
  isLastAndImpair,
  className,
}: any) => {
  const lastSection = isLastAndImpair ? "overflow-hidden h-96" : "";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      key={reference}
      href={`/projects/${reference}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`transition transition-all ease-in-out duration-300 relative hover:z-10 ${
        isLastAndImpair ? "" : "sm:hover:scale-125"
      } hover:shadow-2xl cursor-pointer ${className} rounded overflow-hidden aspect-image ${lastSection}`}
    >
      {isHovered && (
        <div className="flex flex-col justify-end gap-4 absolute bottom-0 right-0 left-0  bg-gradient-to-t from-black to-bg-background bg-opacity-50 h-3/6 p-6">
          <p className="uppercase text-1xl text-white font-bold">{title}</p>
          <p
            className="text-normal text-white text-balance two-lines-ellipsis"
            style={{
              color: "#C9C9C9",
            }}
          >
            {description}
          </p>
        </div>
      )}
      <Image
        src={images[0]}
        alt={description}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
        width={1000}
        height={500}
      />
    </Link>
  );
};

const HomeProjectList = () => {
  const projects = getProjects();

  const projectsWithClassnames = projects.map((project, index) => {
    const className = computed(() => {
      // if (project.reference === "packshot-brewdog") {
      //   return "col-span-5 row-span-2";
      // }
      // if ([7, 8].includes(index)) {
      //   return "col-span-7 row-span-1";
      // }
      return "col-span-6 row-span-1";
    });
    return {
      ...project,
      className,
    };
  });

  return (
    <div className="text-white flex flex-col gap-6" id="projects">
      <h2 className="shadow text-center uppercase text-3xl sm:text-5xl text-white ">
        Projects
      </h2>
      <div className="grid sm:grid-cols-12 sm:grid-rows-4 gap-6 min-h-[1500px]">
        {projectsWithClassnames.map((project, index) => (
          <HomeProjectListItem
            key={project.reference}
            {...project}
            isLastAndImpair={
              projects.length % 2 !== 0 && index === projects.length - 1
            }
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProjectList;
