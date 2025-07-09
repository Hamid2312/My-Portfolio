import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";

// Import images
import Famefing from "../assets/Famefing_project_image.jpg";
import pia from "../assets/Pia_Project.jpg";
import newProjectImage from "../assets/Ai_resume_project.jpg";
import aestheticCalculator from "../assets/calculator.jpg";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Merged project data
const projects = [
  {
    name: "Famefing.com",
    description:
      "I created the company's website Famefing.com during my 3-month internship. Built with React.js, it’s a single-page, fully responsive website.",
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
      "A professional dummy project website. Each component was crafted using best practices and modern web development techniques with React.js and Tailwind CSS.",
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
      "A recently completed project leveraging React.js for the frontend and open APIs to create a dynamic AI-powered resume builder with Tailwind CSS.",
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
      "A sleek and interactive calculator app built with React.js, featuring a modern design and smooth user experience with Tailwind CSS.",
    tags: [
      { name: "React.js", color: "text-blue-500" },
      { name: "Tailwind", color: "text-cyan-400" },
    ],
    image: aestheticCalculator,
    source_code_link: "https://aesthetic-calculator-pink.vercel.app/",
  },
  // Add any previous existing projects here in similar format
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover object-left rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          A selection of projects that demonstrate my expertise in frontend development, problem-solving, and building responsive, interactive UIs with modern tools like React and Tailwind CSS.
        </p>
      </div>

      <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
