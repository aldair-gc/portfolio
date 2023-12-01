import { HTMLAttributes } from "react";
import Image from "next/image";
import { SkillInterface } from "@/interfaces/skill-interface";

interface Props extends SkillInterface, HTMLAttributes<HTMLDivElement> {}

export default function Skill({ name, imageSrc, ...rest }: Props) {
  return (
    <div className="flex flex-col h-44 w-44 bg-primary-200 justify-between p-2" {...rest}>
      <span className="text-primary-400">[</span>
      <span className="text-primary-800 whitespace-nowrap pl-4">
        {name}
        <span className="text-primary-400">,</span>
      </span>
      <Image src={imageSrc} alt={name} width={70} height={70} className="object-contain ml-4" />
      <span className="text-primary-400">],</span>
    </div>
  );
}
