import type { Metadata } from "next";
import "./globals.css";

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
