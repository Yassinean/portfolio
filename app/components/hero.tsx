'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xs sm:text-sm text-purple-400 mb-4"
      >
        DYNAMIC WEB MAGIC WITH NEXT.JS
      </motion.span>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
      >
        Transforming Concepts into{' '}
        <span className="text-purple-400">Seamless User Experiences</span>
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm sm:text-base md:text-lg text-white/60 mb-8 max-w-2xl"
      >
        Hi! I&apos;m a Full Stack Developer based in Morocco. With a passion for creating intuitive and efficient web solutions, I bring ideas to life through code. My expertise spans both front-end and back-end technologies, allowing me to build comprehensive, scalable applications.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full text-white/90 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          Get in Touch
        </a>
        <motion.a
          href="/yassine_hanach_cv.pdf"
          download="YassineHanach_CV.pdf"
          className="px-6 py-3 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Download size={18} />
          Download CV
        </motion.a>
      </motion.div>
    </section>
  )
}

