import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { Send, CheckCircle2 } from "lucide-react"

const FORMSPREE_FORM_ID =
  import.meta.env.VITE_API_FORM_SPREE || "YOUR_FORM_ID"

const lessonTypes = [
  { value: "Single Lesson - £45", label: "Single Lesson — £45" },
  { value: "Starter Package - £200", label: "Starter Package — £200" },
  { value: "Standard Package - £380", label: "Standard Package — £380" },
  { value: "Intensive Course - £700", label: "Intensive Course — £700" },
]

const areas = [
  { value: "Hanley", label: "Hanley" },
  { value: "Stoke", label: "Stoke" },
  { value: "Longton", label: "Longton" },
  { value: "Fenton", label: "Fenton" },
  { value: "Burslem", label: "Burslem" },
  { value: "Tunstall", label: "Tunstall" },
  { value: "Trentham", label: "Trentham" },
  { value: "Newcastle-under-Lyme", label: "Newcastle-under-Lyme" },
]

const timeOptions = [
  { value: "Morning", label: "Morning" },
  { value: "Afternoon", label: "Afternoon" },
  { value: "Evening", label: "Evening" },
  { value: "Weekend", label: "Weekend" },
  { value: "Flexible", label: "I’m flexible" },
]

export function BookingForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)
  const [area, setArea] = useState("")
  const [lessonType, setLessonType] = useState("")
  const [preferredTime, setPreferredTime] = useState("")

  if (state.succeeded) {
    return (
      <Card className="rounded-3xl border-border/60 shadow-lg">
        <CardContent className="flex flex-col items-center justify-center p-10 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">Request sent</h3>
          <p className="mt-4 max-w-md text-muted-foreground">
            Thanks. We’ll contact you by phone or WhatsApp soon to confirm your lesson.
          </p>
          <Button className="mt-8" onClick={() => window.location.reload()}>
            Send another request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="rounded-3xl border-border/60 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Request a lesson
        </CardTitle>
        <CardDescription>
          Fill in your details and we’ll contact you to confirm the date and time.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="area" value={area} />
          <input type="hidden" name="lessonType" value={lessonType} />
          <input type="hidden" name="preferredTime" value={preferredTime} />

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full name *</FieldLabel>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your full name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-sm text-destructive"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="phone">Phone number *</FieldLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="07XXXXXXXXX"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
                className="text-sm text-destructive"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="area">Your area *</FieldLabel>
              <Select value={area} onValueChange={setArea} required>
                <SelectTrigger id="area">
                  <SelectValue placeholder="Choose your area" />
                </SelectTrigger>
                <SelectContent>
                  {areas.map((areaOption) => (
                    <SelectItem key={areaOption.value} value={areaOption.value}>
                      {areaOption.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="lessonType">Lesson/package *</FieldLabel>
              <Select value={lessonType} onValueChange={setLessonType} required>
                <SelectTrigger id="lessonType">
                  <SelectValue placeholder="Choose a lesson" />
                </SelectTrigger>
                <SelectContent>
                  {lessonTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="preferredTime">Preferred time</FieldLabel>
              <Select value={preferredTime} onValueChange={setPreferredTime}>
                <SelectTrigger id="preferredTime">
                  <SelectValue placeholder="Choose a preferred time" />
                </SelectTrigger>
                <SelectContent>
                  {timeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="message">Anything else?</FieldLabel>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Optional: tell us anything helpful"
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <>
                  <Spinner className="mr-2 h-4 w-4" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send request
                </>
              )}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}