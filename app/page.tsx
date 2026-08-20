import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { PathSection } from "@/components/path-section"
import { WorksSection } from "@/components/works-section"
import { FacultySection } from "@/components/faculty-section"
import { AdmissionsSection } from "@/components/admissions-section"
import { CtaFooter } from "@/components/cta-footer"
import { TextParticles } from "@/components/text-particles"

export default function Page() {
  return (
    <main className="relative min-h-screen poster-wash">
      <div className="pointer-events-none fixed inset-0 z-40 grain" />
      <SiteNav />
      <HeroSection />

      <section id="intro" className="border-t border-foreground/10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="section-kicker">소개</p>
          <h2 className="sr-only">
            보컬, 싱어송라이터, EDM 프로듀서, Beat Maker, 연주 세션, 스튜디오 엔지니어. 당신을 알리는 소리를
            배웁니다.
          </h2>
          <div className="mt-6 h-[220px] sm:h-[280px] md:h-[340px]">
            <TextParticles />
          </div>
        </div>
      </section>

      <PathSection />
      <WorksSection />
      <FacultySection />
      <AdmissionsSection />
      <CtaFooter />
    </main>
  )
}
