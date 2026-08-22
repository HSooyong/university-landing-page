import { CalendarDays, GraduationCap, CheckCircle2, ArrowUpRight } from "lucide-react"
import { AestheticMotif } from "@/components/aesthetic-motif"

function Notes({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-left font-bold leading-snug text-foreground">
      {items.map((item) => (
        <li key={item}>- {item}</li>
      ))}
    </ul>
  )
}

const notes = [
  "실기 연주시간은 2분 내외임",
  "과제곡 및 기초음악지식에 관한 간단한 질의응답 있음",
  "힙합, EDM, 음향전공 지원자는 본인의 작업을 입증할 자작곡 오디오와 함께 연주나 노래를 하거나, 곡에 사용한 DAW와 제작과정을 설명함",
  "모든 연주는 암보를 원칙으로 함",
  "피아노, 앰프, 드럼 이외의 개인 악기는 수험생이 준비함",
]

export function AdmissionsSection() {
  return (
    <section id="admissions" className="relative border-t border-foreground/10 py-16 md:py-32">
      <AestheticMotif />
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">모집요강</p>
          <h2 className="font-display section-title text-4xl text-foreground md:text-5xl">
            2027학년도 수시 모집요강
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:mt-4 md:text-lg">
            디자인예술스포츠대학 실용음악학과 · 실기위주(음악특기자) 평택
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:mt-14 md:grid-cols-6 md:gap-4">
          <div className="border border-foreground bg-card p-5 md:col-span-4 md:p-7">
            <div className="flex items-center gap-2 text-primary">
              <CalendarDays className="size-5" />
              <span className="text-base font-semibold">주요 일정</span>
            </div>
            <div className="mt-4 divide-y divide-border md:mt-6">
              {[
                { d: "원서 접수", t: "2026.09.07 09:00 — 09.11 18:00" },
                { d: "서류 제출", t: "2026.09.07 09:00 — 09.16 18:00" },
                { d: "실기고사 안내", t: "2026.10.14" },
                { d: "실기 고사", t: "2026.10.21" },
                { d: "합격자 발표", t: "2026.11.18 14:00 (예정)" },
                { d: "등록확인 서약서", t: "2026.12.21 — 12.23 16:00" },
              ].map((r) => (
                <div key={r.d} className="flex items-baseline justify-between gap-4 py-2.5 md:gap-6 md:py-3.5">
                  <span className="shrink-0 text-base text-muted-foreground">{r.d}</span>
                  <span className="text-right font-mono text-[15px] font-semibold leading-snug text-foreground">
                    {r.t}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://ipsi.hknu.ac.kr"
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex w-full items-stretch overflow-hidden bg-primary text-primary-foreground transition-opacity hover:opacity-92 md:mt-7 sm:w-auto"
            >
              <span className="flex flex-col justify-center px-5 py-3 text-left md:py-3.5">
                <span className="font-label text-xs tracking-[0.12em] uppercase opacity-70">2027 수시</span>
                <span className="mt-0.5 text-lg font-semibold">원서 접수</span>
                <span className="mt-0.5 text-sm opacity-70">ipsi.hknu.ac.kr</span>
              </span>
              <span className="flex w-12 items-center justify-center border-l border-primary-foreground/15 bg-primary-foreground/10">
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-3 md:col-span-2">
            <div className="border border-foreground bg-card p-5 md:p-7">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="size-5" />
                <span className="text-base font-semibold">지원 자격 · 인원</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {[
                  "고등학교 졸업(예정)자 또는 동등 이상 학력 인정자",
                  "모집인원 13명 (일반 9 · 특수교육 4, 대상별 선발)",
                  "특수교육: 장애인 등록 · 특수교육대상자 · 상이등급자",
                  "전형료 30,000원",
                ].map((c) => (
                  <li key={c} className="flex gap-2.5 text-base text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-4 bg-primary p-5 text-primary-foreground md:p-7">
              <span className="text-base font-medium opacity-80">전형 반영 비율</span>
              <div>
                <p className="font-display text-4xl leading-none md:text-5xl">100%</p>
                <p className="mt-2 text-base font-semibold leading-relaxed opacity-90">
                  실기 100% · 원점수 60점 미만 불합격
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <p className="section-kicker">실기고사</p>
          <h3 className="font-display section-title text-2xl font-bold text-foreground md:text-4xl">
            07 실기고사
          </h3>

          <div className="mt-6 overflow-x-auto border border-foreground md:mt-8">
            <table className="w-full min-w-[52rem] border-collapse text-base font-bold leading-snug text-foreground md:text-lg">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3.5 text-center md:px-5 md:py-4">구분</th>
                  <th className="px-4 py-3.5 text-center md:px-5 md:py-4" colSpan={2}>
                    심사
                  </th>
                  <th className="px-4 py-3.5 text-center md:px-5 md:py-4">과제곡</th>
                  <th className="px-4 py-3.5 text-center md:px-5 md:py-4">비고</th>
                </tr>
              </thead>
              <tbody className="bg-card/70">
                <tr className="border-t border-foreground/12">
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5">보컬</td>
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5" colSpan={2}>
                    가창 실기
                  </td>
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5">자유곡 1곡</td>
                  <td className="px-4 py-4 align-middle md:px-5 md:py-5">
                    <Notes items={["Audio File 반주MR 제출", "반주자 동반 가능", "자작곡 가능"]} />
                  </td>
                </tr>

                <tr className="border-t border-foreground/12">
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5" rowSpan={2}>
                    작곡
                  </td>
                  <td className="px-3 py-4 text-center align-middle text-primary md:px-4 md:py-5" rowSpan={2}>
                    택 1
                  </td>
                  <td className="border-l border-foreground/12 px-4 py-4 text-center align-middle md:px-5 md:py-5">
                    작품 실기
                  </td>
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5">자작곡 1곡</td>
                  <td className="px-4 py-4 align-middle md:px-5 md:py-5">
                    <Notes items={["Audio File 제출", "작품 포트폴리오 지참"]} />
                  </td>
                </tr>
                <tr className="border-t border-foreground/12">
                  <td className="border-l border-foreground/12 px-4 py-4 text-center align-middle md:px-5 md:py-5">
                    기악연주 실기
                  </td>
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5">자유곡 1곡</td>
                  <td className="px-4 py-4 align-middle md:px-5 md:py-5">
                    <Notes items={["모든 악기 가능", "Audio File 반주MR 제출", "반주자 동반 가능"]} />
                  </td>
                </tr>

                <tr className="border-t border-foreground/12">
                  <td className="px-4 py-4 text-center align-middle leading-relaxed md:px-5 md:py-5" rowSpan={3}>
                    힙합
                    <br />
                    EDM
                    <br />
                    음향
                  </td>
                  <td className="px-3 py-4 text-center align-middle text-primary md:px-4 md:py-5" rowSpan={3}>
                    택 1
                  </td>
                  <td className="border-l border-foreground/12 px-4 py-4 text-center align-middle md:px-5 md:py-5">
                    랩 연주 실기
                  </td>
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5">자유곡 1곡</td>
                  <td className="px-4 py-4 align-middle md:px-5 md:py-5">
                    <Notes items={["Audio File 반주MR 제출", "자작곡 가능"]} />
                  </td>
                </tr>
                <tr className="border-t border-foreground/12">
                  <td className="border-l border-foreground/12 px-4 py-4 text-center align-middle md:px-5 md:py-5">
                    작품 실기
                  </td>
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5">자작곡 1곡</td>
                  <td className="px-4 py-4 align-middle md:px-5 md:py-5">
                    <Notes items={["Audio File 제출", "작품 포트폴리오 지참"]} />
                  </td>
                </tr>
                <tr className="border-t border-foreground/12">
                  <td className="border-l border-foreground/12 px-4 py-4 text-center align-middle md:px-5 md:py-5">
                    기악연주 실기
                  </td>
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5">자유곡 1곡</td>
                  <td className="px-4 py-4 align-middle md:px-5 md:py-5">
                    <Notes items={["모든 악기 가능", "Audio File 반주MR 제출", "반주자 동반 가능"]} />
                  </td>
                </tr>

                <tr className="border-t border-foreground/12">
                  <td className="px-4 pb-1.5 pt-4 text-center align-bottom md:px-5 md:pt-5">클래식 피아노</td>
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5" rowSpan={2} colSpan={2}>
                    피아노연주 실기
                  </td>
                  <td className="px-4 py-4 text-center align-middle md:px-5 md:py-5" rowSpan={2}>
                    자유곡 1곡
                  </td>
                  <td className="px-4 py-4 align-middle md:px-5 md:py-5" rowSpan={2}>
                    <Notes items={["자작곡 가능"]} />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 pb-4 pt-1.5 text-center align-top md:px-5 md:pb-5">팝·재즈 피아노</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 border border-foreground bg-card p-5 md:p-7">
            <p className="text-lg font-bold text-primary">유의사항</p>
            <ol className="mt-4 space-y-2.5">
              {notes.map((note, i) => (
                <li
                  key={note}
                  className="flex gap-3 text-base font-semibold leading-relaxed text-foreground md:text-lg"
                >
                  <span className="shrink-0 text-primary">{i + 1}.</span>
                  <span>{note}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
