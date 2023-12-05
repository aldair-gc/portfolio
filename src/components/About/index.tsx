import Section from "@/components/Section";
import { ObjectItemInterface } from "@/interfaces/object-item-interface";
import { Container } from "@/components/Container";
import Attribute from "../Attribute";

interface Props {
  data: ObjectItemInterface[];
}

export default function About({ data }: Props) {
  return (
    <div className="w-full">
      <Section title="about" closing="squareBrace" className="sm:pl-20 py-20 w-full">
        <div className="flex flex-col gap-16 w-fit">
          {data.map((item, ind) => (
            <Container key={ind} closing="curlyBrace">
              <div className="flex flex-col gap-2">
                {item.map((attribute) => (
                  <Attribute
                    key={attribute.name}
                    name={attribute.name}
                    value={attribute.value}
                    images={attribute.images}
                  />
                ))}
              </div>
            </Container>
          ))}
        </div>
      </Section>
    </div>
  );
}
