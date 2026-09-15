"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealOptions {
  y?: number
  duration?: number
  stagger?: number
  /** CSS selector (relative to the container) for elements to stagger-reveal. Defaults to "[data-reveal]". */
  selector?: string
}

/**
 * Reveals a section on scroll: the container's [data-reveal] children fade
 * and rise into place once, the first time the section enters the viewport.
 * Uses only transform/opacity (hardware-accelerated) and fires once so it
 * never slows repeat scrolling.
 */
export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>(options.selector ?? "[data-reveal]")
    if (targets.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: options.y ?? 28 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.7,
          stagger: options.stagger ?? 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        },
      )
    }, container)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
