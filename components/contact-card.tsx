import Card from "./card";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import kosto from "../public/kosto.png";
import { useState } from "react";
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
    </Card>
  );
}
