import { CameraIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  SiBlender,
  SiGithub,
  SiNetflix,
  SiNintendoswitch,
  SiSketch,
  SiSwift,
  SiTwitter,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { ReactNode } from "react";
import Card from "../components/card";
import ProfileCard from "../components/profile-card";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import AssisChat from "../public/assischat.png";
import lofyee from "../public/lofyee.png";
import subnooc from "../public/subnooc.png";
import quwu from "../public/quwu.png";
import avatar from "../public/avatar.png";
import blankAvatar from "../public/avatars/blank.jpeg";
import jiaZombieAvatar from "../public/avatars/jiazombie.png";
import liunengAvatar from "../public/avatars/liuneng.jpg";
import pilotAvatar from "../public/avatars/pilot.jpg";
import anonymousAvatar from "../public/avatars/anonymous.jpeg";

const comments = [
  {
    name: "Blank",
    comment:
      "天啊，这么精致的小男生如果还是单身那我觉得你附近的女孩子都得去看眼科",
    avatar: blankAvatar,
    color: "neutral",
    link: "https://twitter.com/B58B30/status/1681495228484829184?s=20",
  },
  {
    name: "象牙山刘能",
    comment: "洛阳亲友如相问，一支红杏出墙来。",
    avatar: liunengAvatar,
    color: "yellow",
    link: "https://twitter.com/disksing/status/1681508115861344256?s=20",
  },
  {
    name: "假僵尸",
    comment: "皆九年之学，论秀，吾不及汝",
    avatar: jiaZombieAvatar,
    color: "green",
    link: "https://github.com/JiaZombie",
  },
  {
    name: "机长",
    comment: "成都不能没有你，就像西方不能没有耶路撒冷",
    avatar: pilotAvatar,
    color: "neutral",
  },
  {
    name: "不愿透露姓名的王先生",
    comment: "孩子是无辜的，为了孩子，回来吧。",
    avatar: anonymousAvatar,
    color: "red",
  },
  {
    name: "Nooc",
    comment: "你们在说什么。。。",
    avatar: avatar,
    color: "blue",
  },
];

function Title({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h1 className={twMerge("text-lg font-bold", className)}>{children}</h1>
  );
}

function Subtitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <h2 className={twMerge("opacity-60", className)}>{children}</h2>;
}

