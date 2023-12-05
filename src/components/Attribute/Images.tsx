import { HTMLAttributes } from "react";
import Image from "next/image";
import { ImageInterface } from "@/interfaces/image-interface";

interface Props extends HTMLAttributes<HTMLDivElement> {
  images: ImageInterface[];
}

export function Images({ images, ...rest }: Props) {
  return (
    <div className="relative hidden sm:flex" {...rest}>
      <span className="text-primary-600 dark:text-primary-400">&#91;</span>
      {images.map((image, ind, arr) => (
        <>
          <Image key={ind} src={image.src} alt={image.alt} fill className="object-fill object-top rounded" />
          {ind + 1 < arr.length && <span key={`${ind}B`}>&#44;</span>}
        </>
      ))}
      <span className="text-primary-600 dark:text-primary-400">&#93;&#44;</span>
    </div>
  );
}
