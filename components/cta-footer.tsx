import { ArrowRight, MapPin } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.8v4.4L15 12l-4.5-2.2Z" fill="currentColor" />
    </svg>
  )
}

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hknu.appliedmusic/",
    icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@%ED%95%9C%EA%B2%BD%EA%B5%AD%EB%A6%BD%EB%8C%80%ED%95%99%EA%B5%90%EC%8B%A4%EC%9A%A9",
    icon: YoutubeIcon,
  },
  {
    label: "위치",
    href: "https://hknu.ac.kr/art/2629/subview.do",
    icon: MapPin,
  },
]

export function CtaFooter() {
  return (
    <>
      <section id="apply" className="relative overflow-hidden border-t border-foreground/10">
        <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
          <p className="section-kicker">문의</p>
          <h2 className="font-display section-title max-w-3xl text-4xl text-foreground md:text-6xl">
            당신의 소리를
            <br />
            세상에 들려줄 시간
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://ipsi.hknu.ac.kr"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              원서 접수하기
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:031-610-4840"
              className="inline-flex items-center justify-center gap-2 border border-foreground/25 px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              입학 상담 031-610-4840
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <span className="text-base font-semibold text-foreground">실용음악학전공</span>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            디자인예술스포츠학부 실용음악학전공
            <br />
            평택캠퍼스 창의관 417호
          </p>
          <p className="mt-3 space-y-0.5 text-base text-muted-foreground">
            <span className="block">
              <span className="text-foreground/70">TEL</span> 031-610-4840
            </span>
            <span className="block">
              <span className="text-foreground/70">FAX</span> 031-610-4844
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/15 px-3.5 py-2 text-base text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © 2026 Hankyong National University · Applied Music. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">입학 문의 · 031-610-4840</p>
          </div>
        </div>
      </footer>
    </>
  )
}
