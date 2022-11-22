import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import localFont from "@next/font/local";
import classNames from "classnames";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const xwwk = localFont({
  src: "../public/xwwk.ttf",
  variable: "--font-xwwk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(spaceGrotesk.variable, xwwk.variable)}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
