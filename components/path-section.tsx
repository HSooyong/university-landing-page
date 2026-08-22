"use client"

import { useEffect, useRef, useState } from "react"
import { AestheticMotif } from "@/components/aesthetic-motif"
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
    body: "레코딩부터 믹싱, 라이브 사운드까지.\n소리를 빚고 공간의 울림을 설계합니다.",
    careers: ["레코딩 엔지니어", "믹싱 엔지니어", "음향감독"],
    image: "/path/path-sound.jpg",
    imagePos: "center 55%",
  },
  {
    kicker: "Track 02",
    title: "Performance",
    titleLine2: "연주",
    body: "보컬, 건반, 기타, 베이스, 드럼.\n테크닉과 앙상블로 무대를 완성합니다.",
    careers: ["연주자", "세션", "공연 아티스트"],
    image: "/path/path-performance.jpg",
    imagePos: "center 45%",
    flip: true,
  },
  {
    kicker: "Track 03",
    title: "Post Production",
    titleLine2: "포스트 프로덕션",
    body: "영상 음향, 사운드 디자인, 미디어 믹스.\n장면에 소리를 붙이고 몰입을 만듭니다.",
    careers: ["사운드 디자이너", "폴리 아티스트", "음악감독"],
    image: "/path/path-post.jpg",
    imagePos: "center 50%",
  },
  {
    kicker: "Track 04",
    title: "Popular Music",
    titleLine2: "대중음악",
    body: "작곡, 편곡, 보컬 프로듀싱.\n스케치부터 음원까지, 노래가 되는 과정을 만듭니다.",
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
    <div ref={ref} className="overflow-hidden py-6 md:py-8">
      <div
        className={cn(
          "grid items-center gap-6 md:grid-cols-2 md:gap-12",
          row.flip && "md:[&>figure]:order-2 md:[&>div]:order-1",
        )}
      >
        <figure
          className={cn(
            "relative overflow-hidden border border-white/20",
            "spectrum-media",
            row.flip && "spectrum-media-flip",
            shown && "is-in",
          )}
        >
          <div className="aspect-[16/10]">
            <img
              src={`${row.image}${row.image.includes("path-post") ? "?v=3" : ""}`}
              alt={row.titleLine2 ?? row.title}
              className="h-full w-full object-cover"
              style={{ objectPosition: row.imagePos ?? "center" }}
            />
          </div>
        </figure>

        <div
          className={cn(
            "spectrum-copy",
            row.flip && "spectrum-copy-flip md:text-right",
            shown && "is-in",
          )}
        >
          <p
            className={cn(
              "inline-flex bg-white px-2.5 py-1 text-[11px] font-extrabold tracking-[0.04em] text-black uppercase",
              row.flip && "md:ml-auto",
            )}
          >
            {row.kicker}
          </p>
          <h3 className="font-label mt-3 text-[1.8rem] font-extrabold tracking-tight text-white uppercase md:text-[2rem]">
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
              "mt-4 max-w-sm whitespace-pre-line text-base leading-relaxed text-white/90",
              row.flip && "md:ml-auto",
            )}
          >
            {row.body}
          </p>
          <div className={cn("mt-5", row.flip && "md:flex md:flex-col md:items-end")}>
            <p className="font-label text-[11px] tracking-[0.16em] text-white/70 uppercase">Career</p>
            <ul className={cn("mt-2.5 flex flex-wrap gap-2", row.flip && "md:justify-end")}>
              {row.careers.map((job) => (
                <li
                  key={job}
                  className="border border-white/55 px-3 py-1.5 text-sm font-medium tracking-wide text-white"
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
    <section id="path" className="relative overflow-x-hidden bg-black">
      <AestheticMotif variant="navy" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-24 pb-10 md:px-8 md:pt-32">
        <div ref={head.ref} className={cn("spectrum-head", head.shown && "is-in")}>
          <p className="inline-flex bg-white px-2.5 py-1 text-[13px] font-extrabold tracking-[0.04em] text-black">
            교육과정
          </p>
          <h2 className="font-display section-title text-4xl text-white md:text-5xl">
            실무를 배우는 과정, 현장으로 이어지는 길
          </h2>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        {rows.map((row) => (
          <SpectrumRow key={row.title} row={row} />
        ))}
      </div>
    </section>
  )
}
