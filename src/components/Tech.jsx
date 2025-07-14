import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const iconsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-icon",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".tech-icons-wrapper",
            start: "top 80%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, iconsRef);

    return () => ctx.revert(); // cleanup GSAP context
  }, []);

  return (
    <section ref={iconsRef}>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(({ name, icon }) => (
          <div className="w-28 h-28" key={name}>
            <img
              src={icon}
              alt={name}
              className="tech-icon w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
