import { ItemInterface } from "@/interfaces/item-interface";
import Item from "./Item";

interface Props {
  list: ItemInterface[];
}

export default function ItemList({ list }: Props) {
  return (
    <div className="relative flex flex-col h-full w-full max-h-full max-w-full">
      <div className="flex flex-col gap-5 overflow-auto h-full w-full">
        <div className="divide-y divide-primary-500">
          {list.map((item, ind) => (
            <Item key={ind} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
