"use client"

import { ArrowLeft, Book, Code, Zap, Shield, Database } from "lucide-react"
import Link from "next/link"

const docSections = [
  {
    title: "Getting Started",
    description: "Quick start guide and basic concepts",
    icon: <Book className="h-6 w-6" />,
    pages: ["Installation", "Quick Start", "Basic Concepts", "First Project"]
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: <Code className="h-6 w-6" />,
    pages: ["Authentication", "Endpoints", "Webhooks", "Rate Limits"]
  },
  {
    title: "Features",
    description: "Detailed feature documentation",
    icon: <Zap className="h-6 w-6" />,
    pages: ["Task Management", "Team Collaboration", "Analytics", "Integrations"]
  },
  {
    title: "Security",
    description: "Security best practices and guidelines",
    icon: <Shield className="h-6 w-6" />,
    pages: ["Data Protection", "Access Control", "Compliance", "Audit Logs"]
  },
  {
    title: "Database",
    description: "Database schema and migrations",
    icon: <Database className="h-6 w-6" />,
    pages: ["Schema Overview", "Migrations", "Queries", "Performance"]
  }
]

export default function Docs() {
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
              <Book className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about FlowState's features, API, and best practices.
            </p>
          </div>

          <div className="mb-12">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {docSections.map((section, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:border-purple-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{section.description}</p>
                <ul className="space-y-2">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {page}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                  API Reference →
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                  SDK Downloads →
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                  Code Examples →
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                  Community Forum →
                </Link>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/help" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Help Center
                </Link>
                <Link href="/contact" className="px-6 py-3 glass-card border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
