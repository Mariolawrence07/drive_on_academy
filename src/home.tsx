import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, Clock, Award, ArrowRight, Star } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Modern, dual-controlled vehicles with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book lessons at times that work for you. Early mornings, evenings, and weekends available.",
  },
  {
    icon: Award,
    title: "High Pass Rate",
    description: "Our students consistently achieve above-average pass rates thanks to our proven teaching methods.",
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

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Learn to Drive with{" "}
                <span className="text-primary">Confidence</span>
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl">
                Professional driving instruction tailored to your pace. Whether you're a complete beginner or looking to refresh your skills, we'll help you become a safe and confident driver.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/book">
                    Book Your First Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/lessons">View Prices</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl lg:mx-0">
              <Image
                src="/images/hero-car.jpg"
                alt="Professional driving lesson in a modern car"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose DrivePro?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're committed to helping you succeed on the road.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-muted/30 shadow-none">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl shadow-lg lg:order-2">
              <Image
                src="/images/passed-test.jpg"
                alt="Happy student who passed their driving test"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center lg:order-1 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Book your first lesson today and take the first step towards driving independence. Join hundreds of successful learners who passed with us.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/book">
                    Book a Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don't just take our word for it — hear from our successful learners.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-4 text-muted-foreground">{testimonial.text}</p>
                  <p className="mt-4 font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center sm:gap-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">500+ Students Passed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
