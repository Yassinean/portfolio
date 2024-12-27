'use client'

import { motion } from 'framer-motion'

const professionalEvents = [
  {
    year: '01-05-2024 -> 01-07-2024',
    title: 'PFA internship',
    company: 'ALLOBABA'
  }
]

export default function ProfessionalTimeline() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center"
        >
          Professional <span className="text-purple-400">Journey</span>
        </motion.h2>
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-purple-400/20 -translate-x-1/2" />
          
          {/* Timeline items */}
          {professionalEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-purple-400 rounded-full transform -translate-x-1/2" />
              
              {/* Content */}
              <div className={`ml-12 sm:ml-0 ${
                index % 2 === 0 ? 'sm:mr-[50%] sm:pr-8' : 'sm:ml-[50%] sm:pl-8'
              } w-full sm:w-[calc(50%-20px)]`}>
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg">
                  <span className="text-purple-400 font-bold block mb-2">{event.year}</span>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{event.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{event.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
