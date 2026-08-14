import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feedback da Comunidade — Invent Money",
  description: "O que os primeiros membros da comunidade Invent Money estão dizendo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
