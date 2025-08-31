"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Pragati Engineering College",
      year: "2017",
    },
  ]

  return (
    <section id="education">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 inline-block">
          Education
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-amber-300 mt-2 rounded-full" />
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-slate-100 hover:border-blue-200 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-800">{edu.degree}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium">{edu.institution}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <Calendar size={14} />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
