import { MenuBar } from "@/modules/MenuBar";
import { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import "../globals.css";
import { useTranslations } from "next-intl";

const locales = ["en", "br"];

const font = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldair Garros - Portfolio",
  description: "Personal portfolio of Aldair Garros, a software developer.",
};

interface Props {
  params: {
    locale: "en" | "br";
  };
}

const LINKS = ["home", "projects", "expertise", "about", "contact"] as const;

export default function LocaleLayout({ children, params: { locale } }: PropsWithChildren<Props>) {
  if (!locales.includes(locale)) notFound();
  const t = useTranslations();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={font.className}>
        <MenuBar links={LINKS.map((link) => t(`${link}.title`))} />
        {children}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
