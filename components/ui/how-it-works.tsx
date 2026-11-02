"use client"

import { cn } from "@/lib/utils"
import { startSteps } from "@/lib/site"
import { Layers, MessageCircle, Search, Users } from "lucide-react"
import type { ReactNode } from "react"

const icons = [
  <Search key="search" className="h-6 w-6" />,
  <MessageCircle key="message" className="h-6 w-6" />,
  <Layers key="layers" className="h-6 w-6" />,
  <Users key="users" className="h-6 w-6" />,
]

function sentences(text: string) {
  const parts = text.split(/(?<=\.)\s+/).filter(Boolean)
  return { description: parts[0] ?? text, benefits: parts.slice(1) }
}

function StepCard({
  icon,
  title,
  description,
  benefits,
}: {
  icon: ReactNode
  title: string
  description: string
  benefits: string[]
}) {
  return (
    <div
      className={cn(
        "relative h-full rounded-2xl border border-border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out",
        "hover:scale-105 hover:border-primary/50 hover:bg-muted hover:shadow-lg",
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {benefits.length > 0 ? (
        <ul className="space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <div className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export function HowItWorks({ className }: { className?: string }) {
  const steps = startSteps.map((step, index) => ({
    ...step,
    icon: icons[index],
    ...sentences(step.text),
  }))
  const count = steps.length
  const inset = 100 / (2 * count)

  return (
    <div className={cn("comeco-steps", className)}>
      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <div
          aria-hidden="true"
          className="absolute top-4 hidden h-0.5 -translate-y-1/2 bg-border xl:block"
          style={{ left: `${inset}%`, width: `${100 - inset * 2}%` }}
        />
        {steps.map((step) => (
          <div key={step.index} className="flex flex-col gap-6">
            <div className="relative z-10 flex h-8 w-8 items-center justify-center self-center rounded-full bg-muted font-semibold text-foreground ring-4 ring-background">
              {Number(step.index)}
            </div>
            <StepCard
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
