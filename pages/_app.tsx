import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import classNames from "classnames";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(spaceGrotesk.variable)}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
