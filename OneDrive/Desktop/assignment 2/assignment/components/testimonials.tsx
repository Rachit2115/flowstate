"use client"

import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "/avatars/01.png",
    content:
      "FlowState has completely transformed how our team works. We've seen a 40% increase in productivity since we started using it.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder at StartupX",
    avatar: "/avatars/02.png",
    content:
      "The intuitive interface and powerful features make this the best productivity tool I've used in my 10-year career.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director at BrandCo",
    avatar: "/avatars/03.png",
    content:
      "I was skeptical at first, but FlowState has exceeded all my expectations. The automation features alone have saved me hours every week.",
    rating: 4
  }
]

export function Testimonials() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in ${visible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by
            <span className="gradient-text"> thousands</span> of professionals
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join companies of all sizes that use FlowState to boost their
            productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl card-hover fade-in ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to join them?
            </h3>
            <p className="text-gray-300 mb-8">
              Start your free trial today and see why thousands of professionals choose FlowState.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-green-400 font-medium">✓ 14-day free trial</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-blue-400 font-medium">✓ No credit card required</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-purple-400 font-medium">✓ Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
