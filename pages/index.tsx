import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import DoingCard from "../components/doing-card";
import PlayingCard from "../components/playing-card";
import ProfileCard from "../components/profile-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-black dark:bg-neutral-900 dark:text-gray-100">
      <Head>
        <title>Nooc&apos;s World</title>
        <meta name="description" content="Nooc's Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex grow flex-col justify-center">
        <section>
          <div className="w-full px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-2">
              <ProfileCard />
              <PlayingCard />
              <DoingCard />
            </div>
          </div>
        </section>
      </main>

      <footer className="text-md py-10 text-center text-sm text-gray-400">
        © 2022 Nooc
      </footer>
    </div>
  );
}
