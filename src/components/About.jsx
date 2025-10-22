// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';

const About = () => {
  const { personalInfo, education, skills } = profileData;

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

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h1>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Professional Summary
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{edu.year}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Skills & Expertise</h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;