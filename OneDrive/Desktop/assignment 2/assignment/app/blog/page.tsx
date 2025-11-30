"use client"

import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const blogPosts = [
  {
    title: "5 Productivity Hacks for Remote Teams",
    excerpt: "Discover proven strategies to keep your remote team focused and productive in today's digital workplace.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Productivity"
  },
  {
    title: "The Science Behind Flow State",
    excerpt: "Understanding the psychology of deep work and how to create conditions that foster peak performance.",
    author: "Dr. Michael Chen",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Science"
  },
  {
    title: "New Features: AI-Powered Task Management",
    excerpt: "Introducing our latest AI features that automatically organize and prioritize your tasks for maximum efficiency.",
    author: "Emma Wilson",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Updates"
  },
  {
    title: "Building a Culture of Deep Work",
    excerpt: "How leading companies are implementing flow state principles to transform their organizational culture.",
    author: "Alex Park",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Culture"
  }
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Productivity", "Science", "Updates", "Culture"]

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FlowState <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Insights, tips, and stories about productivity, deep work, and building better teams.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article key={index} className="glass-card p-6 rounded-2xl hover:border-purple-400 transition-all duration-300">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="glass-card px-3 py-1 rounded-full text-purple-400 text-xs">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300 mb-8">
                Get the latest productivity tips and FlowState updates delivered to your inbox.
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
