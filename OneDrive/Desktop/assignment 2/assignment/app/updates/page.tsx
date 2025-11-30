"use client"

import { ArrowLeft, Zap, Calendar, Tag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const updates = [
  {
    title: "AI-Powered Task Prioritization",
    version: "v2.4.0",
    date: "2024-01-15",
    category: "Feature",
    description: "Our new AI engine automatically prioritizes your tasks based on deadlines, importance, and your work patterns.",
    features: [
      "Smart task sorting",
      "Priority predictions",
      "Workflow optimization suggestions"
    ]
  },
  {
    title: "Enhanced Team Collaboration",
    version: "v2.3.0",
    date: "2024-01-08",
    category: "Feature",
    description: "New collaboration tools to help teams work together more effectively.",
    features: [
      "Real-time collaboration",
      "Team activity feeds",
      "Shared workspaces"
    ]
  },
  {
    title: "Mobile App Redesign",
    version: "v2.2.0",
    date: "2023-12-28",
    category: "Improvement",
    description: "Completely redesigned mobile app with improved performance and user experience.",
    features: [
      "New user interface",
      "Faster performance",
      "Offline mode"
    ]
  },
  {
    title: "Advanced Analytics Dashboard",
    version: "v2.1.0",
    date: "2023-12-15",
    category: "Feature",
    description: "Powerful analytics to help you understand your productivity patterns.",
    features: [
      "Custom reports",
      "Trend analysis",
      "Team insights"
    ]
  }
]

const categories = ["All", "Feature", "Improvement", "Bug Fix", "Security"]

export default function Updates() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredUpdates = selectedCategory === "All" 
    ? updates 
    : updates.filter(update => update.category === selectedCategory)

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
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Product <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Stay up to date with the latest features, improvements, and announcements from FlowState.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "glass-card border border-white/20 text-gray-300 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredUpdates.map((update, index) => (
              <article key={index} className="glass-card p-8 rounded-3xl">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="glass-card px-3 py-1 rounded-full text-purple-400 text-sm flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {update.category}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {update.date}
                      </span>
                      <span className="glass-card px-3 py-1 rounded-full text-green-400 text-sm">
                        {update.version}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {update.title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {update.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">What's new:</h3>
                      <ul className="space-y-2">
                        {update.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        Learn More
                      </button>
                      <button className="px-6 py-2 glass-card border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                        View Changelog
                      </button>
                    </div>
                  </div>
                  
                  <div className="lg:w-80">
                    <div className="glass-card p-6 rounded-2xl">
                      <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Impact</span>
                          <span className="text-green-400">High</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Adoption</span>
                          <span className="text-purple-400">87%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Feedback</span>
                          <span className="text-yellow-400">4.8/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay in the Loop
              </h3>
              <p className="text-gray-300 mb-8">
                Get the latest updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 btn-glow">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
