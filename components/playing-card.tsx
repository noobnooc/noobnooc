import Card from "./card";
import Image from "next/image";
import { CameraIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  Blender,
  Github,
  Instagram,
  Javascript,
  Netflix,
  Nintendoswitch,
  ReactJs,
  Sketch,
  Swift,
  Twitter,
  Typescript,
} from "@icons-pack/react-simple-icons";
import { AnimateSharedLayout, motion } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";

const items = [
  {
    name: "typescript",
    icon: <Typescript className="h-6 w-6" />,
    summary:
      "TypeScript, 最常使用的编程语言, 常搭配使用的有 Node / React / Tailwind 。",
  },
  {
    name: "swift",
    icon: <Swift className="h-6 w-6" />,
    summary:
      "Swift, 最近在学习苹果生态的程序设计, 常搭配使用的有 SwiftUI / Combine 。",
  },
  {
    name: "sketch",
    icon: <Sketch className="h-6 w-6" />,
    summary: "Sketch, 偶尔也弄弄设计, 但不太熟。",
  },
  {
    name: "blender",
    icon: <Blender className="h-7 w-7" />,
    summary: "Blender, 尝试学习过很多次, 每次都是照着教程弄一遍就放弃了。",
  },
  {
    name: "switch",
    icon: <Nintendoswitch className="h-6 w-6" />,
    summary: "有一台 Switch, 但上面很多灰, 还有一台灰更多的 PS4 。",
  },
  {
    name: "photography",
    icon: <CameraIcon className="h-7 w-7" />,
    summary: "有一台 Sony a7c, 但不知道电池还有没有电。",
  },
  {
    name: "netflix",
    icon: <Netflix className="h-6 w-6" />,
    summary: "闲暇无事的时候会看看剧, 经常使用 Netflix 和 Apple TV+。",
  },
];

export default function PlayingCard() {
  const [selectedItem, setSelectedItem] = useState<
    typeof items[number] | undefined
  >();

  return (
    <Card className="flex flex-col justify-between px-4">
      <h1 className="mb-2 pl-4 text-lg">在玩什么</h1>
      <div className="my-3 flex items-center space-x-4 pl-4">
        <AnimateSharedLayout>
          {items.map((item) => {
            const selected = selectedItem?.name === item.name;

            return (
              <div
                key={item.name}
                // Make sure the dynamic classes has added to tailwind safelist
                className={classNames(
                  "relative cursor-pointer transition-colors",
                  `hover:text-${item.name}`,
                  {
                    "text-white": selected,
                    "hover:text-white": selected,
                  }
                )}
                onClick={() => {
                  setSelectedItem(selected ? undefined : item);
                }}
              >
                {selected ? (
                  <motion.div
                    className={classNames(
                      "absolute -inset-1 -z-10 rounded",
                      `bg-${item.name}`
                    )}
                    layoutId="selected-background"
                  />
                ) : undefined}
                {item.icon}
              </div>
            );
          })}
        </AnimateSharedLayout>
      </div>
      <div className="overflow-hidden rounded-xl border bg-white/60 p-4 dark:border-white/40 dark:bg-black/30 sm:h-24">
        <p className="opacity-70 transition-all">
          {selectedItem?.summary ?? <>我来人间一趟, 我要看看太阳。</>}
        </p>
      </div>
    </Card>
  );
}
