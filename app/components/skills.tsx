'use client'

import { motion } from 'framer-motion'
import { Database, Server, Globe, Layout, Code, GitGraphIcon as Git, Terminal, Monitor, Cpu, Settings, Box, Cloud, FileCode, Layers } from 'lucide-react'

const skillCategories = [
  {
    title: 'BACK END',
    icon: Server,
    skills: [
      { name: 'Java', icon: FileCode },
      { name: 'Spring', icon: Layers },
      { name: 'PHP', icon: Code },
      { name: 'Laravel', icon: Box },
      { name: 'REST API', icon: Globe }
    ]
  },
  {
    title: 'FRONT END',
    icon: Layout,
    skills: [
      { name: 'React', icon: '../icons/angular.svg' },
      { name: 'Angular', icon: Box },
      { name: 'Next.js', icon: Globe },
      { name: 'Tailwind', icon: Layout },
      { name: 'Bootstrap', icon: Monitor }
    ]
  },
  {
    title: 'DATABASE',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'Oracle', icon: Database },
      { name: 'H2', icon: Database }
    ]
  },
  {
    title: 'DEVOPS & TOOLS',
    icon: Settings,
    skills: [
      { name: 'Jenkins', icon: Settings },
      { name: 'Selenium', icon: Terminal },
      { name: 'Postman', icon: Globe },
      { name: 'VS Code', icon: Code },
      { name: 'IntelliJ', icon: Code },
      { name: 'Eclipse', icon: Monitor },
      { name: 'Git', icon: Git },
      { name: 'Docker', icon: Cloud }
    ]
  },
  {
    title: 'OPERATING SYSTEMS',
    icon: Cpu,
    skills: [
      { name: 'Linux', icon: Terminal },
      { name: 'Windows', icon: Monitor }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
          Technical <span className="text-purple-400">Skills</span>
        </h2>
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <category.icon className="w-5 h-5 text-purple-400" />
                <h3 className="text-sm text-white/60">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex flex-col items-center gap-3 w-full"
                  >
                    <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center group hover:bg-purple-500/20 transition-colors duration-300">
                      <skill.icon className="w-8 h-8 text-white/60 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-white/80 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

