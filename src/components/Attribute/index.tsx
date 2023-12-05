import { HTMLAttributes } from "react";
import { AttributeInterface } from "@/interfaces/attribute-interface";

interface Props extends AttributeInterface, HTMLAttributes<HTMLDivElement> {}

export default function Attribute({ name, value, href, ...rest }: Props) {
  return (
    <div className="py-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-4" {...rest}>
      <dt className="font-medium text-primary-900 dark:text-primary-50">{name}&#58;&nbsp;</dt>
      <dd className="mt-1 text-primary-700 dark:text-primary-200 sm:mt-0 sm:col-span-3">
        <p className="pl-4 sm:pl-0">
          <span>&quot;</span>
          {href ? (
            <a
              className="text-secondary-800 dark:text-secondary-300 hover:text-secondary-300 dark:hover:text-secondary-800 hover:bg-secondary-800 dark:hover:bg-secondary-300 underline hover:no-underline"
              href={href}
              target="_blank"
            >
              {value}
            </a>
          ) : (
            value && value
          )}
          <span>&quot;&#44;</span>
        </p>
      </dd>
    </div>
  );
}
