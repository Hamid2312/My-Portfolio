import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import zaffLogo from "../assets/ZaffLogo.png";
import freelancerLogo from "../assets/FiverrLogo.png";
import famefingLogo from "../assets/FamefingLogo.png";

const MyExperience = () => {
  const experiences = [
    {
      title: "Learning",
      company: "Zaff Institute",
      duration: "December 2023 - February 2024",
      description:
        "I learned web development from this institute and received certification. I explored core frontend technologies, including HTML, CSS, and JavaScript, as a motivated learner and began an internship there.",
      logo: zaffLogo,
    },
    {
      title: "Frontend Developer",
      company: "Zaff Institute in Arfa Tower",
      duration: "February 2024 - September 2024",
      description:
        "Created responsive, modern websites using React, HTML, CSS, and JavaScript. Delivered multiple projects with cross-browser compatibility and pixel-perfect design using Tailwind CSS.",
      logo: zaffLogo,
    },
    {
      title: "Freelancer - Frontend Developer",
      company: "Self-employed",
      duration: "July 2024 - September 2024",
      description:
        "Worked with global clients on custom web solutions using React and Tailwind CSS. Focused on elegant UI, scalability, and client satisfaction.",
      logo: freelancerLogo,
    },
    {
      title: "Frontend Developer",
      company: "Famefing Technologies",
      duration: "October 2024 - Present",
      description:
        "Leading React-based SPA development using TypeScript and advanced UI patterns. Built fast-loading, maintainable applications with high-quality UX using Tailwind CSS.",
      logo: famefingLogo,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.3 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 8px 30px rgba(0, 183, 180, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      boxShadow: "0 0 15px rgba(0, 251, 244, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // Highlight technologies in description
  const highlightTechnologies = (text) => {
    return text.replace(
      /\b(React|React\.js|Tailwind CSS|JavaScript|TypeScript|HTML|CSS)\b/g,
      '<span class="font-bold text-cyan-600 dark:text-[#00FBF4]">$1</span>'
    );
  };

  return (
    <section
      id="my-experience-section"
      ref={ref}
      className="relative bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 15px rgba(0, 183, 180, 0.6); }
            50% { box-shadow: 0 0 25px rgba(0, 251, 244, 0.8); }
          }
          .dark @keyframes glow {
            0%, 100% { box-shadow: 0 0 15px rgba(0, 251, 244, 0.6); }
            50% { box-shadow: 0 0 25px rgba(0, 251, 244, 0.8); }
          }
          @keyframes float {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.05); }
            100% { transform: translateY(0) scale(1); }
          }
          .gradient-text {
            background: linear-gradient(to right, #00B7B4, #7C3AED);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
          }
          .dark .gradient-text {
            background: linear-gradient(to right, #00FBF4, #A78BFA);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
          }
          .noise-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.05;
            z-index: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }
          .gradient-sphere {
            position: absolute;
            border-radius: 50%;
            filter: blur(50px);
            opacity: 0.3;
          }
          .sphere-1 {
            width: 30vw;
            max-width: 300px;
            height: 30vw;
            max-height: 300px;
            background: linear-gradient(45deg, rgba(0, 183, 180, 0.4), rgba(124, 58, 237, 0.3));
            top: -5%;
            left: -5%;
            animation: float 12s ease-in-out infinite alternate;
          }
          .sphere-2 {
            width: 25vw;
            max-width: 250px;
            height: 25vw;
            max-height: 250px;
            background: linear-gradient(135deg, rgba(255, 58, 130, 0.4), rgba(0, 251, 244, 0.3));
            bottom: -10%;
            right: -5%;
            animation: float 15s ease-in-out infinite alternate;
            animation-delay: 2s;
          }
        `}
      </style>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="noise-overlay" />
        <div className="gradient-sphere sphere-1" />
        <div className="gradient-sphere sphere-2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 relative"
            whileHover={{ scale: 1.05, textShadow: "0 0 15px rgba(0, 251, 244, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            My Experience
            <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-20 h-1 bg-cyan-600 dark:bg-[#00FBF4] rounded-full" />
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-white/80 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A glimpse into my journey of growth and contribution across impactful roles.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-[#00FBF4]/20 p-6 sm:p-8 overflow-hidden group"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/10 to-purple-100/10 dark:from-[#00FBF4]/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.h3
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white"
                    variants={textVariants}
                    whileHover={{ x: 5, color: "#00B7B4" }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-contain border-2 border-cyan-600 dark:border-[#00FBF4] shadow-md"
                    variants={logoVariants}
                    initial="hidden"
                    animate="show"
                    whileHover="hover"
                  />
                </div>
                <motion.p
                  className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1"
                  variants={textVariants}
                >
                  {exp.company}
                </motion.p>
                <motion.p
                  className="text-sm text-gray-600 dark:text-gray-300 mb-3"
                  variants={textVariants}
                >
                  {exp.duration}
                </motion.p>
                <motion.p
                  className="text-sm sm:text-base text-gray-700 dark:text-gray-100 leading-relaxed line-clamp-4"
                  variants={textVariants}
                  dangerouslySetInnerHTML={{ __html: highlightTechnologies(exp.description) }}
                  aria-describedby={`exp-desc-${idx}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyExperience;