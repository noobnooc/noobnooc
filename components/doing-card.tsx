import Card from "./card";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import kosto from "../public/kosto.png";

export default function DoingCard() {
  return (
    <Card className="flex flex-col justify-between px-6">
      <h1 className="mb-2 text-lg">在做什么</h1>
      <div className="my-3">
        <a href="https://kosto.nooc.ink">
          <Image className="h-10 w-10 rounded-lg" src={kosto} alt="Kosto App" />
        </a>
      </div>
    </Card>
  );
}
