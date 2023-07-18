import classNames from "classnames";

export default function BackgroundGradient({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={classNames("absolute -z-10 animate-fluid blur-3xl", className)}
    />
  );
}
