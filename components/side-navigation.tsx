"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Info, BarChart, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function SideNavigation() {
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    home: true,
    about: true,
    dashboard: true,
  })

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  // Determine which section is active based on the pathname
  const getActiveSection = () => {
    if (pathname === "/" || pathname.startsWith("/home")) return "home"
    if (pathname === "/about" || pathname.startsWith("/about/")) return "about"
    if (pathname === "/dashboard" || pathname.startsWith("/dashboard/")) return "dashboard"
    return ""
  }

  const activeSection = getActiveSection()

  return (
    <Sidebar className="border-r" variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarTrigger className="absolute right-2 top-2" />

        {/* Home Section */}
        <SidebarGroup>
          <Collapsible open={openGroups.home} onOpenChange={() => toggleGroup("home")} className="w-full">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </div>
                {openGroups.home ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/"}>
                      <Link href="/">
                        <span>Main Page</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/home/services"}>
                      <Link href="/home/services">
                        <span>Our Services</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/home/products"}>
                      <Link href="/home/products">
                        <span>Products</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* About Section */}
        <SidebarGroup>
          <Collapsible open={openGroups.about} onOpenChange={() => toggleGroup("about")} className="w-full">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <Info className="mr-2 h-4 w-4" />
                  <span>About Us</span>
                </div>
                {openGroups.about ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/about"}>
                      <Link href="/about">
                        <span>Company Overview</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/about/team"}>
                      <Link href="/about/team">
                        <span>Our Team</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/about/history"}>
                      <Link href="/about/history">
                        <span>Company History</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/about/contact"}>
                      <Link href="/about/contact">
                        <span>Contact Us</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* Dashboard Section (only visible when logged in) */}
        <SidebarGroup
          className={cn(
            "transition-all duration-300",
            typeof window !== "undefined" && localStorage.getItem("user") ? "block" : "hidden",
          )}
        >
          <Collapsible open={openGroups.dashboard} onOpenChange={() => toggleGroup("dashboard")} className="w-full">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <BarChart className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </div>
                {openGroups.dashboard ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                      <Link href="/dashboard">
                        <span>Overview</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/analytics"}>
                      <Link href="/dashboard/analytics">
                        <span>Analytics</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/reports"}>
                      <Link href="/dashboard/reports">
                        <span>Reports</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/settings"}>
                      <Link href="/dashboard/settings">
                        <span>Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
