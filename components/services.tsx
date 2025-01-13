import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Laptop, BotIcon as Robot, GraduationCap } from 'lucide-react'

const services = [
  {
    title: "システム開発",
    description: "要件定義から運用保守まで、フルスタックな開発支援を提供します。",
    icon: Laptop,
    features: [
      "Webアプリケーション",
      "モバイルアプリ",
      "クラウドインフラ",
      "API開発",
    ],
  },
  {
    title: "AI導入支援",
    description: "ChatGPTをはじめとした生成AIや最新技術を活用し、業務効率化を実現します。",
    icon: Robot,
    features: [
      "AITuber開発",
      "AIチャットbot",
      "AIエージェント",
      "動画生成AI",
    ],
  },
  {
    title: "研修サービス",
    description: "実践的なプログラミングとAI技術の活用法を、ワークショップ形式で提供します。",
    icon: GraduationCap,
    features: [
      "生成AI活用研修",
      "プログラミング研修",
      "DX推進研修",
      "カスタム研修",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <service.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

