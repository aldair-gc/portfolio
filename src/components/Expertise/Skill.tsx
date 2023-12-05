import { HTMLAttributes } from "react";
import Image from "next/image";
import { SkillInterface } from "@/interfaces/skill-interface";

interface Props extends SkillInterface, HTMLAttributes<HTMLDivElement> {}

export function Skill({ name, imageSrc, ...rest }: Props) {
  return (
    <div className="flex items-end bg-primary-100 dark:bg-primary-700 justify-between p-2" {...rest}>
      <span className="text-primary-400 dark:text-primary-400">[</span>
      <span className="font-medium text-primary-800 dark:text-primary-100 whitespace-nowrap">
        {name}
        <span className="text-primary-400 dark:text-primary-400">&#44;&nbsp;</span>
      </span>
      <Image src={imageSrc} alt={name} width={36} height={36} className="object-contain drop-shadow-lg" />
      <span className="text-primary-400 dark:text-primary-400">]</span>
    </div>
  );
}
