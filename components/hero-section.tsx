import { ArrowRight } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { LogoParticles } from "@/components/logo-particles"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <LogoParticles />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-[52%] bg-gradient-to-r from-background via-background/86 to-transparent md:hidden"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-32 pb-16 md:px-8 md:pt-36">
        <div className="flex max-w-3xl flex-col items-start">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <BrandMark className="block text-[2rem] leading-none md:text-[clamp(1.85rem,6.8vw,3.9rem)]" />
            <p className="bg-foreground px-2 py-1 font-label text-[1.35rem] font-bold leading-none text-background md:px-2.5 md:text-[clamp(1.65rem,6vw,3.4rem)]">
              2027 모집요강
            </p>
          </div>
          <h1 className="font-display mt-6 text-[1.75rem] leading-tight text-foreground md:text-[clamp(1.85rem,6.8vw,3.9rem)] md:leading-[1.25]">
            <span className="block md:whitespace-nowrap">수도권 유일 국립 4년제</span>
            <span className="block md:whitespace-nowrap">실용음악학전공</span>
          </h1>

          <div className="mt-9 flex flex-row items-center gap-2 md:gap-3">
            <a
              href="#apply"
              className="group inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap bg-primary px-3.5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:gap-2 md:px-6 md:py-3.5 md:text-base"
            >
              지금 지원하기
              <ArrowRight className="size-3.5 md:size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#works"
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap border border-foreground bg-transparent px-3.5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background md:px-6 md:py-3.5 md:text-base"
            >
              한경인의 주요 성과
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
