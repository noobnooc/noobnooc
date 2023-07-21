import "../styles/globals.css";

import { Metadata } from "next";
import Image from "next/image";
import avatar from "../public/avatar.png";
import { SEO } from "../data/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.fillKeywords(),
  openGraph: {
    title: SEO.title,
    description: SEO.description,
  },
  twitter: {
    title: SEO.title,
    description: SEO.description,
    site: "@noobnooc",
    card: "summary_large_image",
  },
};

const bottomNavItems = [
  {
    name: "主观世界",
    link: "https://subnooc.com",
  },
  {
    name: "趣物",
    link: "https://quwu.io",
  },
  {
    name: "AssisChat",
    link: "https://assischat.com",
  },
  {
    name: "Lofyee",
    link: "https://lofyee.com",
  },
];

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="">
      <body className="bg-indigo-50 text-black dark:bg-neutral-900 dark:text-indigo-50">
        <header className="text-md h-20">
          <div className="h-40 w-full">
            <div className="sticky top-0 z-10 w-full bg-indigo-50  dark:bg-neutral-900">
              <div className="w-full bg-white/50 dark:bg-indigo-100/5">
                <hr />
                <div className="mx-auto flex h-20 w-full max-w-screen-lg items-center justify-between gap-4 px-4 py-6">
                  <Link className="flex items-center gap-4" href="/">
                    <Image
                      className="h-8 w-8 rounded-lg"
                      src={avatar}
                      alt="Nooc Avatar"
                    />
                    <h1 className="font-bold opacity-80 sm:inline">
                      Nooc 的主页
                    </h1>
                  </Link>
                  <nav className="font-light">
                    <ul className="flex gap-4">
                      <li>
                        <Link href="/">主页</Link>
                      </li>
                      <li>
                        <Link href="/projects">项目</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="text-md bg-white/50 text-sm dark:bg-indigo-100/5">
          <hr />
          <div className="mx-auto flex w-full max-w-screen-lg flex-col justify-between gap-4 px-4 py-10 sm:flex-row">
            <nav className="opacity-80">
              <ul className="flex gap-4">
                {bottomNavItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="opacity-60">© 2023 Nooc</p>
          </div>
          <hr />
        </footer>
      </body>
    </html>
  );
}
