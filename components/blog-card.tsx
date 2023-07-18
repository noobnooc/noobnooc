import Card from "./card";
import Image from "next/image";
import { SiGithub } from "@icons-pack/react-simple-icons";
import classNames from "classnames";
import SubjectiveWorld from "../public/subjective-world.png";

const items = [
  {
    name: "github",
    icon: <SiGithub className="h-11 w-11 rounded-lg bg-black p-1 text-white" />,
    url: "https://github.com/noobnooc/noobnooc/discussions",
    title: "技术分享",
    summary: <>分享一些技术</>,
  },
  {
    name: "subjective-world",
    icon: (
      <Image
        className="h-11 w-11 rounded-lg"
        src={SubjectiveWorld}
        alt="Subjective World"
      />
    ),
    url: "https://subjective.world",
    title: "主观世界",
    summary: <>读书、生活、思考</>,
  },
];

export default function BlogCard({ className }: { className?: string }) {
  return (
    <Card
      className={classNames(
        "flex flex-col justify-between bg-orange-100/20 px-4 hover:rotate-2",
        className
      )}
    >
      <h1 className="mb-2 text-orange-500/60">在写什么</h1>
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
