"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 inline-block">
          Get In Touch
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-amber-300 mt-2 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium text-slate-700 mb-6">Contact Me</h3>
            <p className="text-slate-600 mb-8">
              Feel free to reach out if you're looking for a data engineer, have questions, or just want to connect.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border-slate-200"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border-slate-200"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-white border-slate-200"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                )}
              </Button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 font-medium mt-4 text-center"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-medium text-slate-700 mb-6">Connect With Me</h3>
              <p className="text-slate-600 mb-8">
                Let's connect on social platforms or directly through email to discuss potential collaborations.
              </p>

              <div className="space-y-6">
                <Card className="bg-white/90 backdrop-blur-sm border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-700">Email</h4>
                      <a
                        href="mailto:sahityamandapati@gmail.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        sahityamandapati@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Github size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-700">GitHub</h4>
                      <a
                        href="https://github.com/sahityamandapati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                      >
                        github.com/sahityamandapati
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-700">LinkedIn</h4>
                      <a
                        href="https://linkedin.com/in/sahityamandapati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                      >
                        linkedin.com/in/sahityamandapati
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <motion.div
              className="hidden lg:block mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-amber-100 rounded-xl blur-lg opacity-70" />
                <div className="relative border-2 border-blue-100 rounded-xl p-6 bg-white/60 backdrop-blur-sm">
                  <p className="italic text-slate-600 leading-relaxed">
                    "Passionate about transforming complex data challenges into efficient, scalable solutions. Let's
                    collaborate to bring your data engineering vision to life."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
