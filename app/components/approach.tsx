'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    number: '1',
    title: 'Planning & Strategy',
    description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
  },
  {
    number: '2',
    title: 'Design & Development',
    description: 'Creating intuitive interfaces while writing clean, efficient code. Focus on responsive design and optimal performance.'
  },
  {
    number: '3',
    title: 'Testing & Launch',
    description: 'Rigorous testing across devices and browsers. Smooth deployment and post-launch support to ensure everything runs perfectly.'
  }
]

export default function Approach() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          My <span className="text-purple-400">approach</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg h-full">
                <div className="text-purple-400 text-sm mb-4">Phase {phase.number}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

