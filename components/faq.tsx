import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "開発の期間はどれくらいですか？",
    answer: "プロジェクトの内容により異なりますが、小規模であれば1週間〜2ヶ月ほどを目安にお考えください。",
  },
  {
    question: "料金の目安を教えてください",
    answer: "要件によりますが、柔軟な価格設定が可能です。まずはお気軽にお問い合わせください。",
  },
  {
    question: "オンラインでの打ち合わせは可能ですか？",
    answer: "はい、ZoomやGoogle Meetなどで対応いたします。",
  },
]

export function FAQ() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
