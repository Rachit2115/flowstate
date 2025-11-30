"use client"

import { ArrowLeft, Shield, Users, Database, FileText } from "lucide-react"
import Link from "next/link"

export default function GDPR() {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              GDPR <span className="gradient-text">Compliance</span>
            </h1>
            <p className="text-lg text-gray-300">
              Our commitment to GDPR compliance and data protection rights.
            </p>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="h-6 w-6 mr-3 text-purple-400" />
                Data Processing Principles
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>FlowState is fully compliant with GDPR requirements. We process personal data according to the following principles:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lawfulness, fairness, and transparency</li>
                  <li>Purpose limitation</li>
                  <li>Data minimization</li>
                  <li>Accuracy</li>
                  <li>Storage limitation</li>
                  <li>Integrity and confidentiality</li>
                  <li>Accountability</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="h-6 w-6 mr-3 text-purple-400" />
                Your GDPR Rights
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>Under GDPR, you have the following rights regarding your personal data:</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Information</h3>
                    <p>You have the right to know what personal data we collect, why we collect it, and how we use it.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Access</h3>
                    <p>You can request a copy of all personal data we hold about you.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Rectification</h3>
                    <p>You can request correction of inaccurate or incomplete personal data.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Erasure</h3>
                    <p>You can request deletion of your personal data under certain circumstances.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Portability</h3>
                    <p>You can request transfer of your data to another service provider.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Object</h3>
                    <p>You can object to processing of your personal data for direct marketing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-purple-400" />
                Legal Basis for Processing
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>We process personal data based on the following legal grounds:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Consent:</strong> When you explicitly consent to us processing your data</li>
                  <li><strong>Contract:</strong> When processing is necessary for our service contract</li>
                  <li><strong>Legal Obligation:</strong> When required by law or regulation</li>
                  <li><strong>Legitimate Interests:</strong> When processing serves our legitimate interests</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Data Breach Notification</h2>
              <div className="text-gray-300 space-y-4">
                <p>In the event of a personal data breach, we will:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Notify affected users within 72 hours of becoming aware of the breach</li>
                  <li>Provide information about the nature of the breach</li>
                  <li>Outline the likely consequences of the breach</li>
                  <li>Describe the measures we've taken to address the breach</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Data Protection Officer</h2>
              <div className="text-gray-300 space-y-4">
                <p>Our Data Protection Officer (DPO) is responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Monitoring GDPR compliance</li>
                  <li>Advising on data protection obligations</li>
                  <li>Cooperating with supervisory authorities</li>
                  <li>Serving as the contact point for data subjects</li>
                </ul>
                <div className="mt-4 space-y-2">
                  <p><strong>Contact:</strong> dpo@flowstate.com</p>
                  <p><strong>Address:</strong> 123 Flow Street, Productivity City, PC 12345</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Contact for GDPR Requests</h2>
              <div className="text-gray-300 space-y-4">
                <p>To exercise your GDPR rights or ask questions about our data protection practices:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@flowstate.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Response Time:</strong> We will respond to your request within 30 days</p>
                </div>
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
