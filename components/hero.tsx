"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Slow down the video slightly
    }
  }, [])

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250112_2231_Loop%20Video_loop_01jhdbd8dtf7h9b0nzg3mh49qp-GJFu1JwOo1rV34WU0oRQXnu2IkLup7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-background/60 dark:bg-background/80" aria-hidden="true" />
      <div className="container relative z-20 mx-auto px-4 text-center">
        <h1 className="animate-in mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          最先端テクノロジーで
          <br />
          ビジネスを加速
        </h1>
        <p className="animate-in mb-8 text-lg sm:text-xl text-muted-foreground">
          システム開発・AI導入・研修を
          <br />
          スピード感をもってサポート
        </p>
        <Button
          asChild
          size="lg"
          className="animate-in"
        >
          <Link
            href="https://docs.google.com/forms/d/1UWWehrs7Z_MPH3QVjMA6ivZ0ApJJo6AP4HA5FPbDdUs/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            お問い合わせはこちら
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

