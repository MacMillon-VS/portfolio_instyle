interface MarqueeProps {
  items: string[];
}

/**
 * Infinite horizontal marquee. The track is duplicated and translated -50%,
 * so the loop is seamless.
 */
export default function Marquee({ items }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-16 whitespace-nowrap font-display text-2xl font-light text-stone md:text-3xl"
          >
            {item}
            <span className="text-bronze/50">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
