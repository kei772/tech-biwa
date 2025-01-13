import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChoose } from "@/components/why-choose"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <Suspense>
      <main className="flex flex-col">
        <Hero />
        <div className="flex flex-col items-center">
          <section id="about" className="w-full py-24 sm:py-32">
            <div className="container mx-auto">
              <h2 className="text-center mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
                About
              </h2>
              <About />
            </div>
          </section>
          <section id="services" className="w-full py-24 sm:py-32 bg-muted/50">
            <div className="container mx-auto">
              <h2 className="text-center mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
                Services
              </h2>
              <Services />
            </div>
          </section>
          <section id="why-choose" className="w-full py-24 sm:py-32">
            <div className="container mx-auto">
              <h2 className="text-center mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Us?
              </h2>
              <WhyChoose />
            </div>
          </section>
          <section id="faq" className="w-full py-24 sm:py-32 bg-muted/50">
            <div className="container mx-auto">
              <h2 className="text-center mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
                FAQ
              </h2>
              <FAQ />
            </div>
          </section>
          <section id="contact" className="w-full py-24 sm:py-32">
            <div className="container mx-auto">
              <h2 className="text-center mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
                Contact
              </h2>
              <Contact />
            </div>
          </section>
        </div>
      </main>
    </Suspense>
  )
}
