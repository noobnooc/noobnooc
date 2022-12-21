import Card from "./card";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import kosto from "../public/kosto.png";
import { useState } from "react";
import classNames from "classnames";

const items = [
  {
    name: "typescript",
    icon: (
      <Image className="h-10 w-10 rounded-lg" src={kosto} alt="Kosto App" />
    ),
    summary: (
      <>
        知出（Kosto）, 一个还在做的 iOS 记账应用, 暂时只有一个破
        <a
          className="text-blue-500 hover:underline"
          href="https://kosto.nooc.ink"
        >
          官网
        </a>
        。
      </>
    ),
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
      <div className="my-3 flex px-4">
        {items.map((item) => {
          const selected = selectedItem?.name === item.name;

          return (
            <div
              className="cursor-pointer"
              key={item.name}
              onClick={() => {
                setSelectedItem(selected ? undefined : item);
              }}
            >
              {item.icon}
            </div>
          );
        })}
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-400/20  bg-white/40 p-4 dark:border-white/40 dark:bg-black/30 sm:h-24">
        <p className="opacity-70">{selectedItem?.summary ?? <>在路上</>}</p>
      </div>
    </Card>
  );
}
