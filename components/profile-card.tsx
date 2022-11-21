import Card from "./card";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import avatar from "../public/avatar.png";
import twitterVerified from "../public/twitter-verified.svg";
import BackgroundGradient from "./background-gradient";

export default function ProfileCard() {
  return (
    <Card className="relative row-span-2 flex flex-col items-center justify-center py-20">
      <BackgroundGradient className="bottom-0 right-0 h-36 w-16 bg-green-500/50 duration-500 dark:bg-amber-400/50" />

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
          <Github className="h-6 w-6 hover:text-[#181717]" />
        </a>
        <a href="https://www.instagram.com/noobnooc/">
          <Instagram className="h-6 w-6 hover:text-[#E4405F]" />
        </a>
        <a href="mailto:nooc@nooc.ink">
          <EnvelopeIcon className="h-7 w-7" />
        </a>
      </div>
    </Card>
  );
}
