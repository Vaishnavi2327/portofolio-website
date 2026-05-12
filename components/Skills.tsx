'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 85, category: 'Programming' },
  { name: 'Scikit-learn', level: 60, category: 'Data Analysis' },
  { name: 'OpenCV', level: 65, category: 'Data Analysis' },
  { name: 'Data Mining', level: 75, category: 'Data Analysis' },
  { name: 'Feature Engineering', level: 70, category: 'Data Analysis' },
  { name: 'SVM', level: 80, category: 'Machine Learning' },
  { name: 'Classification Metrics', level: 75, category: 'Machine Learning' },
  { name: 'SQL', level: 75, category: 'Data Management' },
  { name: 'Data Processing', level: 80, category: 'Data Management' },
  { name: 'Web Scraping', level: 70, category: 'Data Management' },
  { name: 'JavaScript', level: 70, category: 'Web Development' },
  { name: 'React', level: 85, category: 'Web Development' },
  { name: 'Node.js', level: 70, category: 'Web Development' },
  { name: 'REST APIs', level: 85, category: 'Web Development' },
  { name: 'C/C++', level: 75, category: 'Programming' },
  { name: 'Git', level: 80, category: 'Tools' },
  { name: 'Flask', level: 70, category: 'Tools' },
  { name: 'Express', level: 75, category: 'Tools' },
  { name: 'Django REST', level: 70, category: 'Tools' },
  { name: 'JWT', level: 70, category: 'Tools' },
  { name: 'Gemini API', level: 60, category: 'Tools' },
]

export default function Skills() {
  const categories = ['Programming', 'Data Analysis', 'Machine Learning', 'Data Management', 'Web Development', 'Tools']

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
