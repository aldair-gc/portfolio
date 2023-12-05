import { ItemInterface } from "@/interfaces/item-interface";
import Link from "./Link";
import { Images } from "./Images";

interface Props {
  data: ItemInterface;
}

export default function Item({ data }: Props) {
  return (
    <div className="py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
      <dt className="font-medium leading-6 text-primary-900 dark:text-primary-50">{data.name}&#58;</dt>
      <dd className="mt-1 leading-6 text-primary-700 dark:text-primary-200 sm:mt-0 sm:col-span-3">
        {data.href ? <Link data={data} /> : data.images ? <Images images={data.images} /> : data.value}
      </dd>
    </div>
  );
}
