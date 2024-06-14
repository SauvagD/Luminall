import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageName(imageSrc: string) {
  const imageSrcSplitted = imageSrc.split("/");
  return imageSrcSplitted[imageSrcSplitted.length - 1].split(".")[0];
}

export function computed(callback: any) {
  return callback();
}
