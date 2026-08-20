import { ArrowRight } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { LogoParticles } from "@/components/logo-particles"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-6 px-5 pt-32 pb-16 md:grid-cols-[1.2fr_0.8fr] md:gap-6 md:px-8 md:pt-36">
        <div className="relative z-10">
          <BrandMark className="text-5xl md:text-6xl" />
          <p className="mt-7 text-lg font-semibold tracking-tight text-primary md:text-xl">2027 모집요강</p>
          <h1 className="font-display mt-4 text-[clamp(1.85rem,6.8vw,3.9rem)] leading-[1.25] tracking-tight text-foreground">
            <span className="block whitespace-nowrap">수도권 유일 국립 4년제</span>
            <span className="block whitespace-nowrap">실용음악학전공</span>
          </h1>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#apply"
              className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              지금 지원하기
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center gap-2 border border-foreground/25 bg-transparent px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              한경인의 주요 성과
            </a>
          </div>
        </div>

        <div className="relative h-[320px] sm:h-[400px] md:h-[540px]">
          <LogoParticles />
        </div>
      </div>
    </section>
  )
}
