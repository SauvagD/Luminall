"use client";

import { getProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HomeProjectListItem = ({
  reference,
  poster,
  title,
  description,
  isLastAndImpair,
}: any) => {
  const lastSection = isLastAndImpair ? "overflow-hidden h-96" : "";
  const [isHovered, setIsHovered] = useState(false);

  const referenceWithCustomPostion = ["orc", "dragon"];

  return (
    <Link
      key={reference}
      href={`/projects/${reference}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`transition transition-all ease-in-out duration-300 relative hover:z-10 ${
        isLastAndImpair ? "" : "sm:hover:scale-125"
      } hover:shadow-2xl cursor-pointer col-span-6 row-span-1 rounded overflow-hidden aspect-image ${lastSection}`}
      style={{
        aspectRatio: 1.8,
      }}
    >
      {isHovered && (
        <div className="flex flex-col justify-end gap-4 absolute bottom-0 right-0 left-0 z-50  bg-gradient-to-t from-black to-bg-background bg-opacity-50 h-3/6 p-6">
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
        src={poster}
        alt={description}
        sizes="100vw"
        className={`absolute z-0 ${
          referenceWithCustomPostion.includes(reference) ? "-top-[100px]" : ""
        }`}
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

  return (
    <div>
      <div className="py-8" id="projects" />
      <div className="text-white flex flex-col gap-6">
        <h2 className="shadow text-center uppercase text-3xl sm:text-5xl text-white ">
          Projects
        </h2>
        <div className="grid sm:grid-cols-12 sm:grid-rows-4 gap-6 min-h-[1500px]">
          {projects.map((project, index) => (
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
    </div>
  );
};

export default HomeProjectList;
