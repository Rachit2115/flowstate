"use client"

import { ArrowLeft, Users, Target, Award, Globe } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    description: "Visionary leader with 15+ years in productivity software"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    description: "Tech expert specializing in scalable cloud solutions"
  },
  {
    name: "Michael Park",
    role: "Head of Design",
    description: "Creating beautiful, intuitive user experiences"
  },
  {
    name: "Emma Wilson",
    role: "VP of Engineering",
    description: "Leading our world-class engineering team"
  }
]

export default function About() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

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
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">FlowState</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're on a mission to help teams and individuals achieve their best work through innovative productivity solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className={`glass-card p-8 rounded-2xl text-center card-hover fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">To empower every person and organization to achieve more by eliminating distractions and fostering deep work.</p>
            </div>

            <div className={`glass-card p-8 rounded-2xl text-center card-hover fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Values</h3>
              <p className="text-gray-300">Innovation, simplicity, and customer success drive everything we do. We believe in the power of focused work.</p>
            </div>

            <div className={`glass-card p-8 rounded-2xl text-center card-hover fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-300">To become the world's most trusted productivity platform, helping millions achieve their flow state daily.</p>
            </div>
          </div>

          <div className="glass-card p-12 rounded-3xl mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className={`text-center fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Journey</h3>
              <p className="text-gray-300 mb-8">
                We're always looking for talented individuals who share our passion for productivity and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 btn-glow">
                  View Open Positions
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 glass-card border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
