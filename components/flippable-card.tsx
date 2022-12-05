import { ReactNode } from "react";

export default function FlippableCard({
  front,
  back,
  flipped,
  className,
  children,
}: {
  className?: string;
  front: ReactNode;
  back: ReactNode;
  flipped: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={className}
      style={{
        perspective: "1000px",
      }}
    >
      {children}
      <div
        className="relative h-full w-full"
        style={{
          transition: "transform 1s",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backfaceVisibility: "hidden",
            transition: "transform 0.8s",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {front}
        </div>
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backfaceVisibility: "hidden",
            transition: "transform 0.8s",
            transform: flipped ? "rotateY(360deg)" : "rotateY(180deg)",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
