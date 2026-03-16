import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Award,
  Heart,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router";

export const metadata = {
  title: "About | DriveonAcademy",
  description:
    "Learn about our professional driving instructor and teaching philosophy.",
};

const values = [
  {
    icon: Heart,
    title: "Patient & Supportive",
    description:
      "Learning to drive can be stressful. I create a calm, encouraging environment where you can learn at your own pace without pressure.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Every lesson is structured with clear objectives. We track your progress together and celebrate each milestone on your journey.",
  },
  {
    icon: GraduationCap,
    title: "Professional Expertise",
    description:
      "With certified training and years of experience, I use proven teaching methods that adapt to your individual learning style.",
  },
  {
    icon: Award,
    title: "Committed to Excellence",
    description:
      "I'm dedicated to not just helping you pass your test, but to making you a safe, confident driver for life.",
  },
];
const passedPupils = [
  {
    name: "Sarah M.",
    date: "March 2026",
    image:
      "https://res.cloudinary.com/dngovdyel/image/upload/v1773664983/631423583_846233731827531_293910525875260160_n_oqyrkr.jpg",
    attempts: "1st attempt",
  },
  {
    name: "James K.",
    date: "February 2026",
    image:
      "https://res.cloudinary.com/dngovdyel/image/upload/v1773664968/charan_fh0rmu.jpg",
    attempts: "1st attempt",
  },
  {
    name: "Emily R.",
    date: "January 2026",
    image:
      "https://res.cloudinary.com/dngovdyel/image/upload/v1773660319/634001004_847258695058368_6710790963915150777_n_iiymkg.jpg",
    attempts: "1st attempt",
  },
  {
    name: "David L.",
    date: "December 2025",
    image:
      "https://res.cloudinary.com/dngovdyel/image/upload/v1773683529/651194937_870971206020450_5297906930221068421_n_gujpac.jpg",
    attempts: "1st attempt",
  },
  {
    name: "Maria S.",
    date: "November 2025",
    image:
      "https://res.cloudinary.com/dngovdyel/image/upload/v1773660112/643953246_860744263709811_4744740863195921712_n_pylkxi.jpg",
    attempts: "2nd attempt",
  },
  {
    name: "Alex T.",
    date: "October 2025",
    image:
      "https://res.cloudinary.com/dngovdyel/image/upload/v1773665181/624725943_835721586212079_5879431917273840300_n_glvmmq.jpg",
    attempts: "1st attempt",
  },
  {
    name: "Chris B.",
    date: "September 2025",
    image:
      "https://res.cloudinary.com/dngovdyel/image/upload/v1773660112/641659543_859691063815131_8258770687518232405_n_udiuun.jpg",
    attempts: "1st attempt",
  },
  {
    name: "Sophie W.",
    date: "August 2025",
    image:
      "https://res.cloudinary.com/dngovdyel/image/upload/v1773660112/637000013_849980754786162_718809772699305916_n_yqdkrp.jpg",
    attempts: "1st attempt",
  },
];

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
                src="https://res.cloudinary.com/dngovdyel/image/upload/v1773659239/352050783_927055355251983_4912591017705324709_n_smkz4o.jpg"
                alt="Professional driving instructor"
                className="object-cover"
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight">My Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  With over 10 years of experience as a professional driving
                  instructor, I've had the privilege of helping hundreds of
                  students achieve their driving goals. My passion for teaching
                  safe driving practices started when I realized how
                  life-changing this skill can be.
                </p>
                <p>
                  I believe that everyone can learn to drive well when given the
                  right instruction and support. That's why I focus on creating
                  a relaxed, positive learning environment where mistakes are
                  part of the process, not something to fear.
                </p>
                <p>
                  My approach combines structured lessons with flexibility to
                  adapt to each student's needs. Whether you're a complete
                  beginner, returning to driving after a break, or preparing for
                  your test, I tailor each session to help you progress
                  confidently.
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
              <Card
                key={value.title}
                className="border-0 bg-background shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Passed Pupils Gallery */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/40 px-4 py-2 text-sm text-accent-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Our Success Stories
            </div>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Passed Pupils Gallery
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Celebrating every student who achieved their driving goals with
              us.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {passedPupils.map((pupil, index) => (
              <div
                key={index}
                className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  index % 3 === 0
                    ? "aspect-[3/4]"
                    : index % 3 === 1
                      ? "aspect-square"
                      : "aspect-[4/5]"
                }`}
              >
                <img
                  src={pupil.image}
                  alt={`${pupil.name} passed their driving test`}
                  className="absolute inset-0 block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Hover Content */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                    <CheckCircle2 className="h-3 w-3" />
                    {pupil.attempts}
                  </div>
                  <p className="mt-2 font-semibold text-primary-foreground">
                    {pupil.name}
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    Passed {pupil.date}
                  </p>
                </div>

                {/* Always Visible Badge */}
                <div className="absolute right-3 top-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent shadow-md">
                    <CheckCircle2 className="h-4 w-4 text-accent-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Ready to join our wall of success?
            </p>
            <Button asChild className="mt-4">
              <Link to="/book">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
                <p className="mt-2 text-sm text-muted-foreground">
                  Years of Teaching Experience
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Students Successfully Passed
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  First-Time Pass Rate
                </p>
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
  );
}
