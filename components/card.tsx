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
        "isolate rounded-xl border border-gray-600/10 p-4 shadow-xl shadow-gray-400/10 transition-all duration-300 dark:shadow-black/0",
        className
      )}
    >
      {children}
    </div>
  );
}
