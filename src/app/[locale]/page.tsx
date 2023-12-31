import { About } from "@/modules/About";
import { Contact } from "@/modules/Contact";
import { Expertise } from "@/modules/Expertise";
import { Hero } from "@/modules/Hero";
import { Projects } from "@/modules/Projects";
import { Sticker } from "@/modules/Sticker";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  };
}

export default function LocaleHome({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("extra");

  return (
    <main className="flex min-h-screen flex-col bg-primary-100 dark:bg-primary-800">
      <div className="w-full mx-auto z-10" id="home">
        <Hero />
        <Projects />
        <Expertise />
        <About />
        <Contact textBox={t("imOpenToNewOpportunities")} />
        <Sticker />
      </div>
    </main>
  );
}
