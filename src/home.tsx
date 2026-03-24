import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import { Link } from "react-router";

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
];

const testimonials = [
  {
    name: "Lia ",
    text: "Passed my test first time! The instructor was incredibly patient and really helped build my confidence on the road. I couldn't have done it without this amazing support.",
    rating: 5,
    image: "https://res.cloudinary.com/dngovdyel/image/upload/v1773660319/634001004_847258695058368_6710790963915150777_n_iiymkg.jpg",
    passedDate: "March 2026",
    attempts: "1st attempt",
  },
  {
    name: "Liam Parker",
    text: "Excellent instruction from day one. Very flexible with scheduling and always on time. The structured approach made learning so much easier. Highly recommend to everyone!",
    rating: 5,
    image: "https://res.cloudinary.com/dngovdyel/image/upload/v1773660112/641659543_859691063815131_8258770687518232405_n_udiuun.jpg",
    passedDate: "February 2026",
    attempts: "1st attempt",
  },
  {
    name: "Shreya",
    text: "I was so nervous about driving but the calm, reassuring approach made all the difference. Now I absolutely love being behind the wheel. Thank you for believing in me!",
    rating: 5,
    image: "https://res.cloudinary.com/dngovdyel/image/upload/v1773660112/637000013_849980754786162_718809772699305916_n_yqdkrp.jpg",
    passedDate: "January 2026",
    attempts: "1st attempt",
  },
];

const stats = [
  { label: "Students passed", value: "100+" },
  { label: "Years experience", value: "10+" },
  { label: "Average rating", value: "5.0" },
];

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
                you're starting from scratch or refreshing your skills, we’ll
                help you become a safe, confident, and test-ready driver.
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

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Real success stories
            </div>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Students Who Passed With Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join hundreds of confident drivers who started their journey here.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-3xl border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Student Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} after passing their driving test`}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Passed {testimonial.attempts}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ),
                      )}
                    </div>
                    <Quote className="h-5 w-5 text-muted-foreground/40" />
                  </div>

                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Passed {testimonial.passedDate}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Proof Banner */}
          <div className="mt-16 rounded-2xl bg-black/5 p-8 text-center">
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
              <div>
                <p className="text-4xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Students Passed</p>
              </div>
              <div className="hidden h-12 w-px bg-border sm:block" />
              <div>
                <p className="text-4xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Pass Rate</p>
              </div>
              <div className="hidden h-12 w-px bg-border sm:block" />
              <div>
                <p className="text-4xl font-bold text-primary">4.9</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center sm:gap-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">
                Fully Licensed & Insured
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium"> 100+ Students Passed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
