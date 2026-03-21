import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Sparkles, ShieldCheck, CreditCard } from "lucide-react"
import { Link } from "react-router-dom"

export const metadata = {
  title: "Lessons & Prices | DriveonAcademy",
  description:
    "View our driving lesson packages and pricing. Flexible options for all experience levels.",
}

const lessonTypes = [
  {
    name: "Single Lesson",
    description: "Perfect for occasional practice or trying us out",
    price: 45,
    duration: "1 hour",
    features: [
      "Full 60-minute lesson",
      "Flexible scheduling",
      "Pick-up from your location",
      "Progress tracking",
    ],
    popular: false,
  },
  {
    name: "Starter Package",
    description: "Ideal for beginners starting their driving journey",
    price: 200,
    duration: "5 hours",
    savings: 25,
    features: [
      "5 x 1-hour lessons",
      "Save £25 vs single lessons",
      "Flexible scheduling",
      "Progress tracking",
      "Structured learning plan",
    ],
    popular: false,
  },
  {
    name: "Standard Package",
    description: "Our most popular option for confident progress",
    price: 380,
    duration: "10 hours",
    savings: 70,
    features: [
      "10 x 1-hour lessons",
      "Save £70 vs single lessons",
      "Priority scheduling",
      "Progress tracking",
      "Test preparation included",
      "Mock test session",
    ],
    popular: true,
  },
  {
    name: "Intensive Course",
    description: "Fast-track your learning with concentrated practice",
    price: 760,
    duration: "20 hours",
    savings: 200,
    features: [
      "20 x 1-hour lessons",
      "Save £200 vs single lessons",
      "Priority scheduling",
      "Test preparation included",
      "Multiple mock tests",
      "Test day support",
    ],
    popular: false,
  },
]

const additionalServices = [
  {
    name: "Test Day Support",
    price: 100,
    description:
      "1-hour warm-up lesson before your test, plus 1 hour use of vehicle for the test",
  },
  {
    name: "Refresher Lesson",
    price: 50,
    description:
      "For qualified drivers looking to rebuild confidence after a break",
  },
  {
    name: "Motorway Lesson",
    price: 55,
    description:
      "2-hour motorway driving session for licence holders (Pass Plus eligible)",
  },
]

export default function LessonsPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_25%),linear-gradient(to_bottom,rgba(148,163,184,0.08),transparent_45%)]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                Flexible lesson packages with transparent pricing
              </div>

              <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Lessons &{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Prices
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
                Clear pricing, flexible packages, and a learning plan that fits
                your pace. Whether you are just starting or preparing for your
                test, there is an option for you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-6 text-base">
                  <Link to="/book">
                    Book Your Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
                  <Link to="/contact">Ask a Question</Link>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm">
                  <p className="text-2xl font-semibold">£45</p>
                  <p className="text-sm text-muted-foreground">Single lesson</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm">
                  <p className="text-2xl font-semibold">£380</p>
                  <p className="text-sm text-muted-foreground ">Most popular package</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm">
                  <p className="text-2xl font-semibold">£700</p>
                  <p className="text-sm text-muted-foreground">Intensive course</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
              <div className="overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-[0_20px_80px_-30px_rgba(0,0,0,0.35)]">
                <img
                  src="https://res.cloudinary.com/dngovdyel/image/upload/v1773442995/interior_driving_drwuun.jpg"
                  alt="Interior view of a driving lesson"
                  className="h-full w-full object-cover"
                />
              </div>

              <Card className="absolute -bottom-6 left-4 hidden w-72 rounded-2xl border-border/60 bg-background/90 shadow-xl backdrop-blur sm:block">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-accent/15 p-2">
                      <ShieldCheck className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-white">No hidden fees</p>
                      <p className="mt-1 text-sm text-white/50">
                        Transparent pricing with flexible options for beginners,
                        refreshers, and test prep.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
              Choose the package that suits you
            </div>
            <h2 className="mt-5 text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Simple pricing, designed for progress
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Start small, save with packages, or fast-track your learning with
              an intensive course.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {lessonTypes.map((lesson) => (
              <Card
                key={lesson.name}
                className={`group relative flex h-full flex-col rounded-3xl border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  lesson.popular
                    ? "border-primary shadow-[0_20px_60px_-25px_rgba(59,130,246,0.45)]"
                    : ""
                }`}
              >
                {lesson.popular && (
                  <div className="absolute inset-x-0 -top-3 flex justify-center">
                    <Badge className="rounded-full bg-primary px-4 py-1 mt-6 text-primary-foreground shadow-md">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4 pt-8">
                  <CardTitle className="font-heading text-2xl">{lesson.name}</CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {lesson.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <div className="mb-6 rounded-2xl bg-muted/40 p-4">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-semibold tracking-tight">
                        £{lesson.price}
                      </span>
                      <span className="pb-1 text-sm text-muted-foreground">
                        / {lesson.duration}
                      </span>
                    </div>

                    {lesson.savings && (
                      <p className="mt-2 text-sm font-medium text-accent">
                        Save £{lesson.savings} compared to booking lessons individually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {lesson.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                          <Check className="h-3.5 w-3.5 text-accent" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    asChild
                    className="h-11 w-full rounded-xl"
                    variant={lesson.popular ? "default" : "outline"}
                  >
                    <Link to="/book">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted/20 py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground">
              Optional extras
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Additional Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Extra support for test day, motorway confidence, or refreshing your
              skills.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {additionalServices.map((service) => (
              <Card
                key={service.name}
                className="rounded-3xl border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="font-heading text-lg font-semibold">{service.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-semibold tracking-tight">
                      £{service.price}
                    </span>
                    <Button asChild variant="outline" size="sm" className="rounded-xl">
                      <Link to="/book">Book</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
              Important details
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment Information
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm">
              <CardContent className="p-7">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">Payment Methods</h3>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  <li>Cash</li>
                  <li>Bank transfer</li>
                  <li>Card payments accepted</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 bg-card/80 shadow-sm">
              <CardContent className="p-7">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-accent/15 p-2">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
                    Cancellation Policy
                  </h3>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  <li>24+ hours notice: free reschedule</li>
                  <li>Less than 24 hours: full charge applies</li>
                  <li>Packages are non-refundable but transferable</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-primary to-primary/85 px-6 py-12 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)] sm:px-10 lg:px-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_25%)]" />

            <div className="relative flex flex-col items-center text-center">
              <h2 className="max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Ready to Start Learning?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/80">
                Submit your booking request and we’ll get back to you within 24
                hours to confirm your lesson schedule.
              </p>
              <Button asChild size="lg" variant="secondary" className="mt-8 h-12 px-6 text-base">
                <Link to="/book">
                  Book Your Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}