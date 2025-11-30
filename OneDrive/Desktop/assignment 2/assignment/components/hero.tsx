"use client"

import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="parallax-bg">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-slate-700/20 to-slate-600/20 backdrop-blur-md border border-white/20 mb-8 shadow-lg">
                <Sparkles className="h-4 w-4 mr-2 text-slate-400" />
                <span className="text-sm text-primary font-bold drop-shadow-lg">Introducing FlowState 2.0</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                <div className="relative">
                  <span className="block text-white mb-2 drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>Achieve Your</span>
                  <div className="relative inline-block">
                    <span className="gradient-text-enhanced drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.3s'}}>Best Work</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl animate-pulse"></div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50"></div>
                  <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce shadow-lg shadow-green-400/50"></div>
                </div>
              </h1>
              
              <p className="text-lg md:text-xl text-description mb-12 max-w-3xl mx-auto leading-relaxed glass-card p-6 rounded-2xl drop-shadow-lg">
                The all-in-one productivity platform that helps you focus, organize, and accomplish more in less time. 
                Designed for modern teams who value deep work and meaningful progress.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                <Button size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 btn-glow rounded-full" asChild>
                  <Link href="/get-started">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-base glass-card text-white border-white/20 hover:bg-white/10 rounded-full" asChild>
                  <Link href="/demo">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center glass-card p-6 rounded-2xl card-hover">
                  <div className="text-3xl font-bold gradient-text-purple mb-2 drop-shadow-lg">10K+</div>
                  <div className="text-sm text-white font-medium">Active Users</div>
                </div>
                <div className="text-center glass-card p-6 rounded-2xl card-hover">
                  <div className="text-3xl font-bold gradient-text-purple mb-2 drop-shadow-lg">99.9%</div>
                  <div className="text-sm text-white font-medium">Uptime</div>
                </div>
                <div className="text-center glass-card p-6 rounded-2xl card-hover">
                  <div className="text-3xl font-bold gradient-text-purple mb-2 drop-shadow-lg">4.9★</div>
                  <div className="text-sm text-white font-medium">User Rating</div>
                </div>
              </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  )
}
