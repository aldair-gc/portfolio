import { HTMLAttributes } from "react";
import { AttributeInterface } from "@/interfaces/attribute-interface";
import { Images } from "./Images";
import { ImageCarousel } from "./ImagesCarousel";

interface Props extends AttributeInterface, HTMLAttributes<HTMLDivElement> {}

export default function Attribute({ name, value, href, images, ...rest }: Props) {
  return (
    <div className="flex flex-col sm:flex-row text-primary-700 dark:text-primary-300" {...rest}>
      <span className="whitespace-nowrap">{name}&#58;&nbsp;</span>
      {href ? (
        <p className="pl-4 sm:pl-0">
          <span className="font-light">&quot;</span>
          <a
            className="text-secondary-800 dark:text-secondary-300 hover:text-secondary-300 dark:hover:text-secondary-800 hover:bg-secondary-800 dark:hover:bg-secondary-300 underline hover:no-underline"
            href={href}
            target="_blank"
          >
            {value}
          </a>
          <span className="font-light self-end">&quot;&#44;</span>
        </p>
      ) : (
        value && (
          <span className="text-primary-900 dark:text-primary-50 pl-4 sm:pl-0">
            <span className="font-light">&quot;</span>
            {value}
            <span className="font-light self-end">&quot;&#44;</span>
          </span>
        )
      )}
      {images && (
        <>
          <ImageCarousel images={images} />
          <Images images={images} />
        </>
      )}
    </div>
  );
}
