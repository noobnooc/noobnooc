import Card from "./card";
import Image from "next/image";
import AssisChat from "../public/assischat.png";
import lofyee from "../public/lofyee.png";
import { useState } from "react";
import classNames from "classnames";

const items = [
  {
    name: "assischat",
    icon: (
      <Image
        className="h-11 w-11 rounded-lg"
        src={AssisChat}
        alt="AssisChat App"
      />
    ),
    url: "https://assischat.com",
    title: "AssisChat",
    summary: <>一个 ChatGPT 客户端。</>,
  },
  {
    name: "lofyee",
    icon: (
      <Image className="h-11 w-11 rounded-lg" src={lofyee} alt="Kosto App" />
    ),
    url: "https://lofyee.com",
    title: "Lofyee",
    summary: <>一个 Lo-Fi 音乐播放器。</>,
  },
];

export default function DoingCard({ className }: { className?: string }) {
  return (
    <Card
      className={classNames(
        "flex flex-col justify-between bg-green-100/20 px-4 hover:-translate-y-1",
        className
      )}
    >
      <h1 className="mb-2 text-green-500/60">在做什么</h1>
      <div className="mt-2 flex flex-col">
        {items.map((item) => {
          return (
            <a
              key={item.name}
              className="mt-2 flex items-center overflow-hidden rounded-xl border border-gray-400/20 bg-white/40 p-4 hover:opacity-90 dark:border-white/30 dark:bg-black/30"
              href={item.url}
            >
              {item.icon}
              <div className="ml-3 flex flex-col">
                <h2 className="">{item.title}</h2>
                <p className="text-sm opacity-60">{item.summary}</p>
              </div>
            </a>
          );
        })}
      </div>
    </Card>
  );
}
