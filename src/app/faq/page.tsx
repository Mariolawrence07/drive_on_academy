import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"
import { Link } from "react-router-dom"

export const metadata = {
  title: "FAQ | DrivePro",
  description:
    "Frequently asked questions about driving lessons, pricing, and what to expect.",
}

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "I’ve never driven before. Is that okay?",
        answer:
          "Absolutely. Many learners start as complete beginners. Lessons begin in a calm, safe area and progress at a pace that suits you. There’s no pressure — everyone learns differently, and lessons are adapted to your confidence level.",
      },
      {
        question: "What do I need to bring to my first lesson?",
        answer:
          "Please bring your provisional driving licence. Wear comfortable clothing and flat shoes where possible. The car is provided and is fully insured for lessons.",
      },
      {
        question: "How many lessons will I need?",
        answer:
          "This varies from person to person. Many learners need around 40 to 50 hours of professional lessons, sometimes alongside private practice. It depends on confidence, previous experience, and how regularly you drive.",
      },
    ],
  },
  {
    category: "Booking & Scheduling",
    questions: [
      {
        question: "How do I book a lesson?",
        answer:
          "You can submit a booking request through the website, call directly, or send a WhatsApp message. You’ll get a reply as soon as possible to confirm a suitable date and time.",
      },
      {
        question: "Can I reschedule a lesson?",
        answer:
          "Yes. Lessons can be rescheduled free of charge with at least 24 hours’ notice. With less than 24 hours’ notice, the full lesson fee usually applies unless there are exceptional circumstances.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "Booking at least a week in advance is ideal, especially for evenings and weekends. For intensive bookings, it’s best to enquire 2 to 3 weeks ahead where possible.",
      },
      {
        question: "Where will you pick me up?",
        answer:
          "Pick-up can usually be arranged from home, work, college, or another agreed location within the service area around Stoke-on-Trent.",
      },
    ],
  },
  {
    category: "Lessons & Learning",
    questions: [
      {
        question: "What car do you teach in?",
        answer:
          "Lessons take place in a modern, dual-controlled vehicle with up-to-date safety features. Dual controls allow support when needed, helping learners feel more secure while building confidence.",
      },
      {
        question: "Do you teach manual or automatic?",
        answer:
          "Lessons are currently offered in an automatic vehicle. This helps many learners focus more on road awareness, positioning, and decision-making without the added pressure of gear changes.",
      },
      {
        question: "How long is each lesson?",
        answer:
          "A standard lesson is 1 hour. Longer sessions may also be recommended depending on your stage, as they give more time for route planning, independent driving, and test preparation.",
      },
      {
        question: "Will you help me prepare for my test?",
        answer:
          "Yes. Test preparation is an important part of the learning process. This includes manoeuvres, independent driving, mock test practice, and support building confidence for the real test.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "Payments can usually be made by cash, bank transfer, or card, depending on what has been arranged. If you’re booking a package, instalment options may also be discussed.",
      },
      {
        question: "Are the package prices better value?",
        answer:
          "Yes. Packages are designed to offer better value than paying for each lesson individually. For example, a 10-hour package saves money compared with ten single lessons, and larger packages offer even better overall value.",
      },
      {
        question: "Can I get a refund if I don’t use all my lessons?",
        answer:
          "Packages are generally non-refundable, but unused lessons may be transferable in some cases. If your circumstances change, it’s best to get in touch to discuss the options.",
      },
      {
        question: "Are your prices in pounds?",
        answer:
          "Yes. All prices listed on the website are in pounds sterling (£).",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%),linear-gradient(to_bottom,rgba(148,163,184,0.08),transparent_45%)]" />

        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              Clear answers for new and existing learners
            </div>

            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              Everything you need to know about lessons, booking, pricing, and
              what to expect. If you still need help, just get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {faqs.map((category) => (
              <Card
                key={category.category}
                className="rounded-3xl border-border/60 bg-card/80 shadow-sm"
              >
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-primary/10 p-2.5">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-semibold tracking-tight">
                        {category.category}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Helpful information before you book
                      </p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.category}-${index}`}
                        className="rounded-2xl border border-border/60 bg-background/60 px-5"
                      >
                        <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 leading-7 text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick reassurance strip */}
      <section className="border-y border-border/60 bg-muted/20 py-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Beginner-friendly lessons",
              "Flexible lesson times",
              "Clear pricing in £",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/70 px-4 py-4 text-center shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-primary to-primary/85 px-6 py-12 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)] sm:px-10 lg:px-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_25%)]" />

            <div className="relative mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <HelpCircle className="h-7 w-7 text-primary-foreground" />
              </div>

              <h2 className="mt-6 text-balance font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Still have questions?
              </h2>

              <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
                If you can’t find what you’re looking for, get in touch and I’ll
                be happy to help.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
                  <Link to="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-white/20 bg-white/5 px-6 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                >
                  <Link to="/book">Book a Lesson</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}