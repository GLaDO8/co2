import type { Metadata } from "next";
import "./globals.css";
import { ensureWebStorage } from "@/lib/ensure-web-storage";

ensureWebStorage();

export const metadata: Metadata = {
  title: "CO2 is no joke",
  description: "Paper frame implementation in Next.js",
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
