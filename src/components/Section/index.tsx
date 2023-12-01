interface Props {
  name: string;
}

export default function Section({ name }: Props) {
  return (
    <div className="flex items-center gap-8 border-t-secondary-500 border-t-4 w-fit pr-40 pt-4">
      <h1 className="text-4xl text-primary-50 font-medium">
        {name}
        <span className="text-primary-400"> = [</span>
      </h1>
    </div>
  );
}
