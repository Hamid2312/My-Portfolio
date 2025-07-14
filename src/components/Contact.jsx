import React, { useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// ✅ Lazy load the heavy Three.js EarthCanvas
const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      return toast.error("Please fill in all fields.");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email address.");
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_7jpwnyd",
        "template_nu0j2ai",
        { name, email, message },
        "RbVUdgkgNSU1oYJ2N"
      );

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <Toaster position="top-right" />

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          noValidate
        >
          {["name", "email", "message"].map((field, i) => (
            <label key={field} className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                {field === "message" ? "Your Message" : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              </span>
              {field === "message" ? (
                <textarea
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  rows={7}
                  placeholder='Type your message here'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  required
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field}`}
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  required
                />
              )}
            </label>
          ))}

          <button
            type='submit'
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-tertiary/80'}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* ✅ Lazy-loaded EarthCanvas inside Suspense */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <Suspense fallback={<div className="text-white">Loading globe...</div>}>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
