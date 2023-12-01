import Skill from "./Skill";
import { SkillInterface } from "@/interfaces/skill-interface";

interface Props {
  name: string;
  skills: SkillInterface[];
}

export default function SkillGroup({ name, skills }: Props) {
  return (
    <section className="flex flex-col">
      <div className="flex p-6 w-fit bg-primary-400 shadow-2xl flex-col gap-10 text-base">
        <h3 className="text-2xl text-primary-800">
          {name}
          <span className="text-primary-600">{": ["}</span>
        </h3>
        <div className="flex flex-wrap gap-2 pl-12">
          {skills.map((skill) => (
            <Skill key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
          ))}
        </div>
        <p className="text-2xl text-primary-600">{"],"}</p>
      </div>
    </section>
  );
}
