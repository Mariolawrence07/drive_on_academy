import { BookingForm } from "@/components/booking-form"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react"

export const metadata = {
  title: "Book a Lesson | DriveonAcademy",
  description:
    "Book your driving lesson online. Submit your request and the instructor will contact you to confirm.",
}

const steps = [
  "Fill in the short lesson request form",
  "Your request is reviewed based on availability",
  "You’ll get a call or WhatsApp message to confirm the details",
]

const expectations = [
  "Reply within 24 hours",
  "Pick-up from your location",
  "Modern dual-control vehicle",
  "Patient, professional instruction",
]

const availability = [
  { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "9:00 AM - 3:00 PM" },
]


export default function BookPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_25%),linear-gradient(to_bottom,rgba(148,163,184,0.08),transparent_45%)]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              Simple booking request, fast response, flexible lesson times
            </div>

            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Book Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Lesson
              </span>
            </h1>

            <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              Send your lesson request in a few quick steps. You’ll be contacted
              by phone or WhatsApp to confirm the final date and time.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[380px_minmax(0,1fr)]">
            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm">
                <CardContent className="p-6 sm:p-7">
                  <h3 className="font-heading text-lg font-semibold">
                    How it works
                  </h3>
                  <div className="mt-5 space-y-4">
                    {steps.map((step, index) => (
                      <div key={step} className="flex gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm">
                <CardContent className="p-6 sm:p-7">
                  <h3 className="font-heading text-lg font-semibold">
                    Contact directly
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                       07413501595
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Driveonacademy@gmail.com
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm">
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-accent/15 p-2">
                      <ShieldCheck className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold">
                      What to expect
                    </h3>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {expectations.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm">
                <CardContent className="p-6 sm:p-7">
                  <h3 className="font-heading text-lg font-semibold">
                    Availability
                  </h3>

                  <div className="mt-5 space-y-3">
                    {availability.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-4 py-3"
                      >
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{item.day}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-3xl border border-border/60 bg-muted/30 p-5">
                <div className="flex items-start gap-3">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">
                    No payment is needed when submitting this form. This is just
                    a lesson request and the final details will be confirmed with
                    you directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}