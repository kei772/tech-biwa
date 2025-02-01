import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-8 text-muted-foreground">
        お問い合わせやご相談はお気軽にどうぞ。
        <br />
        下記のボタンからお問い合わせフォームにアクセスしてください。
      </p>
      <Button asChild size="lg">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfqSUx-h4oAAEW4-VAjBjmtVk4N0ld-BcW3EkqJHnN9hPdxuw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせはこちら
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
