import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Vac",
  description: "Site de status de carteira de vacinação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-screen h-screen bg-gradient-to-b from-green-200 via-white to-green-100`}
      >
        {children}
      </body>
    </html>
  );
}