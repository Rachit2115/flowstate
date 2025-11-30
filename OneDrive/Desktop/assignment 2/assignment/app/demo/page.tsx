"use client"

import { ArrowLeft, Play, Pause, Volume2, Maximize, SkipForward, SkipBack } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen relative">
      <div className="parallax-bg">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Link href="/" className="inline-flex items-center text-white hover:text-purple-400 mb-8 glass-card px-4 py-2 rounded-full border border-white/20">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-6">
              <Play className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Product <span className="gradient-text">Demo</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See FlowState in action. Watch how our platform helps teams achieve peak productivity and focus.
            </p>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden mb-12">
            <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform" onClick={togglePlay}>
                    {isPlaying ? (
                      <Pause className="h-10 w-10 text-white" />
                    ) : (
                      <Play className="h-10 w-10 text-white ml-1" />
                    )}
                  </div>
                  <p className="text-white text-lg font-medium">
                    {isPlaying ? "Demo Video Playing" : "Click to Play Demo"}
                  </p>
                </div>
              </div>

              {/* Video Controls */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-white hover:text-purple-400 transition-colors">
                      <SkipBack className="h-5 w-5" />
                    </button>
                    <button 
                      className="text-white hover:text-purple-400 transition-colors"
                      onClick={togglePlay}
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </button>
                    <button className="text-white hover:text-purple-400 transition-colors">
                      <SkipForward className="h-5 w-5" />
                    </button>
                    <button className="text-white hover:text-purple-400 transition-colors">
                      <Volume2 className="h-5 w-5" />
                    </button>
                  </div>
                  <button className="text-white hover:text-purple-400 transition-colors">
                    <Maximize className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-300">
                    <span>2:15</span>
                    <span>6:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quick Overview</h3>
              <p className="text-gray-300">2-minute overview of FlowState's core features and benefits.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Feature Deep Dive</h3>
              <p className="text-gray-300">Detailed walkthrough of advanced features and customization options.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Customer Success</h3>
              <p className="text-gray-300">Real stories from teams using FlowState to transform their productivity.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to try it yourself?
              </h3>
              <p className="text-gray-300 mb-8">
                Start your free 14-day trial and experience FlowState with no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-started" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 btn-glow">
                  Start Free Trial
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 glass-card border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
