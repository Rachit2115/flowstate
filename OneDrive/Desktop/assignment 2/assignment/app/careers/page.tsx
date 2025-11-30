"use client"

import { ArrowLeft, Briefcase, Users, Target, Award } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time"
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time"
  },
  {
    title: "Customer Success Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time"
  }
]

export default function Careers() {
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
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Help us build the future of productivity. We're looking for passionate individuals who want to make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className={`glass-card p-8 rounded-2xl text-center card-hover fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Great Team</h3>
              <p className="text-gray-300">Work with talented, passionate people who support each other's growth.</p>
            </div>

            <div className={`glass-card p-8 rounded-2xl text-center card-hover fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Impactful Work</h3>
              <p className="text-gray-300">Build products that help thousands of teams achieve their best work.</p>
            </div>

            <div className={`glass-card p-8 rounded-2xl text-center card-hover fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Opportunities</h3>
              <p className="text-gray-300">Learn, grow, and advance your career with our development programs.</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <div key={index} className={`glass-card p-6 rounded-2xl border border-white/20 hover:border-purple-400 transition-all duration-300 fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-purple-400">{job.department}</span>
                        <span className="text-gray-400">{job.location}</span>
                        <span className="text-gray-400">{job.type}</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Don't see what you're looking for?
              </h3>
              <p className="text-gray-300 mb-8">
                We're always looking for talented people. Send us your resume and we'll keep you in mind for future openings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 btn-glow">
                  Send Resume
                </Link>
                <a href="mailto:careers@flowstate.com" className="inline-flex items-center justify-center px-6 py-3 glass-card border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                  Email Careers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
