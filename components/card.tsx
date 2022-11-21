import { ReactNode } from "react";
import classNames from "classnames";

export default function Card({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={classNames(
        " isolate rounded-xl border border-gray-200 bg-white/50 p-4 shadow-md shadow-gray-500/5 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/5 dark:border-gray-500/60 dark:bg-black/20 dark:shadow-none dark:hover:border-gray-500/80 dark:hover:shadow-none sm:hover:-translate-y-1 ",
        className
      )}
    >
      {children}
    </div>
  );
}
