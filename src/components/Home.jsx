// src/components/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profileData';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
const BlueskyIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill={color}
    width={size}
    height={size}
  >
    <path d="M256 80c-28 70-91 112-176 128 48 23 88 57 120 96-24 56-56 88-96 112 64-8 112-40 152-88 40 48 88 80 152 88-40-24-72-56-96-112 32-39 72-73 120-96-85-16-148-58-176-128z" />
  </svg>
);


const Home = () => {
  const { personalInfo, socialLinks } = profileData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
  };
  const itemVariants = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  // Particles init
  const particlesInit = async (engine) => { await loadFull(engine); };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🌀 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 animate-gradient opacity-40 dark:opacity-30"></div>

      {/* ✨ Floating Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          particles: {
            color: { value: ['#ffffff', '#f472b6', '#facc15', '#a855f7'] },
            links: { enable: false },
            move: { enable: true, speed: 1.5 },
            number: { value: 30 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0"
      />

      {/* 🌟 Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 p-[3px] shadow-xl hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-gray-100 mb-6">
            {personalInfo.title}
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Location */}
          <motion.div variants={itemVariants} className="mb-8 text-gray-300">
            📍 {personalInfo.location}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              🚀 View My Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              💬 Get In Touch
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 text-3xl">
            {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-gray-300 transition-colors duration-300" /></a>}
            {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-300 transition-colors duration-300" /></a>}
            {socialLinks.twitter && <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-sky-300 transition-colors duration-300" /></a>}
            {socialLinks.facebook && <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-blue-400 transition-colors duration-300" /></a>}
            {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-400 transition-colors duration-300" /></a>}
            {socialLinks.blueskyicon && <a href={socialLinks.blueskyicon} target="_blank" rel="noopener noreferrer"><BlueskyIcon className="hover:text-blue-400 transition-colors duration-300" /></a>}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
