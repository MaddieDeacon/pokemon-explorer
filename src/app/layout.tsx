import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokémon Explorer",
  description: "A Next.js app to explore Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}