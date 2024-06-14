"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProjectCarousel = ({ images, currentMainImgIndex, onSelectImg }: any) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mx-auto max-w-[80%]"
    >
      <CarouselContent>
        {images.map((imageSrc: string, index: number) => {
          const isSelected =
            index === currentMainImgIndex
              ? "border-solid border-2 border-white"
              : "";
          return (
            <CarouselItem
              key={index}
              className={
                "basis-1/3 md:basis-1/2 lg:basis-1/3 cursor-pointer rounded max-h-[300px]"
              }
              onClick={() => onSelectImg(index)}
            >
              <div
                className={
                  "p-1 flex justify-center cover relative w-full h-full"
                }
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 rounded border-solid border-2 border-slate-500" />
                )}

                <Image
                  src={imageSrc}
                  alt="temp"
                  width={1000}
                  height={500}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="100vw"
                  className={"object-contain"}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="text-white" />
      <CarouselNext className="text-white" />
    </Carousel>
  );
};

const SingleProjectImages = ({ images }: { images: string[] }) => {
  const [mainImg, setMainImg] = useState(0);

  const renderContent = () => {
    const isAVideo = images[mainImg].search("mov");
    if (isAVideo !== -1) {
      return (
        <video className="video h-[300px] sm:h-[80vh] object-contain">
          <source src={images[mainImg]} type="video/mp4" />
        </video>
      );
    }
    return (
      <Image
        alt="title"
        src={images[mainImg]}
        width={1000}
        height={600}
        style={{
          width: "100%",
        }}
        className="rounded object-contain h-[300px] sm:h-[80vh]"
      />
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full">{renderContent()}</div>
      <ProjectCarousel
        images={images}
        currentMainImgIndex={mainImg}
        onSelectImg={setMainImg}
      />
    </div>
  );
};

export default SingleProjectImages;
