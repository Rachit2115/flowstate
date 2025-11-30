"use client"

import { ArrowLeft, Cookie } from "lucide-react"
import Link from "next/link"

export default function CookiePolicy() {
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
              <Cookie className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-gray-300">
              This policy explains how FlowState uses cookies and similar technologies to enhance your experience.
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <div className="text-gray-300 space-y-4">
                <p>Cookies are small text files that websites place on your device when you visit. They help us remember your preferences and improve your experience.</p>
                <p>We use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your login information</li>
                  <li>Understand how you use our services</li>
                  <li>Personalize your experience</li>
                  <li>Provide security features</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <div className="text-gray-300 space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                    <p>Required for basic website functionality, such as navigation and access to secure areas.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Performance Cookies</h3>
                    <p>Help us understand how visitors interact with our website by collecting and reporting information.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                    <p>Enable enhanced functionality and personalization, such as remembering your preferences.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                    <p>Used to deliver advertisements that are relevant to you and your interests.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
              <div className="text-gray-300 space-y-4">
                <p>You can control and manage cookies in various ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser settings to block or delete cookies</li>
                  <li>Our cookie consent banner when you first visit</li>
                  <li>Privacy settings in your account dashboard</li>
                </ul>
                <p>Please note that blocking certain cookies may affect your experience of our website.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <div className="text-gray-300 space-y-4">
                <p>We may use third-party services that place cookies on your device. These include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Analytics providers (e.g., Google Analytics)</li>
                  <li>Social media platforms</li>
                  <li>Payment processors</li>
                  <li>Customer support tools</li>
                </ul>
                <p>These third-party services have their own privacy policies and cookie policies.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <div className="text-gray-300 space-y-4">
                <p>We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
                <p>Any changes will be posted on this page with an updated revision date.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
