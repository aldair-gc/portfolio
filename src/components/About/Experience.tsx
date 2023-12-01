import { ExperienceInterface } from "@/interfaces/experience-interface";

interface Props extends ExperienceInterface {}

export default function Experience({ at, role, description, start, end }: Props) {
  return (
    <tr className="table-row bg-primary-400 text-primary-600">
      <td>{"["}</td>
      <td className="bg-primary-300 p-2 text-primary-800">{start}</td>
      <td>{","}</td>
      <td className="bg-primary-300 p-2 text-primary-800">{end}</td>
      <td>{","}</td>
      <td className="bg-primary-300 p-2 text-primary-800">{at}</td>
      <td>{","}</td>
      <td className="bg-primary-300 p-2 text-primary-800">{role}</td>
      <td>{","}</td>
      <td className="bg-primary-300 p-2 text-primary-800">{description}</td>
      <td>{"],"}</td>
    </tr>
  );
}
