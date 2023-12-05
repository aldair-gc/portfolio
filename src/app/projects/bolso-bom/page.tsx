import Attribute from "@/components/Attribute";
import { Container } from "@/components/Container";
import ItemList from "@/components/ItemList";
import Section from "@/components/Section";
import TextBox from "@/components/TextBox";
import { bolsoBomProject } from "@/data/bolso-bom-project";
import { contacts } from "@/data/contacts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-primary-100 dark:bg-primary-800">
      <div className="w-full mx-auto z-10" id="top">
        <div className="flex flex-col w-full max-w-7xl px-4 gap-16 mx-auto z-10 py-14" id="top">
          <Section title="bolso_bom" closing="curlyBrace">
            <div className="py-10">
              <Container shadow={false}>
                <div className="flex flex-col gap-2">
                  <ItemList list={bolsoBomProject} />
                </div>
              </Container>
            </div>
          </Section>
        </div>
      </div>
      <div className="w-full bg-primary-300 dark:bg-primary-950 pb-6" id="contact">
        <div className="flex flex-col w-full max-w-7xl mx-auto gap-16">
          <div className="grid sm:grid-cols-2 max-w-full sm:pl-20 py-10">
            <TextBox text="Available for jobs and freelance work" />
            <div className="flex items-center justify-center w-fit px-4">
              <Container shadow={false} closing="curlyBrace" background={false}>
                <div className="flex flex-col gap-2">
                  {contacts.map((item, ind) => (
                    <Attribute key={ind} {...item} />
                  ))}
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
