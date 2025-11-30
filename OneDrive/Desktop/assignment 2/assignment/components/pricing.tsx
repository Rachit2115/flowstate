"use client"

import { Check, Zap, Star, X, User, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started",
    price: {
      monthly: 9,
      yearly: 90,
    },
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Professional",
    description: "Best for growing teams",
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Team collaboration",
      "API access",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: {
      monthly: 99,
      yearly: 990,
    },
    features: [
      "Everything in Pro",
      "Unlimited users",
      "Advanced security",
      "Custom features",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [visible, setVisible] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handlePlanClick = (plan: any) => {
    console.log('Plan clicked:', plan.name)
    setSelectedPlan(plan)
    setShowModal(true)
    setError("")
    console.log('Modal should show:', true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (!formData.name || !formData.email) {
      setError("Name and email are required")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      console.log("Plan selected:", selectedPlan.name)
      console.log("Form data:", formData)
      
      // Reset form and close modal
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      })
      setShowModal(false)
      setIsLoading(false)
      
      // Show success message (you could add a toast notification here)
      alert("Thank you for your interest! We'll contact you soon.")
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="pricing" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Choose your
            <span className="gradient-text"> perfect plan</span>
          </h2>
          <p className="text-lg text-description max-w-2xl mx-auto mb-8">
            Start with our free plan and upgrade as you grow. No hidden fees.
          </p>
          
          <div className="inline-flex glass-card p-1 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-primary px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-3xl relative fade-in ${visible ? 'visible' : ''} ${
                plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : 'card-hover'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-muted mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ${billingCycle === "monthly" ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                  </span>
                  <span className="text-muted">/month</span>
                  {billingCycle === "yearly" && (
                    <div className="text-sm text-green-400 mt-1">
                      ${plan.price.yearly} billed yearly
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-description">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handlePlanClick(plan)}
                className={`w-full h-12 rounded-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 btn-glow"
                    : "glass-card border-white/20 text-primary hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-description mb-6">
              Our team is here to help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="glass-card border-white/20 text-primary hover:bg-white/10 rounded-full">
                Schedule a Demo
              </Button>
              <Button className="glass-card border-white/20 text-primary hover:bg-white/10 rounded-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-md glass-card p-8 rounded-3xl border-white/10 max-h-[90vh] overflow-y-auto bg-white/5">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted hover:text-primary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Get Started with {selectedPlan.name}
              </h3>
              <p className="text-muted">
                {selectedPlan.description}
              </p>
              <div className="mt-4 text-3xl font-bold text-primary">
                ${billingCycle === "monthly" ? selectedPlan.price.monthly : Math.floor(selectedPlan.price.yearly / 12)}
                <span className="text-lg text-muted">/month</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-primary placeholder-subtle focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-primary placeholder-subtle focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-muted flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-primary placeholder-subtle focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-muted">
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-primary placeholder-subtle focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-primary placeholder-subtle focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                  placeholder="Tell us about your needs or any questions you have..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 btn-glow"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : `Start ${selectedPlan.name} Plan`}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-subtle">
              <p>By submitting this form, you agree to our Terms of Service and Privacy Policy.</p>
              <p className="mt-2">We'll contact you within 24 hours to set up your account.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
