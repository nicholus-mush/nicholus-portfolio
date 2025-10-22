// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade, Zoom } from 'react-awesome-reveal';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 }
  };

  const pageTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: 0.6
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-pink-100 
                      dark:from-gray-900 dark:via-indigo-900 dark:to-black 
                      text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="flex flex-col items-center justify-center p-6">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Fade>
                      <Home />
                    </Fade>
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    key="about"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Zoom>
                      <About />
                    </Zoom>
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div
                    key="projects"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Fade cascade>
                      <Projects />
                    </Fade>
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    key="contact"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Zoom>
                      <Contact />
                    </Zoom>
                  </motion.div>
                }
              />
              <Route
                path="/resume"
                element={
                  <motion.div
                    key="resume"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Fade>
                      <Resume />
                    </Fade>
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
