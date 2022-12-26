import Card from "./card";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import kosto from "../public/kosto.png";
import { useState } from "react";
import classNames from "classnames";

const items = [
  {
    name: "kosto",
    icon: (
      <Image className="h-11 w-11 rounded-lg" src={kosto} alt="Kosto App" />
    ),
    url: "https://kosto.nooc.ink",
    title: "知出 (Kosto)",
    summary: <>一个还在做的 iOS 记账应用。</>,
  },
];

export default function DoingCard({ className }: { className?: string }) {
  const [selectedItem, setSelectedItem] = useState<
    typeof items[number] | undefined
  >();

  return (
    <Card
      className={classNames(
        "flex flex-col justify-between bg-green-100/20 px-4 hover:-translate-y-1",
        className
      )}
    >
      <h1 className="mb-2 text-green-500/60">在做什么</h1>
      <div className="mt-5 flex flex-col">
        {items.map((item) => {
          return (
            <a
              key={item.name}
              className="flex items-center overflow-hidden rounded-xl border border-gray-400/20 bg-white/40 p-4 hover:opacity-90 dark:border-white/30 dark:bg-black/30"
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
