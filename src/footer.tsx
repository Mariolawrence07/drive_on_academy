
import { Car, Phone, Mail, MapPin } from "lucide-react"
import { Link } from "react-router"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Car className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold tracking-tight">DriveOnAcademy</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional driving instruction with a focus on safety, confidence, and success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/about" className="transition-colors hover:text-foreground">
                About
              </Link>
              <Link to="/lessons" className="transition-colors hover:text-foreground">
                Lessons & Prices
              </Link>
              <Link to="/book" className="transition-colors hover:text-foreground">
                Book a Lesson
              </Link>
              <Link to="/faq" className="transition-colors hover:text-foreground">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@drivepro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>City Center & Suburbs</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold">Hours</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>7:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>9:00 AM - 3:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DrivePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
