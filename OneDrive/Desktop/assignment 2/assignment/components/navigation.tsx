"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { auth } from "@/lib/auth"
import { User, LogOut } from "lucide-react"

export function Navigation() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    const checkAuth = () => {
      auth.initialize() // Initialize auth first
      const currentUser = auth.getCurrentUser()
      setUser(currentUser)
      setIsLoading(false)
    }

    checkAuth()
    
    // Listen for storage changes (for multi-tab support)
    const handleStorageChange = () => {
      checkAuth()
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const handleSignOut = () => {
    auth.signOut()
    setUser(null)
    window.location.reload()
  }

  if (isLoading) {
    return (
      <header className="fixed top-0 inset-x-0 z-50 glass-dark border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold gradient-text">
                  FlowState
                </span>
              </Link>
            </div>
            <div className="w-20 h-8 bg-white/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-dark border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">
                FlowState
              </span>
            </Link>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <Link
                href="#features"
                className="text-secondary hover:text-primary text-sm font-medium transition-colors hover:scale-105 transform"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-secondary hover:text-primary text-sm font-medium transition-colors hover:scale-105 transform"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-secondary hover:text-primary text-sm font-medium transition-colors hover:scale-105 transform"
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="text-secondary hover:text-primary text-sm font-medium transition-colors hover:scale-105 transform"
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-full border border-white/20">
                  <User className="h-4 w-4 text-primary" />
                  <span className="text-primary text-sm font-medium">{user.name}</span>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-secondary hover:bg-white/10 hover:text-primary glass-card border-white/20"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" className="text-secondary hover:bg-white/10 hover:text-primary glass-card border-white/20" asChild>
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 btn-glow rounded-full" asChild>
                  <Link href="/get-started">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
