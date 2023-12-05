"use client";

import { HTMLAttributes, useState } from "react";
import Image from "next/image";
import { ImageInterface } from "@/interfaces/image-interface";

interface Props extends HTMLAttributes<HTMLDivElement> {
  images: ImageInterface[];
}

export function ImageCarousel({ images, ...rest }: Props) {
  const [showIndex, setShowIndex] = useState<number>(0);

  const showNextImage = () => {
    if (!images) return;
    const nextIndex = images.length - 1 > showIndex ? showIndex + 1 : 0;
    setShowIndex(nextIndex);
  };

  const showPrevImage = () => {
    if (!images) return;
    const prevIndex = showIndex > 0 ? showIndex - 1 : images.length - 1;
    setShowIndex(prevIndex);
  };

  return (
    <div className="relative sm:hidden flex flex-col items-center" {...rest}>
      <span className="text-primary-900 dark:text-primary-50 pl-4 sm:pl-0 self-start">
        <span className="text-primary-600 dark:text-primary-400">&#91;</span>
        {images.map((_image, ind, arr) => (
          <span key={ind}>
            <span
              className={`cursor-pointer ${
                showIndex === ind
                  ? "text-secondary-700 dark:text-secondary-500 font-medium"
                  : "text-secondary-500 dark:text-secondary-700"
              }`}
              onClick={() => setShowIndex(ind)}
            >
              img{ind}
            </span>
            {ind + 1 < arr.length && <span>&#44;</span>}
          </span>
        ))}
        <span className="text-primary-600 dark:text-primary-400">&#93;&#44;</span>
      </span>
      <div className="flex items-center mt-4">
        <span className="text-5xl px-2 cursor-pointer select-none absolute -left-6" onClick={showPrevImage}>
          &lt;
        </span>
        <div
          className="flex w-full justify-between max-w-full max-h-full"
          style={{
            width: images.reduce((max, img) => (img.width > max ? img.width : max), images[0].width),
            height: images.reduce((max, img) => (img.height > max ? img.height : max), images[0].height),
          }}
        >
          {images.map((image, ind) => (
            <div
              key={ind}
              className={`flex items-center justify-center transition-all ${
                ind < showIndex ? "w-0" : ind > showIndex ? "w-0" : " w-full"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-contain w-auto rounded"
                style={{ height: image.height }}
              />
            </div>
          ))}
        </div>
        <span className="text-5xl px-2 cursor-pointer select-none absolute -right-6" onClick={showNextImage}>
          &gt;
        </span>
      </div>
    </div>
  );
}
