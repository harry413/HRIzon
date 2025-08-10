"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Brain } from 'lucide-react'

type SplashScreenProps = {
  durationMs?: number
  onDismiss?: () => void
}

export default function SplashScreen({ durationMs = 120000, onDismiss = () => {} }: SplashScreenProps) {
  const [visible, setVisible] = useState(true)
  const timeoutRef = useRef<number | null>(null)

  const prompts = [
    "Find Python developers with 3+ years experience",
    "Who has worked on healthcare projects?",
    "Suggest people for a React Native project",
    "Find developers who know both AWS and Docker",
  ]
  const [promptIndex, setPromptIndex] = useState(0)
  const [typed, setTyped] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      handleDismiss()
    }, durationMs)
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [durationMs])

  useEffect(() => {
    if (!visible) return

    const current = prompts[promptIndex]
    const TYPING_MS = 45
    const DELETING_MS = 25
    const HOLD_MS = 1200
    const NEXT_PAUSE_MS = 350

    let timer: number

    if (!deleting && typed.length < current.length) {
      timer = window.setTimeout(() => {
        setTyped(current.slice(0, typed.length + 1))
      }, TYPING_MS)
    } else if (!deleting && typed.length === current.length) {
      timer = window.setTimeout(() => setDeleting(true), HOLD_MS)
    } else if (deleting && typed.length > 0) {
      timer = window.setTimeout(() => {
        setTyped(current.slice(0, typed.length - 1))
      }, DELETING_MS)
    } else if (deleting && typed.length === 0) {
      timer = window.setTimeout(() => {
        setDeleting(false)
        setPromptIndex((i) => (i + 1) % prompts.length)
      }, NEXT_PAUSE_MS)
    }

    return () => clearTimeout(timer)
  }, [typed, deleting, promptIndex, prompts, visible])

  const handleDismiss = () => {
    if (!visible) return
    setVisible(false)
    onDismiss()
  }

  if (!visible) return null

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Enter application"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      onClick={handleDismiss}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleDismiss();
      }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-black to-neutral-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <div className="space-y-2">
          <Brain  className="h-12 w-12 text-center"/>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            HRIzon
          </h1>
          <p className="max-w-xl text-sm text-neutral-300 sm:text-base">
            Find the right people by skills, projects, and availability
          </p>
        </div>

        
        <div
          aria-hidden="true"
          className="pointer-events-none w-full max-w-xl overflow-hidden rounded-full border border-neutral-800/70 bg-neutral-900/60 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800/80">
              <Search className="h-4 w-4 text-neutral-300" />
            </div>
            <div className="flex min-h-[1.25rem] flex-1 items-center text-left text-neutral-300">
              <span className="truncate">{typed}</span>
              <span className="ml-1 inline-block h-5 w-[2px] translate-y-[1px] animate-pulse bg-neutral-400" />
            </div>
          </div>
        </div>


        <div className="mt-2 h-2 w-28 overflow-hidden rounded-full bg-neutral-800">
          <div className="h-2 w-12 animate-[shimmer_1.4s_infinite] rounded-full bg-white/70" />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(250%);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
