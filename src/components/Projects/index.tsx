"use client";

import Section from "../Section";
import { Container } from "../Container";
import Attribute from "../Attribute";
import { useRouter } from "next/navigation";
import { AttributeInterface } from "@/interfaces/attribute-interface";

interface Props {
  data: {
    data: AttributeInterface[];
    href: string;
  }[];
}

export default function Projects({ data }: Props) {
  const router = useRouter();
  return (
    <div className="w-full" id="projects">
      <Section title="projects" closing="squareBrace" className="sm:pl-20 md:pr-10 py-20 w-full">
        <div className="flex flex-col gap-16 w-fit">
          {data.map((project, ind) => (
            <Container key={ind} closing="curlyBrace">
              <div className="flex flex-col gap-2 cursor-pointer" onClick={() => router.push(project.href)}>
                {project.data.map((attribute, ind) => (
                  <Attribute key={ind} {...attribute} />
                ))}
              </div>
            </Container>
          ))}
        </div>
      </Section>
    </div>
  );
}
