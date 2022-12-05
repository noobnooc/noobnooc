import Card from "./card";
import Image from "next/image";
import {
  ArrowPathRoundedSquareIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import avatar from "../public/avatar.png";
import twitterVerified from "../public/twitter-verified.svg";
import BackgroundGradient from "./background-gradient";
import FlippableCard from "./flippable-card";
import { useCallback, useState } from "react";

export default function ProfileCard() {
  const [flipped, setFlipped] = useState(false);

  const toggle = useCallback(() => {
    setFlipped(!flipped);
  }, [flipped]);

  return (
    <FlippableCard
      className="relative row-span-2"
      front={
        <Card className="flex h-full flex-col items-center justify-center pb-28 pt-20 sm:py-20">
          <Image className="h-16 w-16 rounded-full" src={avatar} alt="Avatar" />
          <p className="relative mt-2 items-end text-xl">
            Nooc
            <Image
              className="absolute top-0 bottom-0 -right-6 my-auto h-5 w-5"
              // ?
              src={twitterVerified.src}
              height={100}
              width={100}
              alt="Twitter Verified"
            />
          </p>
          <p className="mt-2 opacity-60">游离于存在与虚无间的理想主义者</p>
          <div className="mt-10 flex items-center space-x-5">
            <a href="https://twitter.com/noobnooc">
              <Twitter className="h-6 w-6 hover:text-[#1DA1F2]" />
            </a>
            <a href="https://github.com/noobnooc/noobnooc">
              <Github className="h-6 w-6 hover:text-purple-500" />
            </a>
            <a href="https://www.instagram.com/noobnooc/">
              <Instagram className="h-6 w-6 hover:text-[#E4405F]" />
            </a>
            <a href="mailto:nooc@nooc.ink">
              <EnvelopeIcon className="h-7 w-7 hover:text-green-500" />
            </a>
          </div>

          <button
            className="absolute right-5  bottom-5 rounded-full border bg-white/30 p-3 dark:border-white/30 dark:bg-black/40"
            onClick={() => toggle()}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5 opacity-60" />
          </button>
        </Card>
      }
      back={
        <Card className="flex h-full flex-col items-center justify-center">
          <div>
            <p>一个人。</p>

            <p className="mt-3">男的, </p>
            <p className="">喜欢看书听歌写代码。</p>

            <p className="mt-3">听歌喜欢电台随机;</p>
            <p className="">电影喜欢追着导演看;</p>
            <p className="">看书偏爱小说，有时也看哲史;</p>
            <p className="">游戏喜欢买但不爱玩。</p>

            <p className="mt-3">尝试过学画画; </p>
            <p className="">也买过 MIDI 键盘; </p>
            <p className="">但仅此而已。</p>

            <p className="mt-3">偏爱泛客户端开发; </p>
            <p className="">Serverless 爱好者。</p>
          </div>

          <button
            className="absolute right-5 bottom-5 rounded-full border bg-white/30 p-3 dark:border-white/30 dark:bg-black/40"
            onClick={() => toggle()}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5 opacity-60" />
          </button>
        </Card>
      }
      flipped={flipped}
    >
      <BackgroundGradient className="bottom-0 right-0 h-36 w-16 bg-green-500/50 duration-500 dark:bg-amber-400/50" />
    </FlippableCard>
  );
}
