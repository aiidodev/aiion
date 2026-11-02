"use client"

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Full-viewport hero. While it is active the page stays pinned and wheel or
 * touch input scrubs the video. Past the last frame the page scrolls on, and
 * scrolling back to the top locks the video again.
 */

export interface MetroHeroProps {
  videoSrc?: string
  kicker?: string
  title?: string
  /** Sits beside the last line of the title, with the note under the name. */
  mark?: { name: string; text: string }
  scrollHint?: string
  tagline?: string
  actions?: ReactNode
  signature?: { name: string; url: string } | false
  /** Input distance, in px, needed to scrub the full video. */
  scrubDistance?: number
  className?: string
  style?: CSSProperties
}

const DEFAULT_VIDEO =
  "https://cdn.21st.dev/assets/mirror/21/21a77eac28eacbb7e142016eefeaa0b4a766619e51113629a3bc6df6af066c0f.mp4"
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
const DISPLAY = `var(--font-display), ${SANS}`

const COL_BG = "#070708"
const COL_TEXT = "#f4f1ea"

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export default function MetroHero({
  videoSrc = DEFAULT_VIDEO,
  kicker,
  title = "Marca, sistema\ne IA.",
  mark,
  scrollHint = "ROLE",
  tagline,
  actions,
  signature = false,
  scrubDistance = 2800,
  className,
  style,
}: MetroHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const clip = videoRef.current
    const section = sectionRef.current
    if (!clip || !section) return
    const video: HTMLVideoElement = clip

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false

    let duration = 0
    let rafId = 0
    let targetProgress = 0
    let currentProgress = 0
    let hasStartedScrolling = false
    let isSeeking = false
    let pendingTime: number | null = null
    let locked = false
    let lockedScrollY = 0
    let touchStartY = 0
    let armedExit = false
    let distance = Math.min(scrubDistance, Math.max(520, window.innerHeight * 0.9))

    const onResize = () => {
      distance = Math.min(scrubDistance, Math.max(520, window.innerHeight * 0.9))
    }
    window.addEventListener("resize", onResize)

    const onLoadedData = () => {
      duration = video.duration || 0
      setReady(true)
      if (reduceMotion && duration > 0) video.currentTime = duration * 0.92
    }
    video.addEventListener("loadeddata", onLoadedData)
    if (video.readyState >= 2) onLoadedData()

    const kickstartLoad = () => {
      const pending = video.play()
      if (pending && typeof pending.then === "function") {
        pending.then(() => video.pause()).catch(() => {})
      } else {
        video.pause()
      }
    }
    kickstartLoad()

    const onSeeked = () => {
      isSeeking = false
      if (pendingTime !== null) {
        const next = pendingTime
        pendingTime = null
        isSeeking = true
        video.currentTime = next
      }
    }
    video.addEventListener("seeked", onSeeked)

    function seekTo(time: number) {
      if (!Number.isFinite(time)) return
      if (Math.abs(video.currentTime - time) < 0.05) {
        pendingTime = null
        return
      }
      if (isSeeking) {
        pendingTime = time
        return
      }
      isSeeking = true
      const before = video.currentTime
      video.currentTime = time
      if (!video.seeking && Math.abs(video.currentTime - before) < 0.001) {
        isSeeking = false
      }
    }

    function engageLock() {
      if (locked || reduceMotion) return
      locked = true
      lockedScrollY = window.scrollY
      const body = document.body.style
      body.position = "fixed"
      body.top = `-${lockedScrollY}px`
      body.left = "0"
      body.right = "0"
      body.width = "100%"
      body.height = "100%"
      body.overscrollBehavior = "none"
    }

    function releaseLock(y = lockedScrollY) {
      if (!locked) return
      locked = false
      const body = document.body.style
      body.position = ""
      body.top = ""
      body.left = ""
      body.right = ""
      body.width = ""
      body.height = ""
      body.overscrollBehavior = ""
      window.scrollTo(0, y)
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }

    if (reduceMotion) {
      if (taglineRef.current) {
        taglineRef.current.style.opacity = "1"
        taglineRef.current.style.filter = "none"
        taglineRef.current.style.transform = "none"
      }
      if (hintRef.current) hintRef.current.style.opacity = "0"
    }

    const blocksLock = () => {
      const hash = window.location.hash
      return Boolean(hash && hash !== "#topo")
    }
    if (!reduceMotion && !blocksLock()) engageLock()

    const honorHash = () => {
      if (!blocksLock()) return false
      const target = document.querySelector(window.location.hash)
      if (!(target instanceof HTMLElement)) return false
      if (locked) releaseLock(0)
      const top = target.getBoundingClientRect().top + window.scrollY
      window.scrollTo(0, Math.max(0, top - 8))
      return true
    }
    window.addEventListener("hashchange", honorHash)
    let hashTries = 0
    const watchHash = window.setInterval(() => {
      hashTries += 1
      if (honorHash() || hashTries > 24) window.clearInterval(watchHash)
    }, 50)

    function consume(deltaY: number) {
      if (reduceMotion || deltaY === 0) return false
      if (!locked) {
        if (window.scrollY <= 1 && deltaY < 0) engageLock()
        else return false
      }
      if (deltaY < 0) armedExit = false
      const next = targetProgress + deltaY / distance
      if (deltaY > 0 && next >= 1) {
        targetProgress = 1
        hasStartedScrolling = true
        armedExit = true
        if (currentProgress > 0.92) releaseLock(Math.max(96, window.innerHeight * 0.18))
        return true
      }
      targetProgress = clamp(next, 0, 1)
      if (targetProgress > 0.001) hasStartedScrolling = true
      return true
    }

    const onWheel = (event: WheelEvent) => {
      const line = event.deltaMode === 1 ? 32 : event.deltaMode === 2 ? window.innerHeight : 1
      if (consume(event.deltaY * line)) event.preventDefault()
    }

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0
    }
    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY ?? touchStartY
      const deltaY = touchStartY - y
      touchStartY = y
      if (consume(deltaY)) event.preventDefault()
    }

    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest("input, textarea, select, a, button, [contenteditable='true']")) return
      const down = event.key === "ArrowDown" || event.key === "PageDown" || event.key === " "
      const up = event.key === "ArrowUp" || event.key === "PageUp"
      if (!down && !up) return
      const step = event.key === "PageDown" || event.key === "PageUp" ? 900 : event.key === " " ? 480 : 90
      if (consume(down ? step : -step)) event.preventDefault()
    }

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a")
      if (!link) return
      const href = link.getAttribute("href") || ""
      if (href.startsWith("#") || href.startsWith("/#")) releaseLock()
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("keydown", onKey)
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })
    section.addEventListener("touchstart", onTouchStart, { passive: true, capture: true })
    section.addEventListener("touchmove", onTouchMove, { passive: false, capture: true })
    document.addEventListener("click", onClick)

    function frame() {
      currentProgress += (targetProgress - currentProgress) * 0.18

      if (duration > 0) seekTo(currentProgress * duration)

      const scale = 1 + currentProgress * 0.06
      video.style.transform = `scale(${scale})`

      if (titleRef.current) {
        const fade = 1 - clamp(currentProgress / 0.35, 0, 1)
        titleRef.current.style.opacity = String(fade)
        titleRef.current.style.transform = `translateY(${(1 - fade) * -24}px) scale(${0.96 + fade * 0.04})`
        titleRef.current.style.filter = `blur(${(1 - fade) * 10}px)`
      }
      if (hintRef.current) hintRef.current.style.opacity = hasStartedScrolling ? "0" : "1"
      if (taglineRef.current) {
        const fade = clamp((currentProgress - 0.68) / 0.14, 0, 1)
        taglineRef.current.style.opacity = String(fade)
        taglineRef.current.style.transform = `translateY(${(1 - fade) * 20}px) scale(${0.97 + fade * 0.03})`
        taglineRef.current.style.filter = "none"
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`
      }
      if (armedExit && currentProgress > 0.92) {
        armedExit = false
        releaseLock(Math.max(96, window.innerHeight * 0.18))
      }

      rafId = requestAnimationFrame(frame)
    }

    if (!reduceMotion) rafId = requestAnimationFrame(frame)

    return () => {
      video.removeEventListener("loadeddata", onLoadedData)
      video.removeEventListener("seeked", onSeeked)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      section.removeEventListener("touchstart", onTouchStart, true)
      section.removeEventListener("touchmove", onTouchMove, true)
      document.removeEventListener("click", onClick)
      window.removeEventListener("hashchange", honorHash)
      window.clearInterval(watchHash)
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(rafId)
      releaseLock()
    }
  }, [scrubDistance])

  return (
    <section
      ref={sectionRef}
      id="topo"
      aria-label={mark ? `${title.replace(/\n/g, " ")} ${mark.name}. ${mark.text}` : title.replace(/\n/g, " ")}
      className={className}
      style={{
        position: "relative",
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
        background: COL_BG,
        touchAction: "pan-y",
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: ready ? 1 : 0,
          transformOrigin: "center center",
          willChange: "transform",
          transition: "opacity 0.6s ease",
          touchAction: "none",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 78% 52% at 50% 46%, rgba(7,7,8,0.82), rgba(7,7,8,0.42) 58%, rgba(7,7,8,0.18) 100%), linear-gradient(180deg, rgba(7,7,8,0.62), rgba(7,7,8,0.28) 24%, rgba(7,7,8,0.34) 70%, rgba(7,7,8,0.78))",
          pointerEvents: "none",
        }}
      />

      <div
        ref={titleRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.1rem",
          padding: "0 6%",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        {kicker ? (
          <span
            style={{
              fontFamily: SANS,
              fontWeight: 500,
              fontSize: "clamp(11px, 1.3vw, 13px)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(244,241,234,0.72)",
            }}
          >
            {kicker}
          </span>
        ) : null}
        <h1
          style={{
            margin: 0,
            fontFamily: DISPLAY,
            fontWeight: 800,
            fontSize: mark ? "clamp(30px, 4.8vw, 76px)" : "clamp(40px, 7vw, 104px)",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            color: "#fff",
            textShadow: "0 2px 18px rgba(0,0,0,0.95), 0 1px 2px rgba(0,0,0,1)",
            whiteSpace: mark ? "normal" : "pre-line",
          }}
        >
          {mark ? (
            <>
              {title
                .split("\n")
                .slice(0, -1)
                .map((line) => (
                  <span key={line} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              <span className="hero-lockup">
                <span>{title.split("\n").at(-1)}</span>
                <span className="hero-mark">
                  <strong>{mark.name}</strong>
                  <span>{mark.text}</span>
                </span>
              </span>
            </>
          ) : (
            title
          )}
        </h1>
      </div>

      {tagline || actions ? (
        <div
          ref={taglineRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.6rem",
            padding: "0 8%",
            textAlign: "center",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          {tagline ? (
            <span
              style={{
                fontFamily: DISPLAY,
                fontWeight: 600,
                fontSize: "clamp(16px, 1.7vw, 22px)",
                lineHeight: 1.35,
                letterSpacing: "0.01em",
                color: "#fff",
                textShadow: "0 2px 18px rgba(0,0,0,0.95), 0 1px 2px rgba(0,0,0,1)",
                maxWidth: "28em",
              }}
            >
              {tagline}
            </span>
          ) : null}
          {actions ? (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.8rem", pointerEvents: "auto" }}>
              {actions}
            </div>
          ) : null}
        </div>
      ) : null}

      <div
        ref={hintRef}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "clamp(28px, 7vh, 56px)",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "rgba(244,241,234,0.75)",
          fontFamily: SANS,
          fontSize: "clamp(10px, 1.4vw, 12px)",
          fontWeight: 600,
          letterSpacing: "0.3em",
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <span>{scrollHint}</span>
        <svg width="14" height="18" viewBox="0 0 14 18" style={{ animation: "metro-hero-bounce 1.6s ease-in-out infinite" }}>
          <style>{`
            @keyframes metro-hero-bounce {
              0%, 100% { transform: translateY(0); opacity: 0.5; }
              50% { transform: translateY(5px); opacity: 1; }
            }
            @media (prefers-reduced-motion: reduce) {
              svg { animation: none !important; }
            }
          `}</style>
          <path
            d="M7 1 L7 17 M2 12 L7 17 L12 12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          background: "rgba(255,255,255,0.12)",
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.95))",
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
      </div>

      {signature ? (
        <span
          style={{
            position: "absolute",
            right: "clamp(12px, 2.5vw, 24px)",
            bottom: "clamp(10px, 2vw, 18px)",
            fontFamily: SANS,
            fontWeight: 500,
            fontSize: "clamp(11px, 1.4vw, 13px)",
            letterSpacing: "0.01em",
            color: "rgba(220,224,232,0.6)",
            zIndex: 2,
          }}
        >
          by{" "}
          <a href={signature.url} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
            {signature.name}
          </a>
        </span>
      ) : null}
    </section>
  )
}
