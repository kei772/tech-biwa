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
          href="https://docs.google.com/forms/d/1UWWehrs7Z_MPH3QVjMA6ivZ0ApJJo6AP4HA5FPbDdUs/viewform"
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
