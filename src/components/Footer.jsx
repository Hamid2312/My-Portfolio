import React from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/Hamid2312",
    icon: <FaGithub size={24} />,
    label: "GitHub",
  },
  {
    href: "https://x.com/HafizHamid2312",
    icon: <FaXTwitter size={24} />,
    label: "Twitter (X)",
  },
  {
    href: "https://www.linkedin.com/in/hafiz-hamid-b40795336",
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
  },
];

const Footer = React.memo(() => {
  return (
    <footer className="w-full py-4 px-4 bg-black-100/60 text-white flex justify-center gap-6">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="hover:text-[#38bdf8] transition-colors duration-200"
        >
          {icon}
        </a>
      ))}
    </footer>
  );
});

export default Footer;
