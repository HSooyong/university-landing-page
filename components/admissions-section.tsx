import { CalendarDays, GraduationCap, Mic2, Music4, Piano, CheckCircle2, ArrowUpRight } from "lucide-react"

export function AdmissionsSection() {
  return (
    <section id="admissions" className="relative border-t border-foreground/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">Admissions</p>
          <h2 className="font-display mt-3 text-4xl leading-[1.2] text-foreground md:text-5xl">
            2027학년도 수시 모집요강
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-6">
          <div className="group relative overflow-hidden border border-foreground/12 bg-card/50 p-7 md:col-span-4 md:row-span-2">
            <div className="flex items-center gap-2 text-primary">
              <CalendarDays className="size-5" />
              <span className="text-sm font-medium">실기위주(음악특기자) · 평택</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-foreground">주요 일정</h3>
            <div className="mt-6 divide-y divide-border">
              {[
                { d: "원서 접수", t: "2026.09.07 09:00 — 09.11 18:00" },
                { d: "실기고사 안내", t: "2026.10.14" },
                { d: "실기 고사", t: "2026.10.21" },
                { d: "합격자 발표", t: "2026.11.18 14:00 (예정)" },
                { d: "등록확인 서약서", t: "2026.12.21 — 12.23 16:00" },
              ].map((r) => (
                <div key={r.d} className="flex items-baseline justify-between gap-6 py-3.5">
                  <span className="shrink-0 text-sm text-muted-foreground">{r.d}</span>
                  <span className="text-right font-mono text-[13px] font-medium leading-snug text-foreground">{r.t}</span>
                </div>
              ))}
            </div>
            <a
              href="https://ipsi.hknu.ac.kr"
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex w-full items-stretch overflow-hidden bg-primary text-primary-foreground transition-opacity hover:opacity-92 sm:w-auto"
            >
              <span className="flex flex-col justify-center px-5 py-3.5 text-left">
                <span className="font-label text-[10px] tracking-[0.18em] uppercase opacity-70">2027 수시</span>
                <span className="mt-0.5 text-base font-semibold">원서 접수</span>
                <span className="mt-0.5 text-[11px] opacity-70">ipsi.hknu.ac.kr</span>
              </span>
              <span className="flex w-12 items-center justify-center border-l border-primary-foreground/15 bg-primary-foreground/10">
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          <div className="border border-foreground/12 bg-card/50 p-7 md:col-span-2">
            <div className="flex items-center gap-2 text-primary">
              <GraduationCap className="size-5" />
              <span className="text-sm font-medium">지원 자격 · 인원</span>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "고등학교 졸업(예정)자 또는 동등 학력 인정자",
                "모집인원 13명 (일반 9 · 특수교육 4)",
                "전형료 30,000원",
              ].map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between bg-primary p-7 text-primary-foreground md:col-span-2">
            <span className="text-sm font-medium opacity-80">전형 반영 비율</span>
            <div>
              <p className="font-display text-5xl leading-none">100%</p>
              <p className="mt-2 text-sm font-medium opacity-90">실기 100% · 원점수 60점 미만 불합격</p>
            </div>
          </div>

          <div className="group border border-foreground/12 bg-card/50 p-7 transition-colors hover:border-foreground/30 md:col-span-2">
            <div className="flex size-11 items-center justify-center bg-secondary text-foreground">
              <Mic2 className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">보컬</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              자유곡 1곡. Audio File 반주 MR 제출, 반주자 동반·자작곡 가능.
            </p>
          </div>

          <div className="group border border-foreground/12 bg-card/50 p-7 transition-colors hover:border-foreground/30 md:col-span-2">
            <div className="flex size-11 items-center justify-center bg-secondary text-foreground">
              <Music4 className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">작곡 · 힙합 · EDM · 음향</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              작품 실기, 랩, 기악 중 택 1. 자작곡 오디오와 포트폴리오 또는 자유곡 1곡.
            </p>
          </div>

          <div className="group border border-foreground/12 bg-card/50 p-7 transition-colors hover:border-foreground/30 md:col-span-2">
            <div className="flex size-11 items-center justify-center bg-secondary text-foreground">
              <Piano className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">피아노</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              클래식 또는 팝·재즈 피아노. 자유곡 1곡, 자작곡 가능. 연주 2분 내외·암보.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
