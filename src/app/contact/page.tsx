import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react"
import { Link } from "react-router-dom"

export const metadata = {
  title: "Contact | DriveonAcademy",
  description:
    "Get in touch with DriveonAcademy in Stoke-on-Trent. Call, email, WhatsApp, or book a lesson online.",
}

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call directly to ask questions or discuss lesson options.",
    value: "+447413501595",
    action: "tel:+447413501595",
    actionLabel: "Call Now",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Send a quick message for availability or booking questions.",
    value: "+447413501595",
    action: "https://wa.me/447413501595",
    actionLabel: "Message on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Best for detailed enquiries or general information.",
    value: "Driveonacademy@gmail.com",
    action: "mailto:Driveonacademy@gmail.com",
    actionLabel: "Send Email",
  },
]

const serviceAreas = [
  "Hanley",
  "Newcastle-under-Lyme",
  "Stoke",
  "Longton",
  "Fenton",
  "Burslem",
  "Tunstall",
  "Trentham",
]

const lessonHours = [
  { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "9:00 AM - 3:00 PM" },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_25%),linear-gradient(to_bottom,rgba(148,163,184,0.08),transparent_45%)]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              Friendly support, quick replies, flexible lesson times
            </div>

            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              Have a question or ready to get started? Reach out by phone,
              WhatsApp, or email and I’ll help you find the right driving lesson
              option in Stoke-on-Trent and nearby areas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a href="tel:+447413501595">
                  Call Now
                  <Phone className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base"
              >
                <Link to="/book">
                  Book a Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className="group rounded-3xl border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-semibold">
                    {method.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {method.description}
                  </p>

                  <p className="mt-5 font-medium text-foreground">{method.value}</p>

                  <Button asChild variant="outline" className="mt-5 rounded-xl">
                    <a
                      href={method.action}
                      target={method.title === "WhatsApp" ? "_blank" : undefined}
                      rel={method.title === "WhatsApp" ? "noreferrer" : undefined}
                    >
                      {method.actionLabel}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area & Hours */}
      <section className="bg-muted/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Service Area */}
            <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm">
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-semibold">
                      Service Area
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Driving lessons across Stoke-on-Trent and nearby areas.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-7 text-muted-foreground">
                  Lessons are available across Stoke-on-Trent and surrounding
                  locations, including:
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {serviceAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-6 text-muted-foreground">
                  Not sure if your area is covered? Send a quick WhatsApp message
                  and I’ll confirm.
                </p>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm">
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-semibold">
                      Lesson Hours
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Flexible scheduling designed around your routine.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {lessonHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-4 py-4"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-border/60 bg-muted/40 p-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    Early morning and evening slots may be available for learners
                    with busy work or study schedules.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-t border-border/60 bg-background py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Friendly, patient instruction",
              "Flexible booking options",
              "Quick response time",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/70 px-4 py-4 text-center shadow-sm"
              >
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-primary to-primary/85 px-6 py-12 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)] sm:px-10 lg:px-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_25%)]" />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Ready to book your first lesson?
              </h2>

              <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
                The quickest way to get started is to submit a booking request.
                I’ll get back to you as soon as possible to confirm the details.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="h-12 px-6 text-base"
                >
                  <Link to="/book">
                    Book a Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-white/20 bg-white/5 px-6 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                >
                  <a
                    href="https://wa.me/447413501595"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}