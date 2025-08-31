"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function About() {
  const bio = {
    name: "Sahitya Mandapati",
    title: "Data Engineer",
    description: [
      "I am a goal-driven Data Engineering Specialist with over 7 years of experience in leveraging Python and AWS technologies.",
      "I have successfully optimized data pipelines, increasing data processing efficiency by 30%.",
      "My expertise lies in designing scalable data architectures, automating workflows, and delivering innovative solutions to transform data analytics and engineering processes.",
    ],
    contacts: {
      email: "sahityamandapati@gmail.com",
      phone: "+91 85229 58679",
      location: "Hyderabad, Telangana, India",
    },
  }

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 inline-block">
          About Me
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-amber-300 mt-2 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Diagonal divider */}
          <div className="absolute hidden md:block h-full w-1 bg-gradient-to-b from-blue-200 via-slate-200 to-amber-200 left-1/2 transform -translate-x-1/2 -rotate-12 rounded-full" />

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-100"
          >
            <h3 className="text-xl font-medium text-slate-700 mb-4">Professional Summary</h3>
            <div className="space-y-4">
              {bio.description.map((paragraph, index) => (
                <p key={index} className="text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-100"
          >
            <h3 className="text-xl font-medium text-slate-700 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href={`mailto:${bio.contacts.email}`}
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {bio.contacts.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <a
                    href={`tel:${bio.contacts.phone}`}
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {bio.contacts.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-slate-700">{bio.contacts.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
