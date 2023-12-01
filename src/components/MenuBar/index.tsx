import Link from "next/link";

export default function MenuBar() {
  return (
    <div className="fixed top-0 w-full backdrop-blur-md bg-primary-800/50">
      <div className="flex w-full max-w-7xl mx-auto flex-nowrap items-center justify-between">
        <div className="flex items-center text-primary-50">
          <Link className="p-4" href="/">
            {"> home"}
          </Link>
          <Link className="p-4" href="/">
            {"> projects"}
          </Link>
          <Link className="p-4" href="/">
            {"> expertise"}
          </Link>
          <Link className="p-4" href="/">
            {"> contact"}
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="p-4 text-secondary-300" href="/">
            {"| english"}
          </Link>
          <Link className="p-4 text-primary-300" href="/">
            {"| português"}
          </Link>
        </div>
      </div>
    </div>
  );
}
