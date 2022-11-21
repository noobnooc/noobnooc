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
        "rounded-xl border border-gray-200 bg-white p-4 shadow-md shadow-gray-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-500/5 ",
        className
      )}
    >
      {children}
    </div>
  );
}
