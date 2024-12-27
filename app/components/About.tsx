'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-lg mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a passionate web developer with a keen eye for design. I love creating beautiful, functional websites that provide great user experiences. With a background in both front-end and back-end technologies, I bring a holistic approach to web development.
        </motion.p>
        <motion.p 
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book. I'm always eager to take on new challenges and learn new skills.
        </motion.p>
      </div>
    </section>
  )
}

export default About

