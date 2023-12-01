import { ExperienceInterface } from "@/interfaces/experience-interface";
import Section from "../Section";
import Experience from "./Experience";
import TextBox from "../TextBox";

interface Props {
  data: ExperienceInterface[];
}

export default function About({ data }: Props) {
  return (
    <div className="w-full mb-40">
      <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-16">
        <Section name="about" />
        <table className="table-auto border-separate border-spacing-y-2 text-sm pl-20 pr-10">
          <thead className="">
            <tr className="">
              <th className="text-primary-500"> </th>
              <th className="text-primary-300">{"start"}</th>
              <th className="text-primary-500"> </th>
              <th className="text-primary-300">{"end"}</th>
              <th className="text-primary-500"> </th>
              <th className="text-primary-300">{"at"}</th>
              <th className="text-primary-500"> </th>
              <th className="text-primary-300">{"role"}</th>
              <th className="text-primary-500"> </th>
              <th className="text-primary-300">{"description"}</th>
              <th className="text-primary-500"> </th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, ind) => (
              <Experience key={ind} {...item} />
            ))}
          </tbody>
        </table>
        <div className="pl-20 pr-10">
          <TextBox text="Available for jobs and freelance projects" />
        </div>
        <div className="flex items-center gap-8">
          <h1 className="text-4xl text-primary-400 font-medium">];</h1>
        </div>
      </div>
    </div>
  );
}
