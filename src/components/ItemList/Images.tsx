import { HTMLAttributes } from "react";
import Image from "next/image";
import { ImageInterface } from "@/interfaces/image-interface";

interface Props extends HTMLAttributes<HTMLDivElement> {
  images: ImageInterface[];
}

export function Images({ images, ...rest }: Props) {
  return (
    <div className="relative flex flex-col flex-wrap sm:flex-row sm:items-end gap-2" {...rest}>
      {images.map((image, ind) => (
        <Image
          key={ind}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="object-contain rounded"
        />
      ))}
    </div>
  );
}
