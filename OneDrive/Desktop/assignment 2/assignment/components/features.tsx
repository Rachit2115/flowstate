"use client"

import { Zap, BarChart3, Lock, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { useEffect, useState } from "react"

const features = [
  {
    icon: <Zap className="h-6 w-6 text-purple-400" />,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance to keep you in the flow state without any lag or interruptions."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
    title: "Data-Driven Insights",
    description: "Get actionable insights and analytics to understand your work patterns and improve productivity."
  },
  {
    icon: <Lock className="h-6 w-6 text-purple-400" />,
    title: "Enterprise Security",
    description: "Your data is protected with industry-leading security measures and end-to-end encryption."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-400" />,
    title: "Smart Automation",
    description: "Automate repetitive tasks and let AI handle the busywork while you focus on what matters."
  }
]

export function Features() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="features" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to be
            <span className="gradient-text"> productive</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            FlowState combines powerful features with an intuitive interface to help you work smarter, not harder.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-2xl card-hover fade-in ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to transform your workflow?
            </h3>
            <p className="text-gray-300 mb-8">
              Join thousands of teams already using FlowState to achieve their best work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-green-400 font-medium">✓ Free forever</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-blue-400 font-medium">✓ No credit card required</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-purple-400 font-medium">✓ Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
