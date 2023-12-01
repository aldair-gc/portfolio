import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const font = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldair Garros - Portfolio",
  description: "Personal portfolio of Aldair Garros, a software developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
