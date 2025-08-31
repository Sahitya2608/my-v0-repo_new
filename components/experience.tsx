"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experience = [
    {
      title: "Data Engineering Specialist",
      company: "Accenture",
      period: "March 2022 — Present",
      description:
        "Developed scalable data pipeline architectures, deployed serverless workflows, and utilized Python and APIs to construct robust data pipelines.",
    },
    {
      title: "System Engineer",
      company: "Tata Consultancy Services",
      period: "July 2017 — May 2021",
      description:
        "Designed system architectures, automated containerization workflows, and led cross-functional collaboration to align deliverables with client requirements.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 inline-block">
          Experience
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-amber-300 mt-2 rounded-full" />
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-amber-300 hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="md:w-8 md:h-8 bg-white rounded-full border-2 border-blue-400 flex items-center justify-center relative z-10 shrink-0 hidden md:flex">
                  <Briefcase size={16} className="text-blue-500" />
                </div>

                <Card className="w-full bg-white/90 backdrop-blur-sm border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                      <div>
                        <CardTitle className="text-xl text-slate-800">{job.title}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium">{job.company}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <Calendar size={14} />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
