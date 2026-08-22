"use client"

import { useEffect, useState } from "react"
import { X, Mail } from "lucide-react"

type CreditBlock = {
  title: string
  items: string[]
}

type Faculty = {
  id: string
  name: string
  role: string
  image: string
  focusEn: string
  focusKo: string
  tags: string[]
  email: string
  blocks: CreditBlock[]
}

const faculty: Faculty[] = [
  {
    id: "lee-sangyong",
    name: "이상용",
    role: "학부장 · 교수",
    image: "/faculty/lee-sangyong.jpg",
    focusEn: "Sound",
    focusKo: "믹스 & 마스터링, PA",
    tags: ["PA", "Studio", "KBS", "Live"],
    email: "itan@nate.com",
    blocks: [
      {
        title: "학력",
        items: [
          "경희대학교 음악대학 (기악) 1990",
          "Tokyo Media Art Shobi (Sound Art) 1994",
          "경희대학교 언론정보대학원 (대중예술) 2003",
        ],
      },
      {
        title: "현장 경력",
        items: [
          "KBS 폴리사운드 제작실장 (2001–2006)",
          "(주)대영A/V 음반프로듀서 (1994–1997)",
          "(주)Tan Enterprise 대표 (1997–2000)",
          "워너뮤직코리아 제작 자문위원 (2007–2010)",
          "그린플러그드 콘서트 조직위원 · 음향 자문 (2012–2020)",
          "한국문예회관연합회 음향 시스템 컨설턴트 (2015–)",
        ],
      },
      {
        title: "스튜디오",
        items: [
          "음반 레코딩·믹싱 — 전람회, 김종서, 박상민, 015B, Bank, Nasty Boys 외",
          "마스터링 — 그린플러그드 ‘숨’, 드라마 OST (김복주, 완벽한 아내, 국민여러분, 빙의)",
        ],
      },
      {
        title: "방송 · PA",
        items: [
          "KBS 사운드 믹스·슈퍼바이저 — 태조왕건, 대조영, 무인시대 외",
          "다큐멘터리 사운드 슈퍼바이저 — 개마고원, 차마고도",
          "공연 음향감독 — 호세 카레라스·신영옥 Big Concert, 그린플러그드 서울, SPURT 2022",
        ],
      },
    ],
  },
  {
    id: "seok-yonghwan",
    name: "석용환",
    role: "교수",
    image: "/faculty/seok-yonghwan.jpg",
    focusEn: "Computer Music",
    focusKo: "컴퓨터 음악 · 사운드 디자인",
    tags: ["Music Tech", "AES", "Computer Music"],
    email: "yhseok@knuw.ac.kr",
    blocks: [
      {
        title: "학력",
        items: [
          "경북대학교 전자공학과 (공학사) 1986–1993",
          "University of York Music Technology (MSc) 1997–1999",
        ],
      },
      {
        title: "경력",
        items: [
          "LG전자 영상디스플레이 연구소 연구원 (1993–1996)",
          "대구미래대학 디지털음악과 전임강사·학과장 (2000–2002)",
          "한국복지대학교 모던음악과 교수 (2002–)",
          "한국복지대학교 학술정보관장 · 교무처장 · 기획실장 역임",
        ],
      },
      {
        title: "수상 · 학회",
        items: [
          "교육부 표창 — 스승의 날 (2013), 우수연구성과 (2015)",
          "Audio Engineering Society 정회원",
          "한국음향학회 종신회원",
        ],
      },
      {
        title: "연구 · 저술",
        items: [
          "학위논문 Modeling System for Predicting the Performance of the Ambisonic Decoder, University of York",
          "시각장애인 컴퓨터음악 교육 · 심벌북 다수 저술 (Sonar, Sound Forge, Csound)",
          "특허 — 시각장애인을 위한 서적, CRT 고정 스프링 구조 (LG전자)",
        ],
      },
    ],
  },
  {
    id: "kim-jeonga",
    name: "김정아",
    role: "교수",
    image: "/faculty/kim-jeonga.jpg",
    focusEn: "Composition",
    focusKo: "작곡 · 포스트 프로덕션",
    tags: ["Berklee", "Nexon", "Disney+", "Film Scoring"],
    email: "jakim@knuw.ac.kr",
    blocks: [
      {
        title: "학력",
        items: [
          "연세대학교 음악대학 작곡과 졸업",
          "Berklee College of Music 영화음악과 (Film Scoring) 졸업",
          "동국대학교 영상대학원 컴퓨터음악 전공 졸업",
        ],
      },
      {
        title: "현장",
        items: [
          "㈜리드사운드, ㈜The Show, ㈜정글부기 작곡가·음악감독",
          "㈜사운즈쿨 작곡가·음악감독",
          "EBS · KBS · MBC · 투니버스 · CJ ENM 작품 음악감독",
          "디즈니플러스 · 드림웍스 · 투니버스 더빙 음악감독",
        ],
      },
      {
        title: "게임 · 애니메이션",
        items: [
          "넥슨 · 엔씨소프트 · 넷마블 게임음악 — 카트라이더, 메이플스토리, 마비노기, 엘소드 외",
          "뽀로로 극장판, 포켓몬, 브레드이발소, 터닝메카드, 핑크퐁, 안녕자두야 외",
        ],
      },
      {
        title: "광고 · 방송",
        items: [
          "대한항공, NIKE, 현대자동차, SKT, KTX 등 광고·홍보음악 400여 편",
          "에버랜드 Magic on Parade · 캐롤환타지 음악감독",
          "저서 『미디어음악』(커뮤니케이션북스)",
        ],
      },
    ],
  },
  {
    id: "moon-jeongsim",
    name: "문정심",
    role: "교수",
    image: "/faculty/moon-jeongsim.jpg?v=3",
    focusEn: "Piano & Live",
    focusKo: "피아노 & 라이브 퍼포먼스",
    tags: ["Piano", "Konzertexamen", "Folkwang"],
    email: "jsmoon1010@hanmail.net",
    blocks: [
      {
        title: "학력",
        items: [
          "선화예술학교 · 선화예술고등학교 졸업",
          "연세대학교 음악대학 기악과 (피아노) 졸업",
          "독일 에센 국립음대 졸업 (K.A.)",
          "독일 에센 국립음대 최고 연주자 과정 (Konzertexamen) 졸업",
        ],
      },
      {
        title: "수상",
        items: [
          "Essen 국립음대 콩쿨 1등 (2000)",
          "Folkwang Preis 1등 (2001)",
          "이태리 GENOVA 국제콩쿨 2등 (2002)",
          "2006 교향악축제 협연 피아니스트 선정",
        ],
      },
      {
        title: "협연 · 무대",
        items: [
          "Bergische Symphoniker — 라흐마니노프 피아노 협주곡",
          "예술의전당 콘서트홀 2006 교향악축제 — 창원시향 협연",
          "창원·군산시향 정기연주회 — 리스트 피아노 협주곡",
          "금호아트홀 초청 Fusion Concert — 차이코프스키",
          "예술의전당 귀국 독주회 (2003)",
        ],
      },
    ],
  },
]

