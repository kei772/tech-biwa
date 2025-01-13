import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            フルスタックエンジニアとしての経験と、最新のAI技術への深い理解を活かし、
            お客様のビジネスの成長をサポートいたします。
          </p>
          <p className="text-muted-foreground">
            大手企業からスタートアップまで、様々な規模・業界のプロジェクトに
            携わってきた経験を基に、最適なソリューションをご提案します。
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>技術スキル</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                フルスタック開発とAI技術の知見を活かした最適なソリューション提案
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>柔軟な対応</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                スピード感あふれる迅速な意思決定とコミュニケーション
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

