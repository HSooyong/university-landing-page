import { ArrowRight } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { LogoParticles } from "@/components/logo-particles"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-4 px-5 pt-28 pb-16 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:px-8">
        <div className="relative z-10 max-w-3xl">
          <BrandMark className="text-2xl md:text-3xl" />
          <p className="font-label mt-8 text-xs text-primary">2027 Admissions</p>
          <h1 className="font-display mt-4 text-[2.7rem] leading-[1.16] text-foreground sm:text-6xl md:text-7xl">
            소리의 미래,
            <br />
            여기서 시작됩니다
          </h1>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#apply"
              className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              지금 지원하기
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center gap-2 border border-foreground/25 bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              Works
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
