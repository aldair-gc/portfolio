"use client";

import Section from "../Section";
import { Container } from "../Container";
import Attribute from "../Attribute";
import { useRouter } from "next/navigation";
import { AttributeInterface } from "@/interfaces/attribute-interface";
import Image from "next/image";

interface Props {
  data: {
    data: AttributeInterface[];
    href: string;
    image: {
      src: string;
      alt: string;
    };
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
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2 cursor-pointer" onClick={() => router.push(project.href)}>
                  {project.data.map((attribute, ind) => (
                    <Attribute key={ind} {...attribute} />
                  ))}
                </div>
                <div className="flex-none relative w-full sm:w-64 h-64 sm:h-full">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="aspect-square object-contain object-center h-full rounded drop-shadow-lg"
                  />
                </div>
              </div>
            </Container>
          ))}
        </div>
      </Section>
    </div>
  );
}
