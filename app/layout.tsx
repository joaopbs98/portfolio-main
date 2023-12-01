import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "João Silva | Portfolio",
  description: "This is my portfolio, feel free to explore it!",
  icons: {
    icon: "/assets/images/layout.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-exo2">
      <body className={``}>{children}</body>
    </html>
  );
}
