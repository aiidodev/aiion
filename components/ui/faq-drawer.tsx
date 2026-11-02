"use client"

import { useEffect, useRef, type CSSProperties } from "react"
import { questions, WA_DEFAULT } from "@/lib/site"

export type FaqDrawerOptions = {
  label?: string
  title?: string
  lead?: string
  drawer?: string
  count?: number
  open?: "none" | "1" | "2" | "3" | "4" | "5" | "6" | "7"
  single?: boolean
  askNote?: string
  askLabel?: string
  askHref?: string
  finish?: "auto" | "aluminium" | "graphite"
}

const TABS = ["Entrega", "Camadas", "IA", "Valor", "WhatsApp", "Atenção"]

const CARDS = Object.freeze(
  questions.map((item, index) =>
    Object.freeze({
      id: `q${index + 1}`,
      tab: TABS[index] ?? String(index + 1),
      q: item.q,
      a: item.a,
    }),
  ),
)

const FINISHES = ["auto", "aluminium", "graphite"] as const
const OPEN_AT = ["none", "1", "2", "3", "4", "5", "6", "7"] as const

const DEFAULTS: Required<FaqDrawerOptions> = {
  label: "Perguntas",
  title: "Antes de contratar.",
  lead: "A objeção mais comum, respondida antes da conversa.",
  drawer: "aiion · D360",
  count: CARDS.length,
  open: "none",
  single: true,
  askNote: "Ainda ficou uma dúvida? Quem constrói responde.",
  askLabel: "Falar no WhatsApp",
  askHref: WA_DEFAULT,
  finish: "graphite",
}

const isDark = (host: Element, mq: MediaQueryList | null): boolean => {
  if (host.closest(".dark, [data-theme='dark']")) return true
  if (host.closest(".light, [data-theme='light']")) return false
  return !!mq?.matches
}

const TAB_STATIONS = [0.04, 0.37, 0.7]
const tabStation = (i: number) => TAB_STATIONS[i % TAB_STATIONS.length]
const depthOf = (i: number, n: number) => (n <= 1 ? 0 : (n - 1 - i) / (n - 1))
const cardNumber = (i: number) => `Q.${String(i + 1).padStart(2, "0")}`

const safeHref = (h: unknown, fallback = DEFAULTS.askHref) => {
  const s = String(h ?? "").trim()
  return /^(https?:\/\/|mailto:|tel:|\/|#|\.\/|\.\.\/)/i.test(s) ? s : fallback
}

const esc = (s: unknown) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string)

function normalise(opts: FaqDrawerOptions = {}, prev: Required<FaqDrawerOptions> = DEFAULTS): Required<FaqDrawerOptions> {
  const o = { ...prev, ...opts }
  for (const k of ["label", "title", "lead", "drawer", "askNote", "askLabel"] as const) o[k] = String(o[k] ?? "")
  o.askHref = safeHref(o.askHref)
  o.count = Math.min(CARDS.length, Math.max(1, Math.round(Number(o.count)) || DEFAULTS.count))
  o.open = OPEN_AT.includes(String(o.open) as (typeof OPEN_AT)[number]) ? (String(o.open) as Required<FaqDrawerOptions>["open"]) : DEFAULTS.open
  if (o.open !== "none" && Number(o.open) > o.count) o.open = "none"
  o.single = o.single !== false
  if (!FINISHES.includes(o.finish as (typeof FINISHES)[number])) o.finish = "auto"
  return o
}

function resolveFinish(own: string, around: string | undefined, prefersDark: boolean, tone: string | undefined) {
  if (own === "aluminium" || own === "graphite") return own
  if (around === "aluminium" || around === "graphite") return around
  if (tone === "light" || tone === "dark") return tone === "dark" ? "graphite" : "aluminium"
  return prefersDark ? "graphite" : "aluminium"
}

let seq = 0