function Label({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2 className={twMerge("text-sm font-bold opacity-60", className)}>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="relative isolate h-full flex-col">
      <main className="h-full justify-center px-4 py-16">
        <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="">
            <ProfileCard className="bottom-0 aspect-auto self-start sm:sticky sm:top-16 sm:aspect-square" />
          </div>
          <div className="grid grid-cols-2 gap-4 self-start">
            <Card
              className="flex aspect-square flex-col bg-blue-300/10 dark:bg-blue-400/10"
              link="https://twitter.com/noobnooc"
            >
              <Title className="text-blue-500">Twitter</Title>
              <Subtitle>@noobnooc</Subtitle>
              <SiTwitter className="mt-auto h-10 w-10 self-end text-blue-500 sm:h-14 sm:w-14" />
            </Card>
            <Card
              className="flex aspect-square flex-col bg-neutral-300/10 dark:bg-neutral-400/10"
              link="https://github.com/noobnooc"
            >
              <Title className="self-end">GitHub</Title>
              <Subtitle className="self-end">@noobnooc</Subtitle>
              <SiGithub className="mt-auto h-10 w-10 sm:h-14 sm:w-14" />
            </Card>
            <Card
              className="flex aspect-square flex-col bg-yellow-300/10 dark:bg-yellow-400/10"
              link="https://okjk.co/P0XWwf"
            >
              <Image
                className="mb-auto h-10 w-10 self-end sm:h-14 sm:w-14"
                alt="Jike Icon"
                width="256"
                height={256}
                src="data:image/png;base64,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"
              />
              <Subtitle>Nooc</Subtitle>
              <Title className=" text-yellow-500">即刻</Title>
            </Card>
            <Card
              className="flex aspect-square flex-col bg-green-300/10 dark:bg-green-400/10"
              link="mailto:nooc@nooc.me"
            >
              <EnvelopeIcon className="mb-auto h-10 w-10 text-green-500 sm:h-14 sm:w-14" />
              <Subtitle className="self-end">nooc@nooc.me</Subtitle>
              <Title className="self-end text-green-500">邮箱</Title>
            </Card>
            <Label className="col-span-2 mt-4">在做什么</Label>
            <Card
              className="relative flex aspect-square flex-col bg-green-300/10 dark:bg-yellow-400/10"
              link="https://quwu.io"
            >
              <Image
                className="absolute inset-0 -z-10 h-full w-full rounded-lg"
                src={quwu}
                alt="Quwu Logo"
              />
              <div className="mt-auto flex flex-col items-end self-end overflow-hidden rounded-lg bg-white/80 px-3 py-1 shadow dark:bg-black/50">
                <Subtitle className="mt-auto hidden self-end text-sm sm:block">
                  一个收集有趣物品的网站
                </Subtitle>
                <Title className="self-end font-normal">趣物</Title>
              </div>
            </Card>
            <Card
              className="relative flex aspect-square flex-col bg-green-300/10 dark:bg-yellow-400/10"
              link="https://assischat.com"
            >
              <Image
                className="absolute inset-0 -z-10 h-full w-full rounded-lg"
                src={AssisChat}
                alt="AssisChat App"
              />
              <div className="mt-auto flex flex-col items-end self-end rounded-lg bg-white/80 px-3 py-1 shadow dark:bg-black/50">
                <Subtitle className="mt-auto hidden self-end text-sm sm:block">
                  一个 ChatGPT 客户端
                </Subtitle>
                <Title className="self-end font-normal">AssisChat</Title>
              </div>
            </Card>
            <Card
              className="relative flex aspect-square flex-col bg-green-300/10 dark:bg-yellow-400/10"
              link="https://lofyee.com"
            >
              <Image
                className="absolute inset-0 -z-10 h-full w-full rounded-lg"
                src={lofyee}
                alt="Lofyee App"
              />
              <div className="mt-auto flex flex-col items-end self-end rounded-lg bg-white/80 px-3 py-1 shadow dark:bg-black/50">
                <Subtitle className="mt-auto hidden self-end text-sm sm:block">
                  一个 Lo-Fi 播放器
                </Subtitle>
                <Title className="self-end font-normal">Lofyee</Title>
              </div>
            </Card>

            <Label className="col-span-2 mt-4">在写什么</Label>
            <Card
              className="flex aspect-square flex-col bg-red-300/10 dark:bg-red-400/10"
              link="https://subnooc.com"
            >
              <Image
                className="mb-auto h-12 w-12 self-end rounded-lg border sm:h-16 sm:w-16"
                alt="Subnooc Icon"
                width="256"
                height={256}
                src={subnooc}
              />
              <Subtitle>subnooc.com</Subtitle>
              <Title className="text-red-500">主观世界</Title>
            </Card>
            <Card
              className="flex aspect-square flex-col bg-neutral-300/10 dark:bg-neutral-400/10"
              link="https://github.com/noobnooc/noobnooc/discussions"
            >
              <SiGithub className="mb-auto box-border h-12 w-12 self-end rounded-lg border bg-black p-2 text-white sm:h-16 sm:w-16" />
              <Subtitle>github.com</Subtitle>
              <Title className="">技术分享</Title>
            </Card>

            <Label className="col-span-2 mt-4">在玩什么</Label>
            <Card className="flex aspect-square flex-col bg-blue-300/10 dark:bg-blue-400/10">
              <Title className="text-blue-500">TypeScript</Title>
              <Subtitle className="mb-5">
                最常使用的编程语言, 常搭配使用的有 Node / React / Tailwind 等。
              </Subtitle>
              <SiTypescript className="mt-auto h-10 w-10 self-end text-blue-500" />
            </Card>
            <Card className="flex aspect-square flex-col bg-orange-300/10 dark:bg-orange-400/10">
              <Title className="text-orange-500">Swift</Title>
              <Subtitle className="mb-5">
                最近在学习苹果生态的程序设计, 常搭配使用的有 SwiftUI / Combine
                。
              </Subtitle>
              <SiSwift className="mt-auto h-10 w-10 self-end text-orange-500" />
            </Card>
            <Card className="flex aspect-square flex-col bg-yellow-300/10 dark:bg-yellow-400/10">
              <Title className="text-yellow-500">Sketch</Title>
              <Subtitle className="mb-5">
                偶尔也弄弄设计, 但不太熟。现在用 Figma 比较多。
              </Subtitle>
              <SiSketch className="mt-auto h-10 w-10 self-end text-yellow-500" />
            </Card>
            <Card className="flex aspect-square flex-col bg-orange-300/10 dark:bg-orange-400/10">
              <Title className="text-orange-500">Blender</Title>
              <Subtitle className="mb-5">
                尝试学习过很多次, 每次都是照着教程弄一遍就放弃了。
              </Subtitle>
              <SiBlender className="mt-auto h-10 w-10 self-end text-orange-500" />
            </Card>
            <Card className="flex aspect-square flex-col bg-red-300/10 dark:bg-red-400/10">
              <Title className="text-red-500">Switch</Title>
              <Subtitle className="mb-5">
                有一台 Switch, 但上面很多灰, 还有一台灰更多的 PS4 。
              </Subtitle>
              <SiNintendoswitch className="mt-auto h-10 w-10 self-end text-red-500" />
            </Card>
            <Card className="flex aspect-square flex-col bg-cyan-300/10 dark:bg-cyan-400/10">
              <Title className="text-cyan-500">摄影</Title>
              <Subtitle className="mb-5">
                有一台 Sony a7c, 但不知道电池还有没有电。
              </Subtitle>
              <CameraIcon className="mt-auto h-10 w-10 self-end text-cyan-500" />
            </Card>
            <Card className="flex aspect-square flex-col bg-red-300/10 dark:bg-red-400/10">
              <Title className="text-red-500">Netflix</Title>
              <Subtitle className="mb-5">
                闲暇无事的时候会看看剧, 经常使用 Netflix 和 Apple TV+。
              </Subtitle>
              <SiNetflix className="mt-auto h-10 w-10 self-end text-red-500" />
            </Card>
          </div>
          <Label className="mt-4 sm:col-span-2">他们说</Label>
          <div className="grid grid-cols-2 gap-4 sm:col-span-2 sm:grid-cols-3">
            {comments.map((comment) => (
              <Card
                key={comment.name}
                className={twMerge(
                  "flex aspect-square flex-col justify-between sm:aspect-video",
                  `bg-${comment.color}-300/10 dark:bg-${comment.color}-400/10`
                )}
                link={comment.link}
              >
                <div className="flex justify-between">
                  <Title className={`text-${comment.color}-500`}>
                    {comment.name}
                  </Title>
                  <Image
                    className="h-12 w-12 rounded-full"
                    src={comment.avatar}
                    alt={comment.name}
                  />
                </div>
                <Subtitle className="mt-4">{comment.comment}</Subtitle>
              </Card>
            ))}
          </div>
        </div>
        <footer className="text-md col-span-2 py-20 text-center text-sm opacity-60">
          © 2023 Nooc
        </footer>
      </main>
    </div>
  );
}
