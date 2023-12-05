import { Container } from "../Container";
import { SkillInterface } from "@/interfaces/skill-interface";
import { Skill } from "./Skill";

interface Props {
  name: string;
  skills: SkillInterface[];
}

export function SkillGroup({ name, skills }: Props) {
  return (
    <div className="flex w-fit flex-col gap-4">
      <h3 className="text-2xl text-primary-800 dark:text-primary-100">
        {name}
        <span className="text-primary-600 dark:text-primary-400">:</span>
      </h3>
      <Container closing="squareBrace" shadow={false} className="sm:pl-20">
        <div className="flex flex-wrap gap-2 max-w-2xl">
          {skills.map((skill, ind) => (
            <Skill key={ind} {...skill} />
          ))}
        </div>
      </Container>
    </div>
  );
}
