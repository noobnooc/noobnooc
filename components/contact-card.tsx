import Card from "./card";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  SiGithub,
  SiInstagram,
  SiTwitter,
} from "@icons-pack/react-simple-icons";
import classNames from "classnames";

export default function ContactCard({ className }: { className?: string }) {
  return (
    <Card
      className={classNames(
        "flex flex-col justify-between bg-blue-100/20 px-4 hover:-rotate-2",
        className
      )}
    >
      <h1 className="mb-2 text-blue-500/70">在哪找我</h1>
      <div className="mt-10 flex items-center space-x-5 self-end">
        <a href="https://twitter.com/noobnooc">
          <SiTwitter className="h-6 w-6 hover:text-[#1DA1F2]" />
        </a>
        <a href="https://github.com/noobnooc/noobnooc">
          <SiGithub className="h-6 w-6 hover:text-purple-500" />
        </a>
        <a href="https://www.instagram.com/noobnooc/">
          <SiInstagram className="h-6 w-6 hover:text-[#E4405F]" />
        </a>
        <a href="mailto:nooc@nooc.me">
          <EnvelopeIcon className="h-7 w-7 hover:text-green-500" />
        </a>
      </div>
    </Card>
  );
}
