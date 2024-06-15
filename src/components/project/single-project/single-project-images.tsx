"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { getImageName } from "@/lib/utils";
import play from "../../../../public/icons/play.svg";

const videoFormats = ["mov", "mp4"];

const ProjectCarousel = ({ images, currentMainImgIndex, onSelectImg }: any) => {
  const [api, setApi] = useState<CarouselApi>();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      setApi={setApi}
      className="w-full mx-auto max-w-[80%]"
    >
      <CarouselContent>
        {images.map((imageSrc: string, index: number) => {
          const isSelected =
            index === currentMainImgIndex
              ? "border-solid border-2 border-white"
              : "";

          const renderContent = () => {
            if (videoFormats.some((format) => imageSrc.search(format) !== -1)) {
              return (
                <div className="relative flex justify-center items-center">
                  <Image
                    src={play}
                    alt=""
                    className="absolute"
                    width={50}
                    height={50}
                  />
                  <video className="video object-cover flex justify-center items-center">
                    <source src={imageSrc} type="video/mp4" />
                  </video>
                </div>
              );
            }
            return (
              <Image
                src={imageSrc}
                alt={getImageName(imageSrc)}
                width={1000}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                sizes="100vw"
                className="object-cover"
              />
            );
          };

          return (
            <CarouselItem
              key={index}
              className="basis-1/3 md:basis-1/2 lg:basis-1/3 cursor-pointer rounded max-h-[250px]"
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
                {renderContent()}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious
        className="text-white"
        onClick={() => {
          onSelectImg(api?.previousScrollSnap());
          api?.scrollPrev();
        }}
      />
      <CarouselNext
        className="text-white"
        onClick={() => {
          const currentItem = api?.selectedScrollSnap() || 0;
          onSelectImg(currentItem + 1);
          api?.scrollNext();
        }}
      />
    </Carousel>
  );
};

const SingleProjectImages = ({ images }: { images: string[] }) => {
  const [mainImg, setMainImg] = useState(0);

  const renderContent = () => {
    if (
      videoFormats.some(
        (format: string) => images[mainImg].search(format) !== -1
      )
    ) {
      return (
        <video
          key={images[mainImg]}
          className="video h-[300px] sm:h-[80vh] object-contain"
          controls
          autoPlay
        >
          <source src={images[mainImg]} type="video/mp4" />
        </video>
      );
    }
    return (
      <Image
        alt={getImageName(images[mainImg])}
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
      {images.length > 1 && (
        <ProjectCarousel
          images={images}
          currentMainImgIndex={mainImg}
          onSelectImg={setMainImg}
        />
      )}
    </div>
  );
};

export default SingleProjectImages;
