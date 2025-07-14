import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";

// Project images
import Famefing from "../assets/Famefing_project_image.jpg";
import pia from "../assets/Pia_Project.jpg";
import newProjectImage from "../assets/Ai_resume_project.jpg";
import aestheticCalculator from "../assets/calculator.jpg";

gsap.registerPlugin(ScrollTrigger);

// Projects data
const projects = [
  {
    name: "Famefing.com",
    description:
      "Built during my internship – a single-page, responsive site using React.js.",
    tags: [
      { name: "React.js", color: "text-blue-500" },
      { name: "responsive", color: "text-green-400" },
    ],
    image: Famefing,
    source_code_link: "https://Hamid2312.github.io/myfamefing/",
  },
  {
    name: "Piac.com.pk",
    description:
      "A dummy professional airline website crafted with modern React & Tailwind techniques.",
    tags: [
      { name: "React.js", color: "text-blue-500" },
      { name: "Tailwind CSS", color: "text-cyan-400" },
    ],
    image: pia,
    source_code_link: "https://mypia-hamid2312s-projects.vercel.app/",
  },
  {
    name: "AI Resume Builder",
    description:
      "An AI-powered resume builder using Open APIs and a Tailwind-powered UI.",
    tags: [
      { name: "React.js", color: "text-blue-500" },
      { name: "AI", color: "text-purple-400" },
    ],
    image: newProjectImage,
    source_code_link: "https://hamid2312.github.io/AiResumeBuilder/",
  },
  {
    name: "Aesthetic Calculator",
    description:
      "A modern, stylish calculator app with smooth UX and minimal UI design.",
    tags: [
      { name: "React.js", color: "text-blue-500" },
      { name: "Tailwind", color: "text-cyan-400" },
    ],
    image: aestheticCalculator,
    source_code_link: "https://aesthetic-calculator-pink.vercel.app/",
  },
];

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="w-full">
      <Tilt
        options={{ max: 25, scale: 1.02, speed: 400 }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] shadow-md"
      >
        <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={`${name} screenshot`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-end p-3">
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              aria-label={`View ${name} source code`}
            >
              <img src={github} alt="GitHub link" className="w-1/2 h-1/2 object-contain" />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <p className="mt-3 text-secondary text-[16px] max-w-3xl leading-[28px]">
        Here’s a showcase of projects demonstrating my skills in modern frontend frameworks, responsive design, and clean user interfaces.
      </p>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((project, i) => (
          <ProjectCard key={`project-${i}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
