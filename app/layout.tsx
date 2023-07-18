import '../styles/globals.css';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nooc's World",
  description: "Nooc's World",
  keywords: [
    'Nooc', 'noobnooc', 'noocink', 'nookinc', 'Noob Nooc', 'Homepage', 'Portfolio'
  ]
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
