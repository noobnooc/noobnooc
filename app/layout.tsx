import "../styles/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nooc 的主页",
  description: "Nooc 的主页",
  keywords: [
    "Nooc",
    "noobnooc",
    "noocink",
    "nookinc",
    "Noob Nooc",
    "Homepage",
    "Portfolio",
    "个人主页",
    "Nooc 的个人主页",
    "Bento",
  ],
  openGraph: {
    title: `Nooc 的主页`,
    description: `Nooc 的主页`,
  },
  twitter: {
    title: `Nooc 的主页`,
    description: `Nooc 的主页`,
    site: "@noobnooc",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="h-full">
      <body className="h-full overflow-auto bg-indigo-50 text-black dark:bg-neutral-900 dark:text-indigo-50">
        {children}
      </body>
    </html>
  );
}
