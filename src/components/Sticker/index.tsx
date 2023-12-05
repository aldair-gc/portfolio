"use client";
import { useRouter } from "next/navigation";

interface Props {
  text: string;
}

export default function Sticker({ text }: Props): JSX.Element {
  const router = useRouter();

  return (
    <div
      className="fixed hidden sm:flex items-center justify-center top-1/2 right-0 -translate-y-1/2 w-10 h-64 bg-secondary-700 cursor-pointer"
      onClick={() => router.push("#contact")}
    >
      <p className="text-2xl -rotate-90 text-primary-50 whitespace-nowrap">{text}</p>
    </div>
  );
}
