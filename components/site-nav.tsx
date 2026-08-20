"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BrandMark } from "@/components/brand-mark"

const links = [
  { label: "소개", href: "#intro" },
  { label: "과정", href: "#path" },
  { label: "작품", href: "#works" },
  { label: "교수진", href: "#faculty" },
  { label: "모집요강", href: "#admissions" },
  { label: "문의", href: "#apply" },
]

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="font-label relative block h-[22px] overflow-hidden text-[15px] font-semibold text-foreground"
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(.25,.74,.22,.99)] group-hover/nav:-translate-y-full">
        {label}
      </span>
      <span className="absolute inset-x-0 top-full block text-foreground/70 transition-transform duration-500 ease-[cubic-bezier(.25,.74,.22,.99)] group-hover/nav:-translate-y-full">
        {label}
      </span>
    </a>
  )
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-foreground/15 bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#" className="flex items-center gap-3">
          <BrandMark />
          <span className="hidden text-sm font-medium text-foreground sm:inline">실용음악학전공</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <div key={l.href} className="group/nav">
              <NavLink href={l.href} label={l.label} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center text-foreground md:hidden"
          aria-label="메뉴 열기"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-foreground/15 bg-background/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-label border-b border-foreground/10 py-4 text-xl font-semibold text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
