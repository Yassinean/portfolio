'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Frontend Engineer Intern',
    description: 'Assisted in the development of a web-based platform using ReactJs, enhancing interactivity.',
    icon: '👨‍💻'
  },
  {
    title: 'Mobile App Dev - JSM Tech',
    description: 'Designed and developed mobile apps for both iOS & Android platforms using React Native.',
    icon: '📱'
  },
  {
    title: 'Freelance App Dev Project',
    description: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    icon: '🚀'
  },
  {
    title: 'Lead Frontend Developer',
    description: 'Developed and maintained user-facing features using modern frontend technologies.',
    icon: '💼'
  }
]

export default function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          My <span className="text-purple-400">work experience</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg">
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                <p className="text-white/60 text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

