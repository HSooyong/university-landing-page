"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  hx: number
  hy: number
  r: number
  g: number
  b: number
  size: number
  seed: number
}

const MESSAGES = [
  ["보컬 · 싱어송라이터 · EDM 프로듀서", "Beat Maker · 연주 세션 · 스튜디오 엔지니어"],
  ["당신을 알리는", "소리를 배웁니다"],
]

const HOLD = 11.4
const EXPLODE = 2.88
const CYCLE = HOLD + EXPLODE
const MAX_PARTICLES = 14000

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function colorFor(xNorm: number, seed: number) {
  const navy = [14, 20, 46]
  const ink = [8, 12, 28]
  if (seed > 6.2) return [118, 52, 28]
  const t = Math.min(1, Math.max(0, xNorm * 0.22 + (seed % 1) * 0.06))
  return [lerp(ink[0], navy[0], t), lerp(ink[1], navy[1], t), lerp(ink[2], navy[2], t)]
}

function sampleText(lines: string[], width: number, height: number, fontFamily: string) {
  const dpr = 2
  const c = document.createElement("canvas")
  c.width = Math.max(1, Math.floor(width * dpr))
  c.height = Math.max(1, Math.floor(height * dpr))
  const ctx = c.getContext("2d", { willReadFrequently: true })
  if (!ctx) return [] as Particle[]
  ctx.scale(dpr, dpr)
  ctx.fillStyle = "#000"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"

  const padX = width * 0.08
  let size = Math.min(92, height * 0.22)
  while (size > 22) {
    ctx.font = `700 ${size}px ${fontFamily}`
    const maxW = Math.max(...lines.map((line) => ctx.measureText(line).width))
    const blockH = size * 1.14 * lines.length
    if (maxW <= width - padX * 2 && blockH <= height * 0.72) break
    size -= 1
  }

  ctx.font = `700 ${size}px ${fontFamily}`
  const lineH = size * 1.18
  const blockH = lineH * lines.length
  const startY = (height - blockH) / 2 + size * 0.04

  ctx.clearRect(0, 0, width, height)
  lines.forEach((line, i) => {
    ctx.fillText(line, width / 2, startY + i * lineH)
  })

  const data = ctx.getImageData(0, 0, c.width, c.height).data
  let step = 1
  const collect = (s: number) => {
    const out: Particle[] = []
    for (let y = 0; y < c.height; y += s) {
      for (let x = 0; x < c.width; x += s) {
        const i = (y * c.width + x) * 4
        if (data[i + 3] < 70) continue
        const hx = x / dpr - width / 2
        const hy = y / dpr - height / 2
        const seed = Math.random() * Math.PI * 2
        const [r, g, b] = colorFor(x / c.width, seed)
        const cell = s / dpr
        out.push({
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          hx,
          hy,
          r,
          g,
          b,
          size: cell * (1.12 + Math.random() * 0.18),
          seed,
        })
      }
    }
    return out
  }

  let out = collect(step)
  while (out.length > MAX_PARTICLES && step < 4) {
    step += 1
    out = collect(step)
  }
  return out
}

function retarget(particles: Particle[], homes: Particle[]) {
  const n = homes.length
  if (!n) return
  for (let i = 0; i < particles.length; i++) {
    const src = homes[i % n]
    const extra = i >= n
    particles[i].hx = src.hx + (extra ? (Math.random() - 0.5) * 0.8 : 0)
    particles[i].hy = src.hy + (extra ? (Math.random() - 0.5) * 0.8 : 0)
    particles[i].r = src.r
    particles[i].g = src.g
    particles[i].b = src.b
    particles[i].size = src.size
  }
}

export function TextParticles() {
  const wrap = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapEl = wrap.current
    if (!canvas || !wrapEl) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const mouse = { x: 0, y: 0, active: false }
    let w = 0
    let h = 0
    let particles: Particle[] = []
    let samples: Particle[][] = []
    let msg = 0
    let raf = 0
    let t0 = performance.now()
    let dead = false

    const scatter = (burst = false) => {
      for (const p of particles) {
        const a = Math.random() * Math.PI * 2
        const d = Math.random()
        p.x = Math.cos(a) * d * w * (burst ? 0.58 : 0.46)
        p.y = Math.sin(a) * d * h * (burst ? 0.5 : 0.4)
        p.vx = (Math.random() - 0.5) * (burst ? 1.76 : 0.8)
        p.vy = (Math.random() - 0.5) * (burst ? 1.76 : 0.8)
      }
    }

    const rebuild = () => {
      const rect = wrapEl.getBoundingClientRect()
      w = rect.width
      h = rect.height
      if (w < 8 || h < 8) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const family = getComputedStyle(wrapEl).fontFamily
      samples = MESSAGES.map((lines) => sampleText(lines, w, h, family))
      const pool = Math.max(...samples.map((s) => s.length), 1)
      particles = Array.from({ length: pool }, () => ({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        hx: 0,
        hy: 0,
        r: 14,
        g: 20,
        b: 46,
        size: 1.1,
        seed: Math.random() * Math.PI * 2,
      }))
      msg = 0
      retarget(particles, samples[0] ?? [])
      scatter(true)
      t0 = performance.now()
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) {
        mouse.active = false
        return
      }
      mouse.x = e.clientX - rect.left - w / 2
      mouse.y = e.clientY - rect.top - h / 2
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
    }

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const elapsed = (now - t0) / 1000
      const idx = Math.floor(elapsed / CYCLE) % MESSAGES.length
      const phase = elapsed % CYCLE
      const forming = phase < HOLD

      if (idx !== msg && samples[idx]) {
        msg = idx
        retarget(particles, samples[idx])
      }

      ctx.clearRect(0, 0, w, h)
      ctx.save()
      ctx.translate(w / 2, h / 2)

      for (const p of particles) {
        if (reduced) {
          p.x = p.hx
          p.y = p.hy
        } else if (forming) {
          p.vx += (p.hx - p.x) * 0.0256
          p.vy += (p.hy - p.y) * 0.0256
          p.vx *= 0.91
          p.vy *= 0.91
          p.x += p.vx + Math.sin(now * 0.00072 + p.seed) * 0.096
          p.y += p.vy + Math.cos(now * 0.00064 + p.seed) * 0.096
        } else {
          const a = Math.atan2(p.hy, p.hx) + p.seed * 0.14
          p.vx += Math.cos(a) * 0.144
          p.vy += Math.sin(a) * 0.144
          p.vx *= 0.985
          p.vy *= 0.985
          p.x += p.vx
          p.y += p.vy
        }

        if (mouse.active && !reduced) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d2 = dx * dx + dy * dy
          const radius = 140
          if (d2 < radius * radius && d2 > 0.01) {
            const d = Math.sqrt(d2)
            const f = ((radius - d) / radius) * 0.96
            p.vx += (dx / d) * f
            p.vy += (dy / d) * f
          }
        }

        ctx.fillStyle = `rgb(${p.r | 0},${p.g | 0},${p.b | 0})`
        ctx.fillRect(p.x, p.y, p.size, p.size)
      }

      ctx.restore()
    }

    const start = () => {
      if (dead) return
      rebuild()
      raf = requestAnimationFrame(tick)
    }

    const ro = new ResizeObserver(rebuild)
    const fonts = document.fonts?.ready ?? Promise.resolve()
    fonts.then(start)

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerleave", onLeave)
    ro.observe(wrapEl)

    return () => {
      dead = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <div ref={wrap} className="font-display absolute inset-0">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  )
}
