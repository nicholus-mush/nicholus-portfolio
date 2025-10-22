// src/data/profileData.js
export const profileData = {
  personalInfo: {
    name: "Nicholus Muchiri Wagura",
    title: "Full Stack Developer & Computer Scientist, MATHEMATICIAN, DATA ENTHUSIAST, TECH BLOGGER, OPEN SOURCE CONTRIBUTOR, LIFELONG LEARNER, PROBLEM SOLVER, Data Analyst, AI Enthusiast, Tech Innovator, Tech Enthusiast",
    location: "Mombasa, Kenya",
    email: "nicholusmush@gmail.com",
    phone: "+254 703576876",
    bio: "I am a passionate Computer Science professional with a strong foundation in mathematics and computing. Holding a Bachelor of Science in Mathematics and Computer Science from Technical University of Mombasa and pursuing a BSE in Computer Science from University of the People, I bring a unique blend of analytical thinking and technical expertise. My journey in technology has equipped me with comprehensive skills in full-stack development, database management, and software engineering. I thrive on solving complex problems and creating innovative solutions that make a meaningful impact. With experience in multiple programming languages and frameworks, I'm committed to writing clean, efficient code and continuously expanding my knowledge in emerging technologies.",
    photo: "./profile-photo.jpg", // Add your photo to public folder
    cvUrl: "./nicholus-cv.pdf" // Add your CV to public folder
  },

  education: [
    {
      institution: "University of the People",
      degree: "BSE Computer Science",
      year: "2022 - Present",
      description: "Focus on software engineering, algorithms, and data structures"
    },
    {
      institution: "Technical University of Mombasa",
      degree: "Bachelor of Science in Mathematics and Computer Science",
      year: "2018 - 2022",
      description: "Double major combining mathematical theory with computational applications"
    }
  ],

  skills: {
    "Databases": ["SQL", "MongoDB", "PostgreSQL"],
    "Markup Languages": ["HTML", "CSS", "MathML", "YML"],
    "Programming": ["Python", "Java", "JavaScript", "C++", "C"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "Tailwind CSS", "Django", "Data"],
    "Tools & Technologies": ["Git", "Docker", "REST APIs", "Linux"],
    "Soft Skills": ["Problem Solving", "Creative Thinking", "Team Collaboration", "Analytical Reasoning"]
  },

  projects: [
    {
      name: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS showcasing my projects and skills",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/nicholus/portfolio",
      liveUrl: "#",
      image: "/project-portfolio.jpg"
    },
    {
      name: "Password Generator",
      description: "A secure password generation tool with customizable options for length and character types",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/nicholus-mush/password-generator",
      liveUrl: "#",
      image: "/project-password-gen.jpg"
    },
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication and payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/nicholus-mush/ecommerce-platform",
      liveUrl: "#",
      image: "/project-ecommerce.jpg"
    }
  ],

  socialLinks: {
    github: "https://github.com/nicholus-mush",
    linkedin: "https://www.linkedin.com/in/benard-mwangi-b683002b2",
    twitter: "https://twitter.com/@nicholusmush",
    facebook: "https://www.facebook.com/profile.php?id=61572445820749",
    instagram: "https://www.instagram.com/nickysparsh?igsh=bmR1cHNveGRpdW1w",
    bluesky: "https://bsky.app/profile/nicholusmush.bsky.social",
    telegram: "https://t.me/Datamush",
    dicord: "https://discord.com/nicholus0583_06671"
  },

  contact: {
    address: "Mombasa, Kenya",
    country: "Kenya",
    phone: "+254 703576876",
    email: "nicholusmush@gmail.com"
  }
};