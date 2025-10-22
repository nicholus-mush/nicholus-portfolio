// src/components/Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';

const Resume = () => {
  const { personalInfo, education, skills, projects } = profileData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleDownload = () => {
    // This would trigger the CV download
    const link = document.createElement('a');
    link.href = personalInfo.cvUrl;
    link.download = `Nicholus_Muchiri_CV.pdf`;
    link.click();
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Resume
            </h1>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <button
              onClick={handleDownload}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto"
            >
              <span className="mr-2">📄</span>
              Download CV
            </button>
          </motion.div>

          {/* Resume Content */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            {/* Personal Info */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {personalInfo.name}
              </h2>
              <p className="text-xl text-primary-600 dark:text-primary-400 mb-4">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-400">
                <span>{personalInfo.location}</span>
                <span>•</span>
                <span>{personalInfo.phone}</span>
                <span>•</span>
                <span>{personalInfo.email}</span>
              </div>
            </motion.div>

            <div className="space-y-12">
              {/* Education */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b-2 border-primary-600">
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-start">
                      <div className="md:w-1/4 mb-2 md:mb-0">
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {edu.year}
                        </p>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b-2 border-primary-600">
                  Technical Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b-2 border-primary-600">
                  Featured Projects
                </h3>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-primary-600 pl-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {project.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;