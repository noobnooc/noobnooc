import classNames from "classnames";
import Card from "./card";

export default function LinkCard({
  className,
  label,
  summary,
  icon,
}: {
  className?: string;
  label: string;
  summary: string;
  icon: JSX.Element;
}) {
  return (
    <div className="relative col-span-3 h-0 w-full pt-[100%]">
      <Card
        className={classNames(
          "absolute inset-0 cursor-pointer bg-violet-200/10 transition-transform duration-300 hover:scale-105",
          className
        )}
      >
        <h1 className="mb-2 text-orange-500/60">{label}</h1>
        <div className="flex items-center space-x-4 px-4">{summary}</div>
        {icon}
      </Card>
    </div>
  );
}
