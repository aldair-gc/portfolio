import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aldair Garros - Portfolio",
  description: "Personal portfolio of Aldair Garros, a software developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
