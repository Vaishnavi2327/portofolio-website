'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <div className="text-white text-6xl font-bold">VC</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Science & Machine Learning Student
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate B.Tech student in Computer Science and Engineering at IIITDM Kurnool 
              (2023–2027) with a strong focus on data analysis, machine learning, and statistical modeling. 
              My journey in data science has been driven by extracting meaningful insights from complex datasets 
              and building intelligent systems.
            </p>
            <p className="text-gray-600 mb-6">
              I have hands-on experience in machine learning using scikit-learn and OpenCV, data processing 
              with Python, and building data pipelines. My projects include handwriting recognition with 82% accuracy, 
              ESG document automation processing 200+ files, and developing data-driven web applications. 
              I'm passionate about applying statistical methods and machine learning algorithms to solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">IIITDM Kurnool</p>
                <p className="text-gray-500 text-sm">B.Tech CSE (2023–2027)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600">Internship + Projects</p>
                <p className="text-gray-500 text-sm">FINACPLUS + 3 Major Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
