"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (nameRef.current) {
        const scrollY = window.scrollY
        nameRef.current.style.transform = `translateX(${scrollY * 0.1}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background effect */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 transform -skew-y-6 translate-y-32" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-300 filter blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-amber-200 filter blur-3xl animate-pulse"
            style={{ animationDuration: "10s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-slate-200 filter blur-3xl animate-pulse"
            style={{ animationDuration: "12s" }}
          />
        </div>
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZjFmNWY5IiBkPSJNMCAwaDYwdjYwSDB6Ii8+PGNpcmNsZSBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iLjUiIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9zdmc+')]"
          style={{ opacity: 0.3 }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-3/5"
        >
          <h2 className="text-xl md:text-2xl font-light text-slate-600 mb-2">Hello, I'm</h2>

          <h1
            ref={nameRef}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-amber-400 text-transparent bg-clip-text mb-4"
          >
            Sahitya Mandapati
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-amber-200 rounded-full blur-xl opacity-30" />
            <h3 className="text-2xl md:text-3xl font-medium text-slate-700 relative z-10 px-6 py-2">Data Engineer</h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-2xl mx-auto md:mx-0 mt-8 text-slate-600 text-lg"
          >
            I am a goal-driven Data Engineering Specialist with over 7 years of experience in leveraging Python and AWS
            technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Explore my work</span>
              <ArrowDown className="animate-bounce" size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:w-2/5 flex justify-center"
        >
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-300 to-amber-300 rounded-full blur-lg opacity-30 animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <Avatar className="w-64 h-64 border-4 border-white shadow-xl">
              <AvatarImage src="/placeholder.png?height=300&width=300" alt="Sahitya Mandapati" />
              <AvatarFallback className="bg-blue-100 text-4xl text-blue-600">SM</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  )
}
