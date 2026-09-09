import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invent Money — Trainers Reports",
  description:
    "Trainer research reports for the Invent Money AI training program.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="min-h-screen font-sans antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
