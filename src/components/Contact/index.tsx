import Attribute from "../Attribute";
import { Container } from "../Container";
import Section from "../Section";
import { ContactInterface } from "@/interfaces/contact-interface";
import TextBox from "../TextBox";

interface Props {
  data: ContactInterface[];
}

export default function Contact({ data }: Props) {
  return (
    <div className="w-full bg-primary-300 dark:bg-primary-950">
      <Section
        title="contact"
        closing="squareBrace"
        className="grid grid-cols-1 sm:grid-cols-2 py-10 gap-y-5 w-full items-center justify-items-center"
      >
        <TextBox text="I'm open to new opportunities, so feel free to contact me." />
        <Container closing="curlyBrace" shadow={false} background={false} className="w-fit">
          <div className="flex flex-col gap-2">
            {data.map((item, ind) => (
              <Attribute key={ind} {...item} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
