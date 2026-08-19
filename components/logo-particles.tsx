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

const LOGO_SRC = "/brand/hknu-symbol.png"

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

function sampleFromImage(img: HTMLImageElement, target: number) {
  const scale = target / Math.max(img.width, img.height)
  const width = Math.max(1, Math.round(img.width * scale))
  const height = Math.max(1, Math.round(img.height * scale))
  const c = document.createElement("canvas")
  c.width = width
  c.height = height
  const ctx = c.getContext("2d")
  if (!ctx) return [] as Particle[]
  ctx.drawImage(img, 0, 0, width, height)
  const data = ctx.getImageData(0, 0, width, height).data
  const step = width > 380 ? 3 : 2
  const out: Particle[] = []
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const i = (y * width + x) * 4
      if (data[i + 3] < 90) continue
      out.push({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        hx: x - width / 2,
        hy: y - height / 2,
        r: data[i],
        g: data[i + 1],
        b: data[i + 2],
        size: 1.35 + Math.random() * 1.15,
        seed: Math.random() * Math.PI * 2,
      })
    }
  }
  return out
}

export function LogoParticles() {
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
    let logo: HTMLImageElement | null = null
    let raf = 0
    let t0 = performance.now()
    let dead = false

    const scatter = (burst = false) => {
      const spread = Math.min(w, h) * (burst ? 0.55 : 0.42)
      for (const p of particles) {
        const a = Math.random() * Math.PI * 2
        const d = Math.random() * spread
        p.x = Math.cos(a) * d
        p.y = Math.sin(a) * d
        p.vx = (Math.random() - 0.5) * (burst ? 7 : 3)
        p.vy = (Math.random() - 0.5) * (burst ? 7 : 3)
      }
    }

    const rebuild = () => {
      if (!logo) return
      const rect = wrapEl.getBoundingClientRect()
      w = rect.width
      h = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = sampleFromImage(logo, Math.min(w, h) * 0.78)
      scatter(true)
      t0 = performance.now()
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left - w / 2
      mouse.y = e.clientY - rect.top - h / 2
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
    }
    const onDown = () => scatter(true)

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const elapsed = (now - t0) / 1000
      const cycle = elapsed % 7.4
      const forming = cycle < 4.8
      const exploding = cycle >= 5.4

      ctx.clearRect(0, 0, w, h)
      ctx.save()
      ctx.translate(w / 2, h / 2)

      for (const p of particles) {
        if (reduced) {
          p.x = p.hx
          p.y = p.hy
        } else if (forming) {
          p.vx += (p.hx - p.x) * 0.085
          p.vy += (p.hy - p.y) * 0.085
          p.vx *= 0.78
          p.vy *= 0.78
          p.x += p.vx + Math.sin(now * 0.002 + p.seed) * 0.12
          p.y += p.vy + Math.cos(now * 0.0018 + p.seed) * 0.12
        } else if (exploding) {
          const a = Math.atan2(p.hy, p.hx) + p.seed * 0.15
          p.vx += Math.cos(a) * 0.55
          p.vy += Math.sin(a) * 0.55
          p.vx *= 0.96
          p.vy *= 0.96
          p.x += p.vx
          p.y += p.vy
        } else {
          p.vx *= 0.94
          p.vy *= 0.94
          p.x += p.vx + Math.sin(now * 0.003 + p.seed) * 0.35
          p.y += p.vy + Math.cos(now * 0.0026 + p.seed) * 0.35
        }

        if (mouse.active && !reduced) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d2 = dx * dx + dy * dy
          const radius = 118
          if (d2 < radius * radius && d2 > 0.01) {
            const d = Math.sqrt(d2)
            const f = ((radius - d) / radius) * 2.4
            p.vx += (dx / d) * f
            p.vy += (dy / d) * f
          }
        }

        ctx.fillStyle = `rgb(${p.r},${p.g},${p.b})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
    }

    const ro = new ResizeObserver(rebuild)
    loadImage(LOGO_SRC)
      .then((img) => {
        if (dead) return
        logo = img
        rebuild()
        raf = requestAnimationFrame(tick)
        ro.observe(wrapEl)
      })
      .catch(() => {})

    canvas.addEventListener("pointermove", onMove)
    canvas.addEventListener("pointerleave", onLeave)
    canvas.addEventListener("pointerdown", onDown)

    return () => {
      dead = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      canvas.removeEventListener("pointermove", onMove)
      canvas.removeEventListener("pointerleave", onLeave)
      canvas.removeEventListener("pointerdown", onDown)
    }
  }, [])

  return (
    <div ref={wrap} className="relative h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full cursor-pointer" aria-hidden="true" />
    </div>
  )
}
