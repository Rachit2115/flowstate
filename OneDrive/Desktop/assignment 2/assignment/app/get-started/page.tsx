"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Check, Star } from "lucide-react"
import Link from "next/link"

export default function GetStarted() {
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Started with
              <span className="gradient-text"> FlowState</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join thousands of teams already using FlowState to achieve their best work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Sign Up
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Create your free account in seconds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  No credit card required. Start with our generous free tier.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Set Up Your Workspace
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Customize your workflow and invite your team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  Import existing data or start fresh with our templates.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  Start Productive Work
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Experience the flow state immediately
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  Focus on what matters while we handle the rest.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card border-white/20 mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Choose Your Plan</CardTitle>
              <CardDescription className="text-gray-300">
                Start free and upgrade as you grow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 glass-card border border-white/20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Starter</h3>
                  <p className="text-2xl font-bold text-white mb-4">Free</p>
                  <ul className="text-sm text-gray-300 space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Up to 3 projects
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Basic analytics
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full glass-card border-white/20 text-white hover:bg-white/10">
                    Get Started
                  </Button>
                </div>

                <div className="text-center p-6 glass-card border-2 border-purple-500 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-4 w-4 text-purple-400 mr-1" />
                    <span className="text-sm text-purple-400 font-medium">Popular</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Professional</h3>
                  <p className="text-2xl font-bold text-white mb-4">$29/mo</p>
                  <ul className="text-sm text-gray-300 space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Unlimited projects
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Team collaboration
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Start Free Trial
                  </Button>
                </div>

                <div className="text-center p-6 glass-card border border-white/20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Enterprise</h3>
                  <p className="text-2xl font-bold text-white mb-4">Custom</p>
                  <ul className="text-sm text-gray-300 space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Everything in Pro
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Custom integrations
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-2" />
                      Priority support
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full glass-card border-white/20 text-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              size="lg" 
              className="h-12 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 btn-glow rounded-full"
              onClick={() => window.location.href = '/sign-up'}
            >
              Start Your Free Journey
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • Cancel anytime • 14-day free trial on Pro
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
