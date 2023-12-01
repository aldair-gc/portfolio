import Section from "../Section";
import Experience from "./ContactItem";
import { ContactInterface } from "@/interfaces/contact-interface";

interface Props {
  data: ContactInterface[];
}

export default function Contact({ data }: Props) {
  return (
    <div className="w-full bg-primary-950 pb-6">
      <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-16">
        <Section name="contact" />
        <table className="table-auto w-fit border-separate border-spacing-y-2 text-sm pl-20 pr-10">
          <tbody>
            {data.map((item, ind) => (
              <Experience key={ind} {...item} />
            ))}
          </tbody>
        </table>
        <div className="flex items-center gap-8">
          <h1 className="text-4xl text-primary-400 font-medium">];</h1>
        </div>
      </div>
    </div>
  );
}
