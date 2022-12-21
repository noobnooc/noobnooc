import Card from "./card";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import kosto from "../public/kosto.png";
import { useState } from "react";
import classNames from "classnames";

export default function BlogCard({ className }: { className?: string }) {
  return (
    <Card
      className={classNames(
        "flex flex-col justify-between bg-orange-100/20 px-4 hover:rotate-2",
        className
      )}
    >
      <h1 className="mb-2 text-orange-500/60">博客</h1>
      <div className="flex">施工中...</div>
    </Card>
  );
}
