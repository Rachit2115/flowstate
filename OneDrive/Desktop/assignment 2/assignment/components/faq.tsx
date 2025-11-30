"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

const faqs = [
  {
    question: "What is FlowState?",
    answer: "FlowState is an all-in-one productivity platform designed to help you focus, organize, and accomplish more in less time. It combines powerful features with an intuitive interface to help you work smarter, not harder."
  },
  {
    question: "How does the free trial work?",
    answer: "Start with our generous free tier that includes up to 3 projects and basic analytics. If you need more features, you can upgrade to Professional with a 14-day free trial - no credit card required."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any differences."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-leading security measures including end-to-end encryption, regular security audits, and compliance with data protection regulations like GDPR and CCPA."
  },
  {
    question: "Do you offer team discounts?",
    answer: "Yes! We offer volume discounts for teams of 5 or more. Contact our sales team for custom pricing based on your team size and needs."
  },
  {
    question: "What integrations are available?",
    answer: "FlowState integrates with popular tools like Slack, Google Workspace, Microsoft 365, GitHub, and many more. We also offer a robust API for custom integrations."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Sign up for a free account, follow our quick onboarding process, and start using FlowState immediately. No credit card required for the free tier."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer email support for all users, with priority support for Professional and Enterprise customers. Enterprise plans also include dedicated account managers and 24/7 phone support."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked
              <span className="gradient-text"> Questions</span>
            </h2>
            <p className="text-lg text-gray-300">
              Got questions? We've got answers. If you don't see what you're looking for, feel free to reach out to our support team.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl border border-white/20 overflow-hidden transition-all duration-200 hover:shadow-lg fade-in ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Our support team is here to help you get the most out of FlowState.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@flowstate.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 btn-glow"
                >
                  Email Support
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 glass-card border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
