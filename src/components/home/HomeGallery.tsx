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

const HomeSlide = ({ images, title }: any) => {
  return (
    <CarouselItem>
      <div className="video-container w-full h-screen overflow-hidden flex justify-center items-center">
        <div className="video absolute top-0 left-1/2 transform -translate-x-1/2 h-full rounded">
          <Image
            src={images[0]}
            alt={title}
            width={2000}
            height={2000}
            style={{ maxWidth: "unset" }}
          />
        </div>
      </div>
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

  console.log("api", api);

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
