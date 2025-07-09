import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import zaffLogo from "../assets/ZaffLogo.png";
import freelancerLogo from "../assets/FiverrLogo.png";
import famefingLogo from "../assets/FamefingLogo.png";

const experiences = [
  {
    title: "Learning",
    company_name: "Zaff Institute",
    icon: zaffLogo,
    iconBg: "#00B7B4",
    date: "Dec 2023 - Feb 2024",
    points: [
      "Completed foundational training in web development.",
      "Gained practical skills in HTML, CSS, and JavaScript.",
      "Earned a certification after completing the course.",
      "Started internship with strong fundamentals in frontend.",
    ],
  },
  {
    title: "Frontend Developer (Internship)",
    company_name: "Zaff Institute, Arfa Tower",
    icon: zaffLogo,
    iconBg: "#7C3AED",
    date: "Feb 2024 - Sep 2024",
    points: [
      "Developed responsive and modern websites using React, HTML, CSS, and JavaScript.",
      "Ensured pixel-perfect UI implementation with Tailwind CSS.",
      "Collaborated with mentors on real-time web development projects.",
      "Improved cross-browser compatibility and performance.",
    ],
  },
  {
    title: "Freelancer - Frontend Developer",
    company_name: "Self-employed",
    icon: freelancerLogo,
    iconBg: "#F59E0B",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Delivered custom web applications for international clients.",
      "Used React and Tailwind CSS to build clean, scalable UI components.",
      "Prioritized UX, responsiveness, and fast loading times.",
      "Communicated directly with clients for requirement gathering and feedback.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Famefing Technologies",
    icon: famefingLogo,
    iconBg: "#10B981",
    date: "Oct 2024 - Present",
    points: [
      "Leading development of single-page applications using React and TypeScript.",
      "Created reusable, maintainable UI patterns following best practices.",
      "Integrated complex UI features using Tailwind CSS.",
      "Collaborating with teams to deliver production-ready, high-performance applications.",
    ],
  },
];

const textVariant = () => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.2,
    },
  },
});

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="mt-20">
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className="text-center text-gray-400 text-[16px] uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-center text-white text-[40px] font-bold">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
