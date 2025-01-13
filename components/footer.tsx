import Link from "next/link"
import { Twitter, BookOpen } from 'lucide-react'

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
      icon: Twitter,
    },
    {
      name: "note",
      href: "https://note.com/muccccchiiii",
      icon: BookOpen,
    },
  ]

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col items-center gap-6">
          <nav className="flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
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
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 tech-biwa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

