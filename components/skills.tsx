"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const skills = [
    { name: "Python Programming", level: 90 },
    { name: "AWS Cloud Solutions Architecture", level: 85 },
    { name: "Data Integration & Analytics", level: 80 },
    { name: "Database Management", level: 80 },
    { name: "ETL Tools", level: 75 },
    { name: "CI/CD & DevOps", level: 70 },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={sectionRef} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 inline-block">
          Skills
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-amber-300 mt-2 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-slate-100 hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-slate-700">{skill.name}</h3>
                <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
              </div>

              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-amber-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
