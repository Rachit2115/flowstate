"use client"

import { ArrowLeft, HelpCircle, Search, MessageCircle, Book, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const helpCategories = [
  {
    title: "Getting Started",
    description: "New to FlowState? Start here.",
    icon: <Book className="h-6 w-6" />,
    articles: ["Creating an account", "First project setup", "Basic navigation", "Team invitation"]
  },
  {
    title: "Account & Billing",
    description: "Manage your account and subscription.",
    icon: <Mail className="h-6 w-6" />,
    articles: ["Upgrade plans", "Payment methods", "Invoice history", "Cancel subscription"]
  },
  {
    title: "Features",
    description: "Learn about FlowState features.",
    icon: <HelpCircle className="h-6 w-6" />,
    articles: ["Task management", "Time tracking", "Analytics", "Integrations"]
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions.",
    icon: <MessageCircle className="h-6 w-6" />,
    articles: ["Login problems", "Sync issues", "Performance", "Error messages"]
  }
]

const popularArticles = [
  "How to invite team members",
  "Setting up your first project",
  "Understanding analytics",
  "API rate limits",
  "Data export options"
]

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("")

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
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Help <span className="gradient-text">Center</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions, get support, and learn how to make the most of FlowState.
            </p>
          </div>

          <div className="mb-12">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {helpCategories.map((category, index) => (
                  <div key={index} className="glass-card p-6 rounded-2xl hover:border-purple-400 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white mr-4">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        <p className="text-gray-400 text-sm">{category.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                            {article}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Popular Articles</h2>
              <div className="glass-card p-6 rounded-2xl">
                <ul className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Live Chat</h3>
              <p className="text-gray-300 mb-4">Chat with our support team in real-time.</p>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Start Chat
              </button>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email Support</h3>
              <p className="text-gray-300 mb-4">Get help via email within 24 hours.</p>
              <a href="mailto:support@flowstate.com" className="inline-block px-6 py-2 glass-card border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Email Us
              </a>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-gray-300 mb-4">Get help from other FlowState users.</p>
              <Link href="/community" className="inline-block px-6 py-2 glass-card border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
