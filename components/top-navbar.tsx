"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function TopNavbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem("user")
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    window.location.href = "/"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold">
            ColorTech
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-white/80 ${
              pathname === "/" ? "text-white underline decoration-2 underline-offset-4" : "text-white/70"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-white/80 ${
              pathname === "/about" ? "text-white underline decoration-2 underline-offset-4" : "text-white/70"
            }`}
          >
            About Us
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className={`text-sm font-medium transition-colors hover:text-white/80 ${
                  pathname === "/dashboard" ? "text-white underline decoration-2 underline-offset-4" : "text-white/70"
                }`}
              >
                Dashboard
              </Link>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/signup">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  Sign Up
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-white text-indigo-600 hover:bg-white/90">Login</Button>
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                pathname === "/" ? "text-white underline decoration-2 underline-offset-4" : "text-white/70"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-white/80 ${
                pathname === "/about" ? "text-white underline decoration-2 underline-offset-4" : "text-white/70"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className={`text-sm font-medium transition-colors hover:text-white/80 ${
                    pathname === "/dashboard" ? "text-white underline decoration-2 underline-offset-4" : "text-white/70"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600 w-full"
                  onClick={() => {
                    handleLogout()
                    setMobileMenuOpen(false)
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/signup" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-indigo-600 w-full"
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link href="/login" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-white text-indigo-600 hover:bg-white/90 w-full">Login</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
