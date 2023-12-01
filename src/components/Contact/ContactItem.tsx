import { ContactInterface } from "@/interfaces/contact-interface";

interface Props extends ContactInterface {}

export default function ContactItem({ name, value, href }: Props) {
  return (
    <tr className="table-row text-primary-400">
      <td>{"{"}</td>
      <td className="p-2 text-primary-50">{name}</td>
      <td>{" :"}</td>
      <td className="p-2">
        <a
          className="text-secondary-300 hover:text-secondary-800 hover:bg-secondary-300 underline hover:no-underline"
          href={href}
        >
          {value}
        </a>
      </td>
      <td>{"},"}</td>
    </tr>
  );
}
