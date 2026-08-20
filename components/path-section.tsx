"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type PathRow = {
  kicker: string
  title: string
  titleLine2?: string
  body: string
  careers: string[]
  image: string
  imagePos?: string
  flip?: boolean
}

const rows: PathRow[] = [
  {
    kicker: "Track 01",
    title: "Sound",
    titleLine2: "음향",
    body: "레코딩, 믹싱, 라이브 사운드.\n소리를 잡고 공간을 설계합니다.",
    careers: ["음향감독", "사운드 엔지니어"],
    image: "/path/path-sound.jpg",
    imagePos: "center 55%",
  },
  {
    kicker: "Track 02",
    title: "Performance",
    titleLine2: "연주",
    body: "보컬, 건반, 기타, 베이스, 드럼.\n앙상블과 무대로 연주를 완성합니다.",
    careers: ["연주자", "세션", "공연 아티스트"],
    image: "/path/path-performance.jpg",
    imagePos: "center 45%",
    flip: true,
  },
  {
    kicker: "Track 03",
    title: "Post Production",
    titleLine2: "포스트 프로덕션",
    body: "영상 음향, 편집, 미디어 믹스.\n화면 위에 소리를 붙입니다.",
    careers: ["사운드 디자이너", "음악감독"],
    image: "/path/path-post.jpg",
    imagePos: "center 50%",
  },
  {
    kicker: "Track 04",
    title: "Popular Music",
    titleLine2: "대중가요",
    body: "작곡, 편곡, 보컬 프로듀싱.\n노래가 되는 과정을 만듭니다.",
    careers: ["작곡가", "프로듀서", "싱어송라이터"],
    image: "/path/path-pop.jpg",
    imagePos: "center 40%",
    flip: true,
  },
]

function useReveal<T extends HTMLElement>(once = true) {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        if (once) io.disconnect()
      },
      { threshold: 0.28, rootMargin: "0px 0px -10% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return { ref, shown }
}

function SpectrumRow({ row }: { row: PathRow }) {
  const { ref, shown } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="overflow-hidden py-10 md:py-14">
      <div
        className={cn(
          "flex flex-col items-stretch md:flex-row md:items-center",
          row.flip && "md:flex-row-reverse",
        )}
      >
        <figure
          className={cn(
            "relative w-full shrink-0 overflow-hidden md:w-[54%]",
            "spectrum-media",
            row.flip && "spectrum-media-flip",
            shown && "is-in",
          )}
        >
          <div className="aspect-[16/7] md:aspect-auto md:h-[16.5rem] lg:h-[18.5rem]">
            <img
              src={row.image}
              alt={row.titleLine2 ?? row.title}
              className="h-full w-full object-cover"
              style={{ objectPosition: row.imagePos ?? "center" }}
            />
          </div>
          <span
            className={cn(
              "pointer-events-none absolute inset-y-0 w-2/5",
              row.flip
                ? "left-0 bg-gradient-to-r from-[#0c1424] to-transparent"
                : "right-0 bg-gradient-to-l from-[#0c1424] to-transparent",
            )}
          />
        </figure>

        <div
          className={cn(
            "relative z-10 w-full px-5 py-7 md:w-[46%] md:px-12 lg:px-16",
            row.flip ? "md:text-right" : "",
            "spectrum-copy",
            row.flip && "spectrum-copy-flip",
            shown && "is-in",
          )}
        >
          <p className="font-label text-xs tracking-[0.16em] text-[#e0b15a] uppercase">{row.kicker}</p>
          <h3 className="font-label mt-3 text-[1.8rem] leading-[1.15] font-bold tracking-[0.03em] text-[#e0b15a] uppercase md:text-[2rem]">
            {row.title}
            {row.titleLine2 ? (
              <>
                <br />
                <span className="font-sans text-[1.15rem] font-bold tracking-tight normal-case">{row.titleLine2}</span>
              </>
            ) : null}
          </h3>
          <p
            className={cn(
              "mt-4 whitespace-pre-line text-base leading-relaxed text-white/90 md:max-w-sm",
              row.flip && "md:ml-auto",
            )}
          >
            {row.body}
          </p>
          <div className={cn("mt-5", row.flip && "md:flex md:flex-col md:items-end")}>
            <p className="font-label text-[11px] tracking-[0.16em] text-[#e0b15a]/80 uppercase">Career</p>
            <ul
              className={cn(
                "mt-2.5 flex flex-wrap gap-2",
                row.flip && "md:justify-end",
              )}
            >
              {row.careers.map((job) => (
                <li
                  key={job}
                  className="border border-[#e0b15a]/45 bg-[#e0b15a]/10 px-3 py-1.5 text-sm font-medium tracking-wide text-[#f3d59a]"
                >
                  {job}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PathSection() {
  const head = useReveal<HTMLDivElement>()

  return (
    <section id="path" className="relative overflow-x-hidden bg-[#0c1424]">
      <div className="mx-auto max-w-6xl px-5 pt-24 pb-8 text-center md:px-8 md:pt-32">
        <div ref={head.ref} className={cn("spectrum-head", head.shown && "is-in")}>
          <p className="text-sm font-bold tracking-wide text-[#e0b15a]">교육과정</p>
          <h2 className="font-display mt-3 text-2xl leading-snug tracking-tight text-white md:text-4xl">
            배우게 되는 것, 나아가게 되는 곳
          </h2>
        </div>
      </div>

      <div className="pb-16 md:pb-24">
        {rows.map((row) => (
          <SpectrumRow key={row.title} row={row} />
        ))}
      </div>
    </section>
  )
}
