
import { Button } from "@/components/ui/button"
import { Home, Phone, BookOpen } from "lucide-react"
import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 my-20">
      <div className="mx-auto max-w-md text-center">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[10rem] font-bold leading-none tracking-tighter text-primary/10 sm:text-[12rem]">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-primary/10 p-6">
              <svg
                className="h-16 w-16 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
                <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Wrong Turn!
        </h2>
        <p className="mt-4 text-muted-foreground">
          Looks like you've taken a detour. Don't worry, even the best drivers get lost sometimes. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/book">
              <BookOpen className="mr-2 h-4 w-4" />
              Book a Lesson
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 rounded-xl border border-border/60 bg-muted/30 p-6">
          <p className="text-sm font-medium">Looking for something specific?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/about">About</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/lessons">Lessons & Prices</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/faq">FAQ</Link>
            </Button>
          </div>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-muted-foreground">
          Need help? Call us at{" "}
          <a href="tel:+1234567890" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
            <Phone className="h-3 w-3" />
            +44(0)7413501595
          </a>
        </p>
      </div>
    </div>
  )
}
