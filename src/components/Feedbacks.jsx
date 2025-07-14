import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

// Register plugin once
gsap.registerPlugin(ScrollTrigger);

// Individual Card Component
const FeedbackCard = memo(({ testimonial, name, designation, company, image }) => {
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
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <blockquote
      ref={cardRef}
      className="bg-black-200 p-8 rounded-3xl w-full max-w-xs"
    >
      <p className="text-white text-4xl font-black mb-3">"</p>
      <p className="text-white tracking-wide text-base">{testimonial}</p>

      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={name || "Client image"}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-white font-semibold text-sm">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary text-xs">{designation} at {company}</p>
        </div>
      </div>
    </blockquote>
  );
});

// Main Testimonials Section
const Feedbacks = () => {
  return (
    <section className="mt-16 bg-black-100 rounded-2xl">
      <div className={`bg-tertiary rounded-t-2xl ${styles.padding} min-h-[300px]`}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </div>

      <div
        className={`pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name || index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
