"use client"

import { ArrowLeft, Users, MessageSquare, ThumbsUp, Calendar, Hash } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const discussions = [
  {
    title: "Best practices for team collaboration",
    author: "Sarah Johnson",
    category: "Tips & Tricks",
    replies: 24,
    likes: 156,
    lastActivity: "2 hours ago",
    preview: "Share your favorite strategies for keeping teams aligned and productive..."
  },
  {
    title: "Feature request: Custom dashboard widgets",
    author: "Michael Chen",
    category: "Feature Requests",
    replies: 18,
    likes: 89,
    lastActivity: "5 hours ago",
    preview: "It would be great to have the ability to customize dashboard layouts..."
  },
  {
    title: "How do you handle time tracking?",
    author: "Emma Wilson",
    category: "Workflows",
    replies: 32,
    likes: 201,
    lastActivity: "1 day ago",
    preview: "Looking for insights on how different teams approach time tracking..."
  },
  {
    title: "Integration with Slack - Tips and tricks",
    author: "Alex Park",
    category: "Integrations",
    replies: 15,
    likes: 67,
    lastActivity: "3 days ago",
    preview: "Here are some ways I've optimized our Slack integration..."
  }
]

const categories = ["All", "Tips & Tricks", "Feature Requests", "Workflows", "Integrations", "Announcements"]

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState("All")
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
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FlowState <span className="gradient-text">Community</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with thousands of FlowState users, share ideas, and get help from our amazing community.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-3">
              <div className="glass-card p-6 rounded-2xl mb-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    />
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    New Discussion
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "glass-card border border-white/20 text-gray-300 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <article key={index} className="glass-card p-6 rounded-2xl hover:border-purple-400 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-400 transition-colors cursor-pointer">
                          {discussion.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">
                          {discussion.preview}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="text-purple-400">{discussion.author}</span>
                          <span className="glass-card px-2 py-1 rounded-full text-xs">
                            {discussion.category}
                          </span>
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Community Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Members</span>
                    <span className="text-white font-bold">12,453</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Discussions</span>
                    <span className="text-white font-bold">3,892</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Solutions</span>
                    <span className="text-white font-bold">8,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Online Now</span>
                    <span className="text-green-400 font-bold">234</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Top Contributors</h3>
                <div className="space-y-3">
                  {["Sarah J.", "Michael C.", "Emma W.", "Alex P."].map((name, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {name[0]}
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{name}</p>
                        <p className="text-gray-400 text-xs">{100 - index * 20} contributions</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["productivity", "tips", "integrations", "features", "workflow"].map((tag) => (
                    <span key={tag} className="glass-card px-3 py-1 rounded-full text-xs text-gray-300 hover:text-purple-400 cursor-pointer transition-colors">
                      <Hash className="inline h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
