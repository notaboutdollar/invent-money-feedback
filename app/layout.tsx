import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Community Feedback — Invent Money",
  description:
    "What the first members of the Invent Money community are saying.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
