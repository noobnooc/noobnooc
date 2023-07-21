import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Card({
  children,
  className,
  link,
}: {
  className?: string;
  children: ReactNode;
  link?: string;
}) {
  const classString = twMerge(
    "isolate rounded-xl border bg-white/50 p-4 shadow-xl shadow-gray-400/10 transition-all duration-300 dark:bg-indigo-100/5 dark:shadow-black/0",
    className
  );

  return link ? (
    <a className={classString} target="_blank" href={link}>
      {children}
    </a>
  ) : (
    <div className={classString}>{children}</div>
  );
}
