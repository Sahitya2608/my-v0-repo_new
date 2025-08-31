"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Cloud, Server, DockIcon as Docker } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Databricks-Powered Enterprise Data Pipeline",
      description:
        "Developed Python-based automation scripts for Databricks data extraction and transformation, achieving a 60% reduction in manual effort.",
      tags: ["Python", "AWS", "Databricks"],
      icon: <Database className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Cloud Solutions Architect",
      description:
        "Spearheaded the development of a serverless data validation ecosystem using AWS Lambda, ensuring 99.9% uptime and reducing manual efforts by 60%.",
      tags: ["AWS", "Lambda", "Serverless"],
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Cloud Data Migration & ETL Modernization",
      description:
        "Led end-to-end data migration pipelines using Python and Azure Blob Storage, ensuring 100% data integrity.",
      tags: ["Python", "Azure", "ETL"],
      icon: <Server className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Docker Registry Automation System",
      description:
        "Engineered a scalable Docker image registry for a telecommunications client, reducing manual efforts by 40%.",
      tags: ["Docker", "Jenkins", "DevOps"],
      icon: <Docker className="h-8 w-8 text-blue-500" />,
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 inline-block">
          Projects
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-amber-300 mt-2 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: hoveredIndex === index ? "0 0 25px rgba(218, 165, 32, 0.3)" : "0 0 0 rgba(0, 0, 0, 0)",
                }}
                className="absolute inset-0 rounded-xl"
              />

              <Card className="h-full bg-white/90 backdrop-blur-sm border-slate-100 hover:border-amber-200 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                    </div>
                    {project.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
