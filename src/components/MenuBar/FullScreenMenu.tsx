"use client";

import Link from "next/link";
import { LANGUAGES } from "./LANGUAGES";

interface Props {
  open: boolean;
  links: { href: string; text: string }[];
}

export default function FullScreenMenu({ open, links }: Props) {
  return (
    <div
      className={`fixed inset-0 top-12 backdrop-blur-md bg-primary-100/50 dark:bg-primary-800/50 z-30 overscroll-contain overflow-hidden transition-all ${
        open ? "h-full" : "h-0"
      }`}
    >
      <div className="flex flex-col gap-8 w-full justify-between">
        <div className="flex flex-col text-primary-900 dark:text-primary-50">
          {links.map((link, ind) => (
            <Link
              key={ind}
              className={`p-4 whitespace-nowrap transition-all ${open ? "-translate-x-0" : "-translate-x-1/2"}`}
              style={{ transitionDelay: `${ind * 100}ms` }}
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          {LANGUAGES.map((link, ind) => (
            <Link
              key={ind}
              className={`p-4 text-secondary-700 dark:text-secondary-300 whitespace-nowrap transition-all ${
                open ? "-translate-x-0" : "-translate-x-1/2"
              }`}
              style={{ transitionDelay: `${(links.length + ind) * 100}ms` }}
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