export function FacultySection() {
  const [active, setActive] = useState<Faculty | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null)
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [active])

  return (
    <section id="faculty" className="relative border-t border-foreground/15 py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div>
          <p className="section-kicker">교수진</p>
          <h2 className="font-display section-title text-[1.75rem] text-foreground md:text-5xl">
            현장을 아는 교수진이
            <br />
            당신의 꿈을 설계합니다
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f)}
              className="group text-left"
              aria-label={`${f.name} 교수 이력 보기`}
            >
              <div className="overflow-hidden bg-[#c5d0dc] ring-1 ring-foreground">
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={f.image}
                    alt={`${f.name} 교수`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm font-semibold text-primary">{f.role}</p>
                <h3 className="mt-1 text-xl font-bold text-foreground">{f.name}</h3>
                <div className="mt-3 flex items-stretch gap-3">
                  <span className="w-px bg-primary/50" aria-hidden />
                  <div>
                    <p className="font-label text-[11px] tracking-[0.16em] text-primary uppercase">{f.focusEn}</p>
                    <p className="mt-0.5 text-base font-semibold tracking-tight text-foreground">{f.focusKo}</p>
                    <p className="mt-0.5 font-label text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                      Professor
                    </p>
                  </div>
                </div>
                <p className="font-label mt-3 text-[10px] tracking-[0.2em] text-primary/55 uppercase transition-colors duration-200 group-hover:text-primary">
                  Click
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/20 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="faculty-modal-title"
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-foreground bg-background duration-300 animate-in fade-in slide-in-from-bottom-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center border border-foreground bg-card text-foreground transition-colors hover:bg-foreground hover:text-background"
              aria-label="닫기"
            >
              <X className="size-4" />
            </button>

            <div className="grid gap-0 sm:grid-cols-[10.5rem_1fr]">
              <div className="hidden bg-[#c5d0dc] sm:block">
                <img src={active.image} alt="" className="h-full min-h-[14rem] w-full object-cover object-center" />
              </div>
              <div className="px-6 py-6 pr-14 sm:px-8">
                <p className="text-sm font-semibold text-primary">{active.role}</p>
                <h3 id="faculty-modal-title" className="font-display mt-3 text-3xl text-foreground">
                  {active.name}
                </h3>
                <div className="mt-4 inline-flex items-center gap-3 border border-foreground bg-foreground px-3 py-2 text-background">
                  <span className="font-label text-[11px] tracking-[0.16em] text-background uppercase">{active.focusEn}</span>
                  <span className="h-3 w-px bg-background/40" aria-hidden />
                  <span className="text-base font-semibold text-background">{active.focusKo}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-foreground px-2.5 py-1 font-label text-[11px] tracking-[0.12em] text-foreground uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto border-t border-foreground/10 px-6 py-7 sm:px-8">
              <div className="grid gap-8 sm:grid-cols-2">
                {active.blocks.map((block) => (
                  <div key={block.title}>
                    <p className="text-sm font-bold text-primary">{block.title}</p>
                    <ul className="mt-3 space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="border-l border-primary/25 pl-3 text-[15px] leading-relaxed text-foreground/90">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${active.email}`}
              className="flex items-center justify-between border-t border-foreground/10 bg-card/70 px-6 py-4 transition-colors hover:bg-secondary sm:px-8"
            >
              <span className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" />
                <span className="text-base font-medium text-foreground">{active.email}</span>
              </span>
              <span className="text-sm font-semibold text-muted-foreground">문의</span>
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
