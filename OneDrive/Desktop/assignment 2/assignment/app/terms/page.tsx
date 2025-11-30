"use client"

import { ArrowLeft, FileText, Scale, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
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
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-gray-300">
              These terms govern your use of FlowState's services and products.
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Scale className="h-6 w-6 mr-3 text-purple-400" />
                Agreement to Terms
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>By accessing and using FlowState, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                <p>If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <div className="text-gray-300 space-y-4">
                <p>Permission is granted to temporarily download one copy of FlowState for personal, non-commercial transitory viewing only.</p>
                <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or other proprietary notations</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 mr-3 text-purple-400" />
                Disclaimer
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>The materials on FlowState are provided on an 'as is' basis. FlowState makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <div className="text-gray-300 space-y-4">
                <p>In no event shall FlowState or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FlowState.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Terms of Use Modifications</h2>
              <div className="text-gray-300 space-y-4">
                <p>FlowState may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
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
