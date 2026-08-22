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
      <HoloOrb
        className={cn(
          "right-0 top-0 size-64 opacity-45 md:size-72",
          variant === "hero" && "opacity-70 md:size-80",
          variant === "cta" && "opacity-65 md:size-80",
          variant === "navy" && "opacity-35 md:size-80",
        )}
      />
      <HoloOrb className="bottom-0 left-0 size-40 opacity-30 md:size-48" />
    </div>
  )
}
