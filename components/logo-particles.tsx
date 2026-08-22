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
        size: 1.25 + Math.random() * 1.2,
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
    let ox = 0
    let oy = 0
    let particles: Particle[] = []
    let logo: HTMLImageElement | null = null
    let raf = 0
    let t0 = performance.now()
    let dead = false

    const scatter = (burst = false) => {
      for (const p of particles) {
        const a = Math.random() * Math.PI * 2
        const d = Math.random()
        p.x = Math.cos(a) * d * w * (burst ? 0.62 : 0.48)
        p.y = Math.sin(a) * d * h * (burst ? 0.55 : 0.42)
        p.vx = (Math.random() - 0.5) * (burst ? 2.16 : 0.99)
        p.vy = (Math.random() - 0.5) * (burst ? 2.16 : 0.99)
      }
    }

    const rebuild = () => {
      if (!logo) return
      const rect = wrapEl.getBoundingClientRect()
      w = rect.width
      h = rect.height
      ox = w * (w < 720 ? 0.76 : 0.72)
      oy = h * (w < 720 ? 0.66 : 0.52)
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = sampleFromImage(logo, w < 720 ? w * 0.3 : Math.min(w, h) * 0.58)
      scatter(true)
      t0 = performance.now()
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) {
        mouse.active = false
        return
      }
      mouse.x = e.clientX - rect.left - ox
      mouse.y = e.clientY - rect.top - oy
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
    }

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const elapsed = (now - t0) / 1000
      const cycle = elapsed % 21.85
      const forming = cycle < 16.02
      const exploding = cycle >= 18.22

      ctx.clearRect(0, 0, w, h)
      ctx.save()
      ctx.translate(ox, oy)

      for (const p of particles) {
        if (reduced) {
          p.x = p.hx
          p.y = p.hy
        } else if (forming) {
          p.vx += (p.hx - p.x) * 0.0196
          p.vy += (p.hy - p.y) * 0.0196
          p.vx *= 0.91
          p.vy *= 0.91
          p.x += p.vx + Math.sin(now * 0.0008 + p.seed) * 0.09
          p.y += p.vy + Math.cos(now * 0.00072 + p.seed) * 0.09
        } else if (exploding) {
          const a = Math.atan2(p.hy, p.hx) + p.seed * 0.18
          p.vx += Math.cos(a) * 0.144
          p.vy += Math.sin(a) * 0.144
          p.vx *= 0.987
          p.vy *= 0.987
          p.x += p.vx
          p.y += p.vy
        } else {
          p.vx *= 0.973
          p.vy *= 0.973
          p.x += p.vx + Math.sin(now * 0.00126 + p.seed) * 0.2
          p.y += p.vy + Math.cos(now * 0.00108 + p.seed) * 0.2
        }

        if (mouse.active && !reduced) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d2 = dx * dx + dy * dy
          const radius = 150
          if (d2 < radius * radius && d2 > 0.01) {
            const d = Math.sqrt(d2)
            const f = ((radius - d) / radius) * 1.04
            p.vx += (dx / d) * f
            p.vy += (dy / d) * f
          }
        }

        const absX = ox + p.x
        const leftFade =
          w < 720
            ? Math.min(1, Math.max(0.08, (absX - w * 0.48) / (w * 0.2)))
            : Math.min(1, Math.max(0.16, (absX - w * 0.08) / (w * 0.38)))
        ctx.globalAlpha = leftFade
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

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerleave", onLeave)

    return () => {
      dead = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <div ref={wrap} className="absolute inset-0">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  )
}
