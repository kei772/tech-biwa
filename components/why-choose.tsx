import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Code, HandshakeIcon } from 'lucide-react'

const features = [
  {
    title: "スピード感のある対応",
    description: "社内稟議や大きな組織構造がない分、最短で提案・開発・修正を進められます。",
    icon: Zap,
  },
  {
    title: "深い技術力と柔軟な思考",
    description: "フルスタックな開発経験と最新の生成AI技術を組み合わせ、現場ごとに最適化します。",
    icon: Code,
  },
  {
    title: "ハンズオンでのサポート",
    description: "企業研修や導入後のアフターケアなど、現場でのフォローを大切にしています。",
    icon: HandshakeIcon,
  },
]

export function WhyChoose() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
      {features.map((feature) => (
        <Card key={feature.title} className="bg-background">
          <CardHeader>
            <feature.icon className="h-12 w-12 text-primary" />
            <CardTitle className="mt-4">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
