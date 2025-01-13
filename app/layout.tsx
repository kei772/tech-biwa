import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "tech-biwa | システム開発・AI導入・研修",
  description: "システム開発からAI導入、実践的な研修まで、スピード感をもってサポート。最新の生成AI技術を活用してビジネスを加速させます。",
  keywords: "システム開発, AI導入, 研修, 生成AI, ChatGPT",
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://kei772.github.io/tech-biwa'
      : 'http://localhost:3000'
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.NODE_ENV === 'production' ? '/tech-biwa' : ''

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${basePath}/logo.png`} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
