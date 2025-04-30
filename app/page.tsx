import { SideNavigation } from "@/components/side-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle, Zap, Shield, Globe } from "lucide-react"

export default function Home() {
  return (
    <>
      <SideNavigation />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <section className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Welcome to ColorTech Solutions
              </h1>
              <p className="text-xl text-muted-foreground">
                Innovative technology solutions for forward-thinking businesses
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Get Started</Button>
              </Link>
            </div>
          </section>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <CardHeader className="pb-2">
                  <Zap className="h-10 w-10 text-purple-500 mb-2" />
                  <CardTitle className="text-xl">Fast Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our solutions are optimized for speed and efficiency, ensuring your business operates at peak
                    performance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader className="pb-2">
                  <Shield className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-xl">Secure & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Security is our priority. We implement industry-leading practices to keep your data safe and systems
                    reliable.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-pink-200 hover:border-pink-400 transition-colors">
                <CardHeader className="pb-2">
                  <Globe className="h-10 w-10 text-pink-500 mb-2" />
                  <CardTitle className="text-xl">Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    With clients across the globe, our solutions are designed to scale and adapt to diverse business
                    environments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose ColorTech?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p>Industry-leading technology solutions</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p>24/7 customer support</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p>Customizable to your business needs</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p>Transparent pricing with no hidden fees</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p>Regular updates and improvements</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p>Scalable solutions that grow with you</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Ready to transform your business?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who have elevated their business with ColorTech Solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
