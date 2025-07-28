import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EL400 DRO Simulator",
  description: "Web-based simulator for the Electronica EL400/MagXact MX-100M digital readout (DRO)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
