import { Link, usePathname } from "@/navigation";
import { useParams } from "next/navigation";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  links: string[];
}

export function FullScreenMenu({ open, links, ...rest }: Props) {
  const path = usePathname();
  const { locale } = useParams();

  return (
    <div
      className={`fixed inset-0 top-12 backdrop-blur-md bg-primary-100/50 dark:bg-primary-800/50 z-30 overscroll-contain overflow-hidden transition-all ${
        open ? "h-full" : "h-0"
      }`}
      {...rest}
    >
      <div className="flex flex-col gap-8 w-full justify-between">
        <div className="flex flex-col text-primary-900 dark:text-primary-50">
          {links.map((link, ind) => (
            <Link
              key={link}
              className={`p-4 whitespace-nowrap transition-all cursor-pointer ${
                open ? "-translate-x-0" : "-translate-x-1/2"
              }`}
              style={{ transitionDelay: `${ind * 100}ms` }}
              href={`/#${link}`}
            >
              &gt;&nbsp;{link}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <Link
            className={`p-4 transition-all cursor-pointer ${
              locale === "en" ? "text-secondary-700 dark:text-secondary-300" : "text-primary-600 dark:text-primary-200"
            } ${open ? "-translate-x-0" : "-translate-x-1/2"}`}
            style={{ transitionDelay: `${links.length * 100}ms` }}
            href={path}
            locale="en"
          >
            {"| english"}
          </Link>
          <Link
            className={`p-4 transition-all cursor-pointer ${
              locale === "br" ? "text-secondary-700 dark:text-secondary-300" : "text-primary-600 dark:text-primary-200"
            } ${open ? "-translate-x-0" : "-translate-x-1/2"}`}
            style={{ transitionDelay: `${(links.length + 1) * 100}ms` }}
            href={path}
            locale="br"
          >
            {"| português"}
          </Link>
        </div>
      </div>
    </div>
  );
}
