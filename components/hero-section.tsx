import { ArrowRight } from "lucide-react"
import { AestheticMotif } from "@/components/aesthetic-motif"
import { BrandMark } from "@/components/brand-mark"
import { LogoParticles } from "@/components/logo-particles"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <AestheticMotif variant="hero" />
      <LogoParticles />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-32 pb-16 md:px-8 md:pt-36">
        <div className="max-w-xl md:max-w-[34rem]">
          <BrandMark className="text-5xl md:text-6xl" />
          <p className="section-kicker mt-7">2027 모집요강</p>
          <h1 className="font-display mt-3 text-[clamp(1.85rem,6.8vw,3.9rem)] text-foreground">
            <span className="block whitespace-nowrap">수도권 유일 국립 4년제</span>
            <span className="block whitespace-nowrap">실용음악학전공</span>
          </h1>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#apply"
              className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-base font-semibold italic text-primary-foreground transition-opacity hover:opacity-90"
            >
              지금 지원하기
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center gap-2 border border-foreground bg-transparent px-6 py-3.5 text-base font-semibold italic text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              한경인의 주요 성과
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
