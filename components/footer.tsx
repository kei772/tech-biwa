import Link from "next/link"
import { BookOpen } from 'lucide-react'
import Image from "next/image"

export function Footer() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const social = [
    {
      name: "X (Twitter)",
      href: "https://x.com/ola_jp_ai",
      icon: ({ className }: { className?: string }) => (
        <div className={className}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-full w-full">
            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      ),
    },
    {
      name: "note",
      href: "https://note.com/muccccchiiii",
      icon: BookOpen,
    },
  ]

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <nav className="flex justify-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-center text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4">
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-center text-muted-foreground">
            © 2024 tech-biwa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
