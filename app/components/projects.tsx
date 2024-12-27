'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Link } from 'lucide-react'

const projects = [
  {
    title: 'Bookride',
    description: 'RESTful API to manage drivers, vehicles, reservations, CRUD and analyzes (occupancy, driver statuses).',
    technologies: ['JAVA', 'REST API', 'Spring boot', 'Hibernate', 'Postgres' , 'Postman','Maven'],
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com/Yassinean/bookride',
  },
  {
    title: 'Citronix',
    description: 'This project consists of creating a secure web application with an MVC architecture, allowing customers to place orders and administrators to manage users (with roles) and products, while integrating CRUD functionalities for products and orders.',
    technologies: ['Spring Boot', 'PostgreSQL', 'REST API'],
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com/Yassinean/task-manager',
  },
  {
    title: 'Mediconnect',
    description: 'The MediConnect clinic offers an interactive platform allowing patients to consult different medical specialties, explore doctors profiles, and make appointments with the doctors of their choice for the current day.',
    technologies: ['Laravel', 'JS', 'MySQL','Docker'],
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com/Yassinean/mediconnect',
  },
  {
    title: 'Management and Reservation of Event Places',
    description: 'This platform will allow users to discover, book and generate tickets for a variety of events, while organizers will have the ability to create and manage their own events.',
    technologies: ['Laravel', 'JS', 'MySQL' , 'Docker'],
    image: '/placeholder.svg?height=400&width=600',
    github: 'https://github.com/Yassinean/evento',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center"
        >
          Released <span className="text-purple-400">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative h-full overflow-hidden rounded-lg bg-black/50">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <Link size={16} />
                      <span className="text-sm">Demo</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