function mount(host: HTMLElement, opts: FaqDrawerOptions = {}) {
  let o = normalise(opts)
  const uid = `fq${(seq += 1)}`
  const root = document.createElement("section")
  root.className = "fq"
  root.dataset.block = "faq-drawer"
  root.setAttribute("aria-labelledby", `${uid}-title`)
  host.append(root)

  const render = () => {
    const n = o.count
    const cards = CARDS.slice(0, n)
      .map(
        (c, i) => `<details class="fq-card"${o.single ? ` name="${uid}"` : ""}${o.open === String(i + 1) ? " open" : ""} style="--k: ${i}; --depth: ${depthOf(i, n).toFixed(3)}; --tab-at: ${tabStation(i)}">
      <summary class="fq-edge">
        <span class="fq-tab" aria-hidden="true">${esc(c.tab)}</span>
        <span class="fq-no" aria-hidden="true">${cardNumber(i)}</span>
        <span class="fq-q">${esc(c.q)}</span>
        <span class="fq-mark" aria-hidden="true"></span>
      </summary>
      <div class="fq-face"><p class="fq-a">${esc(c.a)}</p><p class="fq-filed" aria-hidden="true">${esc(c.tab)} · ${cardNumber(i)}</p></div>
    </details>`,
      )
      .join("")
    const external = /^https?:/i.test(o.askHref)
    root.innerHTML = `<div class="fq-wrap">
  <header class="fq-head">
    <p class="fq-label"></p>
    <h2 class="fq-title" id="${uid}-title"></h2>
    <p class="fq-lead"></p>
  </header>
  <div class="fq-cabinet">
    <div class="fq-drawer">
      <div class="fq-tray">${cards}</div>
      <div class="fq-front" aria-hidden="true">
        <span class="fq-holder"><span class="fq-holder-card"></span></span>
        <span class="fq-pull"></span>
      </div>
    </div>
    <div class="fq-ask">
      <p class="fq-note"></p>
      <a class="fq-key" href="${esc(o.askHref)}"${external ? ' target="_blank" rel="noreferrer"' : ""}></a>
    </div>
  </div>
</div>`
    root.querySelector(".fq-label")!.textContent = o.label
    root.querySelector(".fq-title")!.textContent = o.title
    root.querySelector(".fq-lead")!.textContent = o.lead
    root.querySelector(".fq-holder-card")!.textContent = o.drawer
    root.querySelector(".fq-note")!.textContent = o.askNote
    root.querySelector(".fq-key")!.textContent = o.askLabel
  }

  const dark = typeof matchMedia === "function" ? matchMedia("(prefers-color-scheme: dark)") : null
  const applyFinish = () => {
    const f = resolveFinish(
      o.finish,
      (host.closest("[data-finish]") as HTMLElement | null)?.dataset.finish,
      isDark(host, dark),
      (host.closest("[data-tone='light'], [data-tone='dark']") as HTMLElement | null)?.dataset.tone,
    )
    if (root.dataset.finish !== f) root.dataset.finish = f
  }
  const finishObs = new MutationObserver(applyFinish)
  finishObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-finish", "class", "data-theme"] })
  dark?.addEventListener("change", applyFinish)

  render()
  applyFinish()

  return {
    root,
    destroy() {
      finishObs.disconnect()
      dark?.removeEventListener("change", applyFinish)
      root.remove()
    },
  }
}

export type FaqDrawerProps = FaqDrawerOptions & { className?: string; style?: CSSProperties }

export function FaqDrawer({ className, style, ...options }: FaqDrawerProps) {
  const host = useRef<HTMLDivElement>(null)
  const key = JSON.stringify(options)

  useEffect(() => {
    if (!host.current) return
    const block = mount(host.current, JSON.parse(key) as FaqDrawerOptions)
    return () => block.destroy()
  }, [key])

  return (
    <>
      <style>{CSS}</style>
      <div ref={host} className={className} style={{ width: "100%", ...style }} />
    </>
  )
}

export default FaqDrawer

