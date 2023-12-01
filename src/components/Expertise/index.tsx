import Section from "../Section";
import { ExpertiseInterface } from "@/interfaces/expertise.interface";
import SkillGroup from "./SkillGroup";

interface Props {
  data: ExpertiseInterface[];
}

export default function Expertise({ data }: Props) {
  return (
    <div className="w-full mb-40">
      <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-16">
        <Section name="expertise" />
        <div className="flex flex-col gap-20 pl-20 pr-10">
          {data.map((project, ind) => (
            <SkillGroup key={ind} name={project.name} skills={project.skills} />
          ))}
        </div>
        <div className="flex items-center gap-8">
          <h1 className="text-4xl text-primary-400 font-medium">];</h1>
        </div>
      </div>
    </div>
  );
}
