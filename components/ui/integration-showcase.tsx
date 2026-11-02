"use client"

import * as React from "react"
import { motion, MotionConfig } from "framer-motion"
import { cn } from "@/lib/utils"

export interface Integration {
  name: string
  description: string
  iconSrc: string
}

export interface IntegrationShowcaseProps {
  title: string
  subtitle: string
  integrations: Integration[]
  className?: string
  id?: string
  action?: { href: string; label: string }
}

export const IntegrationShowcase = React.forwardRef<HTMLElement, IntegrationShowcaseProps>(
  ({ title, subtitle, integrations, className, id, action }, ref) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.02 },
      },
    }

    const itemVariants = {
      hidden: { opacity: 0, y: 8 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
      },
    }

    return (
      <MotionConfig reducedMotion="user">
        <section
          ref={ref}
          id={id}
          className={cn("flex w-full flex-col justify-start bg-background text-foreground", className)}
          style={{ minHeight: "100svh", paddingTop: "calc(var(--nav-h) + 0.65rem)", paddingBottom: "1rem" }}
        >
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 style={{ fontSize: "clamp(1.7rem, 3.4vw, 3.1rem)", lineHeight: 1.05, maxWidth: "14ch" }}>
              {title.replace(/~/g, "")}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-snug text-foreground sm:text-base">{subtitle}</p>

            <motion.ul
              className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1 sm:mt-5 sm:grid-cols-4 sm:gap-y-1.5 lg:grid-cols-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {integrations.map((item) => (
                <motion.li key={item.name} variants={itemVariants} className="flex min-w-0 items-center gap-1.5" title={item.description}>
                  <img src={item.iconSrc} alt="" className="h-4 w-4 shrink-0 object-contain" />
                  <span className="truncate text-[11px] text-foreground sm:text-xs" style={{ lineHeight: 1.25 }}>
                    {item.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            {action ? (
              <a href={action.href} className="btn btn-red" style={{ marginTop: "0.85rem" }}>
                {action.label}
              </a>
            ) : null}
          </div>
        </section>
      </MotionConfig>
    )
  },
)

IntegrationShowcase.displayName = "IntegrationShowcase"
