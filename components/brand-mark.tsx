import { cn } from "@/lib/utils"

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("font-label text-[22px] font-bold tracking-tight", className)}>
      <span className="text-primary">HK</span>
      <span className="text-teal">NU</span>
    </span>
  )
}
