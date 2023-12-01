import { AttributeInterface } from "@/interfaces/attribute-interface";
import Attribute from "./Attribute";

interface Props {
  attributes: AttributeInterface[];
}

export default function Project({ attributes }: Props) {
  return (
    <section className="flex items-end h-[560px]">
      <div className="flex p-6 bg-primary-600 w-full shadow-2xl flex-col gap-2 text-base text-primary-50 pl-6">
        <p className="text-primary-400">{"{"}</p>
        <div className="flex flex-col gap-2 pl-6">
          {attributes.map((attribute) => (
            <Attribute key={attribute.name} name={attribute.name} value={attribute.value} images={attribute.images} />
          ))}
        </div>
        <p className="text-primary-400">{"},"}</p>
      </div>
    </section>
  );
}
