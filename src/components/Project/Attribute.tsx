import { HTMLAttributes } from "react";
import Image from "next/image";
import { AttributeInterface } from "@/interfaces/attribute-interface";

interface Props extends AttributeInterface, HTMLAttributes<HTMLDivElement> {}

export default function Attribute({ name, value, images, ...rest }: Props) {
  return (
    <div className="flex items-end h-6" {...rest}>
      <span className="text-primary-400 pr-2">{name}:</span>
      <span className="text-primary-50">{value}</span>
      {images && (
        <>
          <span className="text-primary-400">[</span>
          {images.map((image, ind) => (
            <div key={ind} className="flex items-end">
              {ind > 0 && <span className="text-primary-400">,</span>}
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-contain rounded"
              />
            </div>
          ))}
          <span className="text-primary-400">]</span>
        </>
      )}
      <span className="text-primary-400">,</span>
    </div>
  );
}
