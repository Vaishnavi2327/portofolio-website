'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Vaishnavi C R</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Data Analyst | Machine Learning Enthusiast | Python Developer
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Passionate about extracting insights from data and building intelligent solutions. 
            I love turning complex datasets into meaningful stories through machine learning, 
            statistical analysis, and data visualization.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <motion.a
              href="https://github.com/Vaishnavi2327"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Github size={24} className="text-gray-700" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/crvaishnavi"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Linkedin size={24} className="text-blue-600" />
            </motion.a>
            <motion.a
              href="mailto:crv10315@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mail size={24} className="text-gray-700" />
            </motion.a>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowDown size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
