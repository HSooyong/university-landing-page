import { works, type Work } from "@/lib/works"
import { cn } from "@/lib/utils"

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Work[]
  reverse?: boolean
}) {
  const loop = [...items, ...items, ...items]

  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-3 pr-3",
          reverse ? "marquee-right" : "marquee-left",
        )}
      >
        {loop.map((work, i) => (
          <figure
            key={`${work.src}-${i}`}
            className="group relative shrink-0"
          >
            <img
              src={work.src}
              alt={work.title ?? ""}
              className="h-40 w-auto bg-card/70 object-contain ring-1 ring-foreground/10 sm:h-48 md:h-52"
            />
            {work.title ? (
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl bg-foreground/55 px-3 py-2 text-xs text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {work.title}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  )
}

export function WorksSection() {
  const rowA = works.filter((_, i) => i % 2 === 0)
  const rowB = works.filter((_, i) => i % 2 === 1)

  return (
    <section id="works" className="border-t border-foreground/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="section-kicker">작품</p>
          <h2 className="font-display mt-3 text-4xl leading-[1.2] text-foreground md:text-5xl">
            이미 현장에서
            <br />
            울린 소리들
          </h2>
        </div>

      <div
        className="works-fade mt-12 flex flex-col gap-3"
        aria-hidden={works.every((w) => !w.title)}
      >
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  )
}
