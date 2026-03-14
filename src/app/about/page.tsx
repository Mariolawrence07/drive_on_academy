
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Heart, Target, ArrowRight } from "lucide-react"
import { Link } from "react-router"

export const metadata = {
  title: "About | DrivePro",
  description: "Learn about our professional driving instructor and teaching philosophy.",
}

const values = [
  {
    icon: Heart,
    title: "Patient & Supportive",
    description: "Learning to drive can be stressful. I create a calm, encouraging environment where you can learn at your own pace without pressure.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Every lesson is structured with clear objectives. We track your progress together and celebrate each milestone on your journey.",
  },
  {
    icon: GraduationCap,
    title: "Professional Expertise",
    description: "With certified training and years of experience, I use proven teaching methods that adapt to your individual learning style.",
  },
  {
    icon: Award,
    title: "Committed to Excellence",
    description: "I'm dedicated to not just helping you pass your test, but to making you a safe, confident driver for life.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Your Instructor
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Dedicated to helping you become a safe, confident driver.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Instructor img */}
            <div className="relative aspect-[5/5] w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://res.cloudinary.com/dngovdyel/image/upload/v1773446240/lucid-origin_a_professional_driving_instructor_with_a_calm_and_patient_expression_wearing_a_c-0_raiavd.jpg"
                alt="Professional driving instructor"
                className="object-cover"
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight">My Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  With over 10 years of experience as a professional driving instructor, I've had the privilege of helping hundreds of students achieve their driving goals. My passion for teaching safe driving practices started when I realized how life-changing this skill can be.
                </p>
                <p>
                  I believe that everyone can learn to drive well when given the right instruction and support. That's why I focus on creating a relaxed, positive learning environment where mistakes are part of the process, not something to fear.
                </p>
                <p>
                  My approach combines structured lessons with flexibility to adapt to each student's needs. Whether you're a complete beginner, returning to driving after a break, or preparing for your test, I tailor each session to help you progress confidently.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/book">
                    Book a Lesson with Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              My Teaching Philosophy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide every lesson.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-0 bg-background shadow-sm">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Qualifications & Credentials
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="mt-2 text-sm text-muted-foreground">Years of Teaching Experience</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="mt-2 text-sm text-muted-foreground">Students Successfully Passed</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="mt-2 text-sm text-muted-foreground">First-Time Pass Rate</p>
              </div>
            </div>
            <ul className="mt-12 space-y-3 text-left text-muted-foreground">
              <li className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Fully licensed and certified driving instructor
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Enhanced DBS checked for your safety
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Regular professional development training
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Comprehensive insurance coverage
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
