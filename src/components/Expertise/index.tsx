import Section from "../Section";
import { ExpertiseInterface } from "@/interfaces/expertise.interface";
import { SkillGroup } from "./SkillGroup";
import { Container } from "../Container";

interface Props {
  data: ExpertiseInterface[];
}

export default function Expertise({ data }: Props) {
  return (
    <div className="w-full" id="expertise">
      <Section title="expertise" closing="squareBrace" className="sm:pl-20 py-20 w-full">
        <div className="flex flex-col gap-16 w-fit">
          {data.map((project, ind) => (
            <Container key={ind} closing="curlyBrace">
              <SkillGroup name={project.name} skills={project.skills} />
            </Container>
          ))}
        </div>
      </Section>
    </div>
  );
}
