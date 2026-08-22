import { cn } from "@/lib/utils"

type Variant = "hero" | "section" | "cta" | "navy"

function HoloOrb({ className }: { className?: string }) {
  return (
    <span className={cn("absolute overflow-hidden rounded-full", className)}>
      <span className="absolute inset-[-20%] bg-[conic-gradient(from_210deg_at_40%_35%,#f7b6e8_0%,#9ad4ff_28%,#c8f7b8_52%,#d4b8ff_78%,#f7b6e8_100%)] blur-2xl" />
      <span className="grain absolute inset-0 opacity-40 mix-blend-multiply" />
    </span>
  )
}

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-4 gap-[5px]", className)}>
      {Array.from({ length: 16 }, (_, i) => (
        <span key={i} className="size-[5px] rounded-full bg-current" />
      ))}
    </div>
  )
}

function Starburst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("absolute", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M12 0 13.4 8.2 20.5 3.5 15.8 10.6 24 12 15.8 13.4 20.5 20.5 13.4 15.8 12 24 10.6 15.8 3.5 20.5 8.2 13.4 0 12 8.2 10.6 3.5 3.5 10.6 8.2Z"
      />
    </svg>
  )
}

export function AestheticMotif({
  variant = "section",
  className,
}: {
  variant?: Variant
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {variant === "hero" ? (
        <>
          <HoloOrb className="right-[-4rem] top-[18%] size-[22rem] opacity-80 md:right-[8%] md:size-[28rem]" />
          <HoloOrb className="-bottom-24 -left-16 size-56 opacity-55" />
          <DotGrid className="absolute right-6 top-28 text-foreground md:right-12 md:top-32" />
          <Starburst className="bottom-24 left-[42%] size-7 text-foreground md:left-[48%]" />
        </>
      ) : null}

      {variant === "section" ? (
        <>
          <HoloOrb className="-right-16 -top-20 size-64 opacity-50" />
          <HoloOrb className="-bottom-24 left-[8%] size-40 opacity-40" />
          <DotGrid className="absolute right-6 top-8 text-foreground/80" />
        </>
      ) : null}

      {variant === "cta" ? (
        <>
          <HoloOrb className="-right-10 top-0 size-72 opacity-75" />
          <HoloOrb className="-bottom-20 left-[18%] size-48 opacity-45" />
          <DotGrid className="absolute left-6 top-8 text-foreground" />
          <Starburst className="right-[28%] bottom-16 size-6 text-foreground" />
        </>
      ) : null}

      {variant === "navy" ? (
        <>
          <HoloOrb className="-right-16 -top-24 size-80 opacity-40" />
          <HoloOrb className="-left-20 bottom-10 size-56 opacity-30" />
          <DotGrid className="absolute right-8 top-10 text-white" />
        </>
      ) : null}
    </div>
  )
}
