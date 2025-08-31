"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Brush, Film, Book, MapPin, Utensils, Puzzle, BanIcon as Badminton } from "lucide-react"

export default function Hobbies() {
  const hobbies = [
    { name: "Badminton Enthusiast", icon: <Badminton className="h-6 w-6" /> },
    { name: "Culinary Exploration", icon: <Utensils className="h-6 w-6" /> },
    { name: "Film Appreciation", icon: <Film className="h-6 w-6" /> },
    { name: "Literary Pursuits", icon: <Book className="h-6 w-6" /> },
    { name: "Artistic Sketching", icon: <Brush className="h-6 w-6" /> },
    { name: "Puzzle Solving", icon: <Puzzle className="h-6 w-6" /> },
    { name: "Travel and Cultural Exploration", icon: <MapPin className="h-6 w-6" /> },
  ]

  return (
    <section id="hobbies" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 inline-block">
          Hobbies & Interests
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-amber-300 mt-2 rounded-full" />
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(173, 216, 230, 0.3)",
              }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-slate-100 hover:border-blue-200 transition-all duration-300 p-4 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                  {hobby.icon}
                </div>
                <p className="text-slate-700 font-medium">{hobby.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
