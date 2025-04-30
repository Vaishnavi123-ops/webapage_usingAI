"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SideNavigation } from "@/components/side-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Users, FileText, Settings, Bell, Calendar, ArrowUpRight } from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState<{ username: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (!storedUser) {
      router.push("/login")
      return
    }

    try {
      setUser(JSON.parse(storedUser))
    } catch (error) {
      console.error("Failed to parse user data:", error)
      localStorage.removeItem("user")
      router.push("/login")
    }

    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <>
        <SideNavigation />
        <main className="flex-1 p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            <p>Loading...</p>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <SideNavigation />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user?.username}</h1>
              <p className="text-muted-foreground">Here's what's happening with your account today.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-0">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <FileText className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+3 new this week</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
                <Calendar className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-muted-foreground">+7% completion rate</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-0">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <BarChart className="h-4 w-4 text-amber-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,345</div>
                <p className="text-xs text-muted-foreground">+18% from last quarter</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your activity over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0">
                        <div
                          className={`rounded-full p-2 ${
                            i % 3 === 0 ? "bg-purple-100" : i % 3 === 1 ? "bg-blue-100" : "bg-green-100"
                          }`}
                        >
                          <ArrowUpRight
                            className={`h-4 w-4 ${
                              i % 3 === 0 ? "text-purple-600" : i % 3 === 1 ? "text-blue-600" : "text-green-600"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {i % 3 === 0 ? "Project updated" : i % 3 === 1 ? "New comment added" : "Task completed"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {i % 3 === 0
                              ? "You updated the project status"
                              : i % 3 === 1
                                ? "New feedback received on your design"
                                : "You marked a task as complete"}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {i} {i === 1 ? "hour" : "hours"} ago
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>Your performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Analytics charts would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                  <CardDescription>View and download reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">Monthly Performance Report</p>
                        <p className="text-sm text-muted-foreground">April 2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">Quarterly Financial Summary</p>
                        <p className="text-sm text-muted-foreground">Q1 2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Annual Review</p>
                        <p className="text-sm text-muted-foreground">2022</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  )
}
