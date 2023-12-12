import { useTranslations } from "next-intl";
import Link from "next/link";

export function Sticker(): JSX.Element {
  const t = useTranslations();

  return (
    <Link
      href={`#${t("contact.title")}`}
      className="fixed hidden sm:flex items-center justify-center top-1/2 right-0 -translate-y-1/2 w-10 cursor-pointer"
      id="sticker"
    >
      <div className="flex items-center px-4 text-lg -rotate-90 text-primary-50 whitespace-nowrap bg-secondary-700 h-10">
        {t("extra.openToWork")}
      </div>
    </Link>
  );
}
