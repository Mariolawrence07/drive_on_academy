import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react"
import { Link } from "react-router"

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Learn in modern, dual-controlled vehicles with full insurance and calm, structured instruction.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Choose lesson times that fit your life, including evenings and weekends.",
  },
  {
    icon: Award,
    title: "High Pass Rate",
    description:
      "A proven teaching approach designed to build confidence, skill, and test readiness.",
  },
]

const testimonials = [
  {
    name: "Sarah M.",
    text: "Passed my test first time! The instructor was patient and really helped build my confidence on the road.",
    rating: 5,
  },
  {
    name: "James K.",
    text: "Excellent instruction. Very flexible with scheduling and always on time. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily R.",
    text: "I was nervous about driving but the calm approach made all the difference. Now I love being behind the wheel!",
    rating: 5,
  },
]

const stats = [
  { label: "Students passed", value: "500+" },
  { label: "Years experience", value: "10+" },
  { label: "Average rating", value: "5.0" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background text-foreground ">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_30%),linear-gradient(to_bottom,rgba(148,163,184,0.08),transparent_40%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-border/60" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm shadow-sm backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                Trusted driving lessons for beginners and nervous learners
              </div>

              <h1 className="font-heading mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Learn to Drive with{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
                Professional driving instruction tailored to your pace. Whether
                you're starting from scratch or refreshing your skills, we’ll help
                you become a safe, confident, and test-ready driver.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="group h-12 px-6 text-base">
                  <Link to="/book">
                    Book Your First Lesson
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 text-base"
                >
                  <Link to="/lessons">View Prices</Link>
                </Button>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur"
                  >
                    <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
              <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-3xl bg-primary/10 blur-2xl sm:block" />
              <div className="absolute -bottom-8 -right-6 hidden h-28 w-28 rounded-full bg-accent/10 blur-2xl sm:block" />

              <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-[0_20px_80px_-30px_rgba(0,0,0,0.35)]">
                <img
                  src="https://res.cloudinary.com/dngovdyel/image/upload/v1773441075/lucid-origin_A_professional_driving_instructor_with_a_friendly_smile_and_short_brown_hair_sit-0_htchs0.jpg"
                  alt="Professional driving lesson in a modern car"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded-full bg-background/90 px-3 py-1 text-sm font-medium text-foreground backdrop-blur">
                      Manual & automatic lessons
                    </div>
                    <div className="rounded-full bg-background/90 px-3 py-1 text-sm font-medium text-foreground backdrop-blur">
                      Calm, patient instruction
                    </div>
                  </div>
                </div>
              </div>

              {/* <Card className="absolute -bottom-6 left-4 hidden w-72 border-border/60 bg-background/90 shadow-xl backdrop-blur sm:block">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-accent/15 p-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">First lesson guidance</p>
                      <p className="mt-1 text-sm text-gray">
                        We’ll assess your level, explain the process, and create a
                        learning plan that fits you.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
              Why learners choose us
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              A smarter, calmer way to learn
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Everything is designed to make learning feel clear, safe, and
              confidence-building from day one.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group rounded-3xl border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-7 sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-primary to-primary/85 px-6 py-10 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)] sm:px-10 sm:py-14 lg:px-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_25%)]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
                <img
                  src="https://res.cloudinary.com/dngovdyel/image/upload/v1773441465/lucid-origin_A_beaming_young_student_with_a_bright_smile_likely_in_their_late_teens_standing_-0_fgbp3m.jpg"
                  alt="Happy student who passed their driving test"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-primary-foreground/85 backdrop-blur">
                  Start your journey today
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                  Ready to pass with confidence?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/80">
                  Book your first lesson and take the first real step toward
                  driving independence. Join learners who built their confidence
                  with calm, supportive instruction.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                    <Link to="/contact">Ask a Question</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
              Real learner feedback
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              What our students say
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Confidence on the road starts with the right support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="rounded-3xl border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <Quote className="h-5 w-5 text-muted-foreground/50" />
                  </div>

                  <p className="mt-5 leading-7 text-muted-foreground">
                    {testimonial.text}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Verified student
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-t border-border/60 bg-muted/20 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Fully Licensed & Insured",
              "10+ Years Experience",
              "500+ Students Passed",
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
    </div>
  )
}