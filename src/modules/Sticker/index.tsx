import { Attribute } from "@/components/Attribute";
import { useTranslations } from "next-intl";

export function Sticker(): JSX.Element {
  const t = useTranslations();
  const keys = ["email"] as const;

  return (
    <div id="sticker" className="fixed hidden sm:flex flex-col bottom-0 left-0 backdrop-blur-md">
      {keys.map((key) => (
        <Attribute
          key={key}
          label={t(`contact.list.${key}.label`)}
          value={t(`contact.list.${key}.value`)}
          href={t(`contact.list.${key}.href`)}
        />
      ))}
    </div>
  );
}
