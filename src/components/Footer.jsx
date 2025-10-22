// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profileData';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaDiscord
  
} from 'react-icons/fa';

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
const TelegramIcon = ({ size = 20, color = 'currentColor' }) => (
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


const Footer = () => {
  const { personalInfo, socialLinks } = profileData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <Link to="/" className="text-2xl font-bold mb-4 block">
                {personalInfo.name.split(' ')[0]}
              </Link>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Full Stack Developer passionate about creating innovative solutions and making a difference through technology.
              </p>
              <div className="flex space-x-4">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    {platform === 'github' &&  <FaGithub size={20}/>}
                    {platform === 'linkedin' && <FaLinkedin size={20} />}
                    {platform === 'twitter' && <FaTwitter size={20} />}
                    {platform === 'facebook' && <FaFacebook size={20} />}
                    {platform === 'instagram' && <FaInstagram size={20} />}
                    {platform === 'bluesky' &&  <BlueskyIcon size={20} />}
                    {platform === 'discord' && <FaDiscord SIZE={20} />}
                    {platform === 'telegram' && <TelegramIcon size={20} />} {/* Bluesky emoji placeholder */}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/resume" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-400">
                <p>📍 {personalInfo.location}</p>
                <p>📱 {personalInfo.phone}</p>
                <p>📧 {personalInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
