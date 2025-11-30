"use client"

import { ArrowLeft, CheckCircle, AlertCircle, Clock, Activity } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const services = [
  {
    name: "API Services",
    status: "operational",
    description: "Core API endpoints and authentication"
  },
  {
    name: "Web Application",
    status: "operational",
    description: "Main FlowState web interface"
  },
  {
    name: "Database",
    status: "operational",
    description: "Data storage and retrieval services"
  },
  {
    name: "Email Notifications",
    status: "degraded",
    description: "Email delivery experiencing delays"
  },
  {
    name: "File Uploads",
    status: "operational",
    description: "File storage and processing"
  },
  {
    name: "Analytics",
    status: "operational",
    description: "Reporting and analytics engine"
  }
]

const incidents = [
  {
    title: "Email Service Delays",
    status: "investigating",
    time: "2 hours ago",
    description: "We're investigating delays in email notifications. Users may experience delayed delivery of email alerts and notifications."
  },
  {
    title: "Scheduled Maintenance Complete",
    status: "resolved",
    time: "1 day ago",
    description: "Database maintenance has been completed successfully. All services are now operating normally."
  }
]

export default function Status() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-yellow-400" />
      case "down":
        return <AlertCircle className="h-5 w-5 text-red-400" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational"
      case "degraded":
        return "Degraded Performance"
      case "down":
        return "Service Outage"
      default:
        return "Unknown"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-400"
      case "degraded":
        return "text-yellow-400"
      case "down":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const overallStatus = services.some(s => s.status === "down") ? "down" : 
                        services.some(s => s.status === "degraded") ? "degraded" : "operational"

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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-6">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              System <span className="gradient-text">Status</span>
            </h1>
            <p className="text-lg text-gray-300">
              Real-time status of all FlowState services and systems.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl mb-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                {getStatusIcon(overallStatus)}
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-white">All Systems {getStatusText(overallStatus)}</h2>
                  <p className="text-gray-400">Last updated: {currentTime.toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Uptime this month</p>
                <p className="text-2xl font-bold text-green-400">99.9%</p>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 glass-card rounded-lg">
                  <div className="flex items-center">
                    {getStatusIcon(service.status)}
                    <div className="ml-4">
                      <h3 className="text-white font-medium">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <span className={`font-medium ${getStatusColor(service.status)}`}>
                    {getStatusText(service.status)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Recent Incidents</h3>
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <div key={index} className="border-l-2 border-purple-400 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{incident.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        incident.status === "investigating" 
                          ? "bg-yellow-400/20 text-yellow-400" 
                          : "bg-green-400/20 text-green-400"
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{incident.description}</p>
                    <p className="text-gray-500 text-xs">{incident.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-green-400">120ms</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Error Rate</span>
                    <span className="text-green-400">0.01%</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '99%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Throughput</span>
                    <span className="text-green-400">98%</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Subscribe to Updates</h3>
              <p className="text-gray-300 mb-6">
                Get notified about service disruptions and maintenance windows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
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
