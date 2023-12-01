import { ProjectInterface } from "@/interfaces/project-interface";
import Project from "../Project";
import Section from "../Section";

interface Props {
  data: ProjectInterface[];
}

export default function Projects({ data }: Props) {
  return (
    <div className="w-full mb-40">
      <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-16">
        <Section name="projects" />
        <div className="flex flex-col gap-10 pl-20 pr-10">
          {data.map((project, ind) => (
            <Project key={ind} attributes={project} />
          ))}
        </div>
        <div className="flex items-center gap-8">
          <h1 className="text-4xl text-primary-400 font-medium">];</h1>
        </div>
      </div>
    </div>
  );
}