const CSS = `
.fq {
  color-scheme: dark;
  --tui-desk: #070708;
  --tui-face: #1b1c1e;
  --tui-face-hi: #28292c;
  --tui-face-lo: #141516;
  --tui-well: #121315;
  --tui-skirt: #09090a;
  --tui-ink: #f4f1ea;
  --tui-ink-2: #f4f1ea;
  --tui-rule: rgb(244 241 234 / 0.14);
  --tui-cap: #f4f1ea;
  --tui-cap-hi: #ffffff;
  --tui-cap-skirt: #9c978e;
  --tui-cap-ink: #070708;
  --tui-cap-hl: rgb(255 255 255 / 0.8);
  --tui-hl: rgb(255 255 255 / 0.11);
  --tui-well-fill: linear-gradient(to bottom, #070808, var(--tui-well) 45%, #17181a);
  --tui-sh: 0 0 0;
  --tui-sh-a: 0.55;
  --tui-grain: 0.35;
  --tui-focus: #f4f1ea;
  --tui-ease: cubic-bezier(0.2, 0.7, 0.2, 1);
  --tui-raised:
    inset 0 1px 0 var(--tui-hl),
    0 0 0 1px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 0.35)),
    0 1px 1.5px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.2)),
    0 5px 12px -5px rgb(var(--tui-sh) / var(--tui-sh-a));
  --tui-inset:
    inset 0 3px 3px -2px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 2.6)),
    inset 0 9px 12px -9px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.8)),
    inset 0 0 0 1px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 0.45)),
    inset 0 -1px 0 color-mix(in oklab, var(--tui-hl) 60%, transparent),
    0 1px 0 var(--tui-hl),
    0 -1px 0 rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 0.35));
  --tui-pressed:
    inset 0 5px 5px -4px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 3)),
    inset 4px 0 4px -4px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.4)),
    inset -4px 0 4px -4px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.4)),
    0 -1px 0 rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.3)),
    0 1px 0 var(--tui-hl);
  --tui-noise: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0.28 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  --fq-paper: #f3f0e7;
  --fq-type: #1b1c1e;
  --fq-type-2: #3a3834;
  --fq-rule: rgb(27 28 30 / 0.16);
  --fq-rule-2: rgb(27 28 30 / 0.4);
  --fq-fibre: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.55' numOctaves='3' seed='9' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .45 0 0 0 0 .42 0 0 0 0 .35 0 0 0 .1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E");
  --fq-drop: rgb(0 0 0 / 0.55);
  --fq-sans: var(--font-sans), "Outfit", ui-sans-serif, system-ui, sans-serif;
  --fq-type-face: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  position: relative;
  container: fq / inline-size;
  interpolate-size: allow-keywords;
  background: var(--tui-desk);
  color: var(--tui-ink);
  font: 400 15px/1.55 var(--fq-sans);
  -webkit-font-smoothing: antialiased;
}
.fq[data-finish='aluminium'] {
  color-scheme: light;
  --tui-desk: #d8d7d2;
  --tui-face: #e6e6e2;
  --tui-ink: #1b1c1e;
  --tui-ink-2: #4b4d51;
  --tui-cap: #1e1f21;
  --tui-cap-ink: #efede8;
}
.fq *, .fq *::before, .fq *::after { box-sizing: border-box; }
.fq-head > *, .fq-card p, .fq-ask p { margin: 0; }
.fq-wrap {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.35fr);
  gap: 40px clamp(40px, 6cqi, 104px);
  align-items: start;
  width: min(100% - 2 * clamp(20px, 5cqi, 64px), 1240px);
  margin-inline: auto;
  padding-block: clamp(56px, 8cqi, 120px);
}
.fq-head { position: sticky; top: calc(var(--nav-h, 76px) + 16px); padding-top: 12px; }
.fq-head .fq-label {
  margin-bottom: 16px;
  font: 700 11px/1.2 var(--fq-sans);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--tui-ink);
}
.fq .fq-title {
  margin: 0;
  font-family: var(--font-display), "Syne", sans-serif;
  font-weight: 700;
  font-size: clamp(32px, 4cqi, 52px);
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: #f4f1ea;
  text-wrap: balance;
}
.fq-head .fq-lead { margin-top: 20px; max-width: 36ch; font-size: clamp(15px, 1.3cqi, 17px); line-height: 1.5; color: #f4f1ea; text-wrap: pretty; }
.fq-drawer {
  position: relative;
  isolation: isolate;
  padding: 12px 12px 0;
  border-radius: 14px;
  background: var(--tui-face);
  box-shadow: var(--tui-raised);
}
.fq-drawer::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background: var(--tui-noise), linear-gradient(170deg, rgb(255 255 255 / 0.06), transparent 40%);
  opacity: var(--tui-grain);
  pointer-events: none;
}
.fq-tray {
  display: grid;
  padding: 40px 12px 16px;
  border-radius: 9px 9px 4px 4px;
  background: var(--tui-well-fill) var(--tui-well);
  box-shadow: var(--tui-inset);
}
.fq-card {
  --shade: calc(var(--depth, 0) * 0.11);
  position: relative;
  margin-inline: calc(var(--depth, 0) * 5px);
  border-radius: 4px 4px 1px 1px;
  background:
    linear-gradient(rgb(40 36 26 / var(--shade)), rgb(40 36 26 / var(--shade))),
    var(--fq-fibre),
    var(--fq-paper);
  color: var(--fq-type);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.95),
    inset 0 2px 0 rgb(0 0 0 / 0.05),
    0 -1px 0 rgb(0 0 0 / 0.1),
    0 -7px 10px -5px var(--fq-drop);
  transition: transform 220ms var(--tui-ease), box-shadow 220ms var(--tui-ease);
}
.fq-card:first-child { box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.95), 0 -1px 0 rgb(0 0 0 / 0.08); }
.fq-card:not([open]):hover { transform: translateY(-3px); }
.fq-card[open] {
  z-index: 2;
  margin-top: 9px;
  transform: translateY(-12px);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.95),
    0 -5px 9px -5px var(--fq-drop),
    0 22px 30px -16px var(--fq-drop),
    0 2px 3px rgb(0 0 0 / 0.12);
}
.fq-edge {
  display: grid;
  grid-template-columns: 5.2ch minmax(0, 1fr) auto;
  align-items: baseline;
  column-gap: 12px;
  padding: 16px 18px 22px;
  list-style: none;
  cursor: pointer;
  font: 400 15px/1.45 var(--fq-type-face);
  color: var(--fq-type);
  border-radius: inherit;
}
.fq-edge::-webkit-details-marker { display: none; }
.fq-edge::marker { content: ""; }
.fq-edge:focus-visible { outline: 2px solid var(--fq-type); outline-offset: -5px; }
.fq-no { font-size: 11.5px; letter-spacing: 0.04em; color: var(--fq-type-2); }
.fq-q { text-wrap: pretty; }
.fq-mark { width: 12px; height: 12px; align-self: center; position: relative; }
.fq-mark::before, .fq-mark::after { content: ""; position: absolute; left: 1px; right: 1px; top: 5.25px; height: 1.5px; background: var(--fq-type-2); }
.fq-mark::after { transform: rotate(90deg); transition: transform 220ms var(--tui-ease); }
.fq-card[open] .fq-mark::after { transform: rotate(0deg); }
.fq-tab {
  position: absolute;
  bottom: 100%;
  left: calc(var(--tab-at, 0) * 100%);
  height: 19px;
  padding: 3px 11px 0;
  border-radius: 5px 5px 0 0;
  background:
    linear-gradient(rgb(40 36 26 / var(--shade)), rgb(40 36 26 / var(--shade))),
    var(--fq-fibre),
    var(--fq-paper);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.95), 0 -4px 7px -4px var(--fq-drop);
  font: 400 10.5px/16px var(--fq-type-face);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fq-type-2);
  white-space: nowrap;
  pointer-events: none;
}
.fq-card::details-content {
  block-size: 0;
  overflow: clip;
  transition: block-size 320ms var(--tui-ease), content-visibility 320ms allow-discrete;
}
.fq-card[open]::details-content { block-size: auto; }
.fq-face {
  margin: -8px 18px 0;
  padding: 16px 0 22px calc(5.2ch + 12px);
  border-top: 3px double var(--fq-rule-2);
  font: 400 14px/1.55 var(--fq-sans);
  color: var(--fq-type);
  background: repeating-linear-gradient(to bottom, transparent 0 25px, var(--fq-rule) 25px 26px) 0 20px / 100% calc(100% - 42px) no-repeat;
}
.fq-a { max-width: 62ch; color: #1b1c1e; }
.fq-filed { margin-top: 18px; font-size: 11px; letter-spacing: 0.06em; color: var(--fq-type-2); text-align: right; }
.fq-front {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 10px;
  margin: 0 -12px;
  padding: 16px 0 18px;
  border-radius: 0 0 14px 14px;
  background: linear-gradient(to bottom, color-mix(in oklab, var(--tui-face-hi) 70%, var(--tui-face)), var(--tui-face));
  box-shadow: inset 0 1px 0 var(--tui-hl), inset 0 2px 0 rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 0.6)), 0 -1px 0 rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 0.9));
}
.fq-holder {
  display: block;
  padding: 3px;
  border-radius: 3px;
  background: linear-gradient(var(--tui-face-lo), var(--tui-face-hi));
  box-shadow: 0 0 0 1px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.2)), 0 1px 0 var(--tui-hl), inset 0 1px 1px rgb(0 0 0 / 0.25);
}
.fq-holder-card {
  display: block;
  min-width: 132px;
  padding: 3px 12px 2px;
  border-radius: 1px;
  background: var(--fq-fibre), var(--fq-paper);
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.25);
  font: 400 11px/16px var(--fq-type-face);
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  color: var(--fq-type);
}
.fq-pull {
  display: block;
  width: 108px;
  height: 22px;
  border-radius: 3px 3px 54px 54px / 3px 3px 22px 22px;
  background: var(--tui-well-fill) var(--tui-well);
  box-shadow: var(--tui-inset);
}
.fq-ask {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px 24px;
  margin-top: 28px;
  padding-inline: 4px;
}
.fq-note { font-size: 15px; line-height: 1.5; color: #f4f1ea; max-width: 44ch; }
.fq-key {
  display: inline-flex;
  align-items: center;
  height: 44px;
  padding: 0 22px;
  border-radius: 9px;
  font: 700 14px/1 var(--fq-sans);
  color: #070708;
  text-decoration: none;
  background: #f4f1ea;
  box-shadow: 0 1px 0 #ffffff, 0 8px 16px -8px rgb(0 0 0 / 0.6);
}
.fq-key:focus-visible { outline: 2px solid #f4f1ea; outline-offset: 3px; }
@container fq (max-width: 959px) {
  .fq-wrap { grid-template-columns: minmax(0, 1fr); }
  .fq-head { position: static; padding-top: 0; max-width: 640px; }
}
@container fq (max-width: 559px) {
  .fq-drawer { padding: 8px 8px 0; }
  .fq-tray { padding: 34px 6px 12px; }
  .fq-card { margin-inline: calc(var(--depth, 0) * 3px); }
  .fq-edge { grid-template-columns: minmax(0, 1fr) auto; padding: 14px 14px 20px; font-size: 14px; }
  .fq-no { display: none; }
  .fq-tab { font-size: 9.5px; padding-inline: 8px; }
  .fq-face { margin-inline: 14px; padding-left: 0; font-size: 15px; }
  .fq-front { margin-inline: -8px; }
  .fq-ask { flex-direction: column; align-items: stretch; }
  .fq-key { justify-content: center; }
}
@media (prefers-reduced-motion: reduce) {
  .fq-card, .fq-mark::after, .fq-key, .fq-card::details-content { transition: none; }
  .fq-card:not([open]):hover { transform: none; }
}
`
