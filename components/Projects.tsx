'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Handwriting Recognition',
    description: 'Built a handwriting classification system using SVM (RBF kernel) achieving ~82% accuracy on a custom dataset of 150K+ samples. Designed feature extraction pipeline using OpenCV to capture structural handwriting traits.',
    tech: ['Python', 'Scikit-learn', 'OpenCV', 'SVM'],
    image: '/api/placeholder/400/300',
    github: 'https://github.com/Vaishnavi2327/handwriting_project',
    live: '',
    featured: false
  },
  {
    title: 'KindLink — Community Help Platform',
    description: 'Developed a role-based web platform enabling citizens to post help requests and volunteers to respond. Integrated Gemini API for hybrid chatbot with fallback FAQ matching.',
    tech: ['React', 'Node.js', 'Express', 'JWT', 'Gemini API'],
    image: '/api/placeholder/400/300',
    github: 'https://github.com/Vaishnavi2327/kind',
    live: '',
    featured: false
  },
  {
    title: 'Hostel Management System',
    description: 'Full-stack hostel management system with role-based dashboards (Student, Warden, Admin) for room allocation, leave approvals, and complaint handling.',
    tech: ['React', 'Django REST', 'JWT', 'Redux Toolkit', 'Tailwind CSS'],
    image: '/api/placeholder/400/300',
    github: 'https://github.com/Vaishnavi2327/hostel-management',
    live: '',
    featured: false
  },
  {
    title: 'Online Quiz System',
    description: 'Interactive quiz platform with real-time scoring, question management, and user authentication for educational assessments.',
    tech: ['React', 'Node.js', 'Express', 'JWT', 'MySQL'],
    image: '/api/placeholder/400/300',
    github: 'https://github.com/Vaishnavi2327/online_quiz_system',
    live: '',
    featured: false
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                project.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
                  <span className="text-white text-2xl font-bold text-center leading-tight">{project.title}</span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
