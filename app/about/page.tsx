import { SideNavigation } from "@/components/side-navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building, Users, History, Award, Target, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <SideNavigation />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <section className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                About ColorTech Solutions
              </h1>
              <p className="text-xl text-muted-foreground">Pioneering technology solutions since 2010</p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Building className="mr-2 h-5 w-5 text-blue-500" />
                Our Company
              </h2>
              <p className="text-muted-foreground mb-4">
                ColorTech Solutions was founded with a simple mission: to provide innovative, reliable, and
                user-friendly technology solutions that help businesses thrive in the digital age.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've grown from a small startup to a global technology partner trusted by businesses of
                all sizes. Our team of experts is dedicated to delivering exceptional service and cutting-edge solutions
                tailored to your unique needs.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-0">
              <CardHeader>
                <CardTitle>Company Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Founded in 2010</p>
                    <p className="text-sm text-muted-foreground">Over a decade of excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">250+ Employees</p>
                    <p className="text-sm text-muted-foreground">Across 5 global offices</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">1000+ Clients</p>
                    <p className="text-sm text-muted-foreground">From startups to Fortune 500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-blue-500" />
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We constantly push the boundaries of what's possible, embracing new technologies and creative
                    solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are committed to delivering the highest quality in everything we do, exceeding expectations at
                    every turn.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We operate with transparency, honesty, and ethical practices in all our business relationships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center">
                <History className="mr-2 h-5 w-5 text-blue-500" />
                Our Journey
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-24 font-bold text-blue-600">2010</div>
                  <div>
                    <p className="font-medium">Company Founded</p>
                    <p className="text-muted-foreground">Started with a team of 5 passionate technologists</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-24 font-bold text-blue-600">2013</div>
                  <div>
                    <p className="font-medium">First Major Product Launch</p>
                    <p className="text-muted-foreground">Released our flagship enterprise solution</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-24 font-bold text-blue-600">2016</div>
                  <div>
                    <p className="font-medium">International Expansion</p>
                    <p className="text-muted-foreground">Opened offices in Europe and Asia</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-24 font-bold text-blue-600">2019</div>
                  <div>
                    <p className="font-medium">Industry Recognition</p>
                    <p className="text-muted-foreground">Received multiple awards for innovation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-24 font-bold text-blue-600">Today</div>
                  <div>
                    <p className="font-medium">Global Technology Partner</p>
                    <p className="text-muted-foreground">Serving clients in over 30 countries</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center space-y-6">
            <h2 className="text-2xl font-bold flex items-center justify-center">
              <Heart className="mr-2 h-5 w-5 text-red-500" />
              Join Our Community
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Become part of the ColorTech family and experience the difference our solutions can make for your
              business.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/about/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
