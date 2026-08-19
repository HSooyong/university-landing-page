export type Work = {
  src: string
  title?: string
}

/** 작품만 한 줄기로. 교수·학생 이름, 재학/졸업 구분은 넣지 않는다. */
export const works: Work[] = Array.from({ length: 36 }, (_, i) => ({
  src: `/works/${String(i + 1).padStart(2, "0")}.png`,
}))
