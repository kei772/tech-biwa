"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  const navigation = [
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Why Choose Us?", href: "why-choose" },
    { name: "FAQ", href: "faq" },
    { name: "Contact", href: "contact" },
  ]

  const scrollToSection = async (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // スクロールアニメーションの完了を待つ（約500ms）
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    await scrollToSection(href)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="tech-biwa logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl">tech-biwa</span>
            </Link>
            <div className="hidden gap-6 md:flex md:items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item.href)}
                  className="flex items-center text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden"
                  size="icon"
                  aria-label="Open Menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-left">メニュー</SheetTitle>
                <nav className="flex flex-col gap-4 mt-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={`#${item.href}`}
                      onClick={(e) => handleClick(e, item.href)}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
