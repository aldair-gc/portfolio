"use client";

import Link from "next/link";
import { useState } from "react";
import FullScreenMenu from "./FullScreenMenu";

interface Props {
  links: { href: string; text: string }[];
}

export default function MenuBar({ links }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed top-0 w-full backdrop-blur-md bg-primary-100/50 dark:bg-primary-800/50 z-20">
        <div
          className="sm:hidden flex items-center justify-center w-12 h-12 bg-primary-300 cursor-pointer select-none"
          onClick={() => setIsMenuOpen((state) => !state)}
        >
          <p className="text-3xl">{isMenuOpen ? "X" : ">_"}</p>
        </div>
        <div className="hidden sm:flex w-full max-w-7xl h-12 mx-auto flex-nowrap justify-between">
          <div className="flex">
            {links.map((link, ind) => (
              <Link
                key={ind}
                className="flex items-center px-4 whitespace-nowrap font-medium text-primary-900 dark:text-primary-50 hover:text-secondary-700 hover:dark:text-secondary-400"
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex">
            <Link className="p-4 text-secondary-700 dark:text-secondary-300" href="/">
              {"| english"}
            </Link>
            <Link className="p-4 text-primary-600 dark:text-primary-300" href="/">
              {"| português"}
            </Link>
          </div>
        </div>
      </div>
      <FullScreenMenu open={isMenuOpen} links={links} />
    </>
  );
}
