"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function LottieIcon({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
      className={className}
    />
  );
}
