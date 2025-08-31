"use client"

import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

export default function TechStack() {
  const techStack = [
    { name: "Python", logo: "/images/icon-python.png" },
    { name: "AWS", logo: "/images/icon-aws.png" },
    { name: "Pandas", logo: "/images/icon-pandas.png" },
    { name: "Docker", logo: "/images/icon-docker.png" },
    { name: "Git", logo: "/images/icon-git.svg" },
    { name: "PostgreSQL", logo: "/images/icon-postgresql.svg" },
    { name: "Redshift", logo: "/images/icon-redshift.svg" },
    { name: "DynamoDB", logo: "/images/icon-dynamodb.svg" },
    { name: "Django", logo: "/images/icon-django.svg" },
    { name: "Kubernetes", logo: "/images/icon-kubernetes.svg" },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const items = containerRef.current.querySelectorAll(".tech-item")
      const containerRect = containerRef.current.getBoundingClientRect()

      const mouseX = e.clientX - containerRect.left
      const mouseY = e.clientY - containerRect.top

      items.forEach((item) => {
        const itemElement = item as HTMLElement
        const itemRect = itemElement.getBoundingClientRect()

        const itemX = itemRect.left + itemRect.width / 2 - containerRect.left
        const itemY = itemRect.top + itemRect.height / 2 - containerRect.top

        const distanceX = mouseX - itemX
        const distanceY = mouseY - itemY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        const maxDistance = 300
        const intensity = Math.max(0, 1 - distance / maxDistance)

        const moveX = distanceX * intensity * -0.03
        const moveY = distanceY * intensity * -0.03

        itemElement.style.transform = `translate(${moveX}px, ${moveY}px)`
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 inline-block">
          Tech Stack
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-amber-300 mt-2 rounded-full" />
        </h2>

        <div ref={containerRef} className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(218, 165, 32, 0.3)",
              }}
              className="tech-item relative bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md border border-slate-100 transition-all duration-300"
            >
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20" />
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
              <p className="text-slate-700 font-medium text-center">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
