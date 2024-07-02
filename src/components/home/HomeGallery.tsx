"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { getProjects } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { computed } from "@/lib/utils";

const HomeSlide = ({ poster, title, reference }: any) => {
  const positionByProject: any = {
    baleine: -75,
    buffle: 450,
  };
  const left = computed(() => {
    if (typeof window === "undefined") return "";
    if (screen.width > 640) {
      return "";
    }
    return positionByProject[reference] || "";
  });

  return (
    <CarouselItem>
      <Link
        href={`/projects/${reference}`}
        className="rounded relative h-screen flex justify-center items-center overflow-hidden"
      >
        <Image
          src={poster}
          alt={title}
          width={1500}
          height={1500}
          priority
          quality={100}
          className={`absolute top-0 left-1/2 ${
            positionByProject[reference] ? "max-[600px]:w-[unset]" : ""
          }  w-full transform -translate-x-1/2 h-[90%] rounded-lg object-cover`}
          style={{
            maxWidth: "unset",
            left,
          }}
        />
      </Link>
    </CarouselItem>
  );
};

const HomeGallery = () => {
  const projects = getProjects();
  const [api, setApi] = useState<CarouselApi>();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentImgIndex((v) => v + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col gap-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {projects.map((project) => (
            <HomeSlide key={"gallery-" + project.reference} {...project} />
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-row items-center justify-center gap-4">
        {Array.from({ length: projects.length }, (_, index) => {
          const isCurrent = index === currentImgIndex;
          const background = isCurrent ? "bg-white" : "bg-[#C9C9C9]";
          return (
            <div
              key={index}
              className={`rounded-full ${background} w-4 h-4 cursor-pointer`}
              onClick={() => {
                setCurrentImgIndex(index - 1);
                api?.scrollTo(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeGallery;
