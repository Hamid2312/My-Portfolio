import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
	{
		icon: <FaGithub />,
		url: "https://github.com/Hamid2312",
		label: "GitHub",
	},
	{
		icon: <FaLinkedin />,
		url: "https://www.linkedin.com/in/hafiz-hamid-b40795336",
		label: "LinkedIn",
	},
	{
		icon: <FaTwitter />,
		url: "https://x.com/HafizHamid2312",
		label: "Twitter",
	},
];

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto overflow-hidden">
			{/* Animated background gradient */}
			<div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a1a2e] via-[#915EFF]/30 to-[#232526] animate-gradient" />

			<div
				className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between h-full`}
			>
				{/* Left Accent Line */}
				<div className="hidden md:flex flex-col justify-center items-center mt-28 md:mt-0">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 h-40 sm:h-80 violet-gradient" />
				</div>

				{/* Main Content */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="flex-1 flex flex-col items-center md:items-start mt-24 md:mt-0"
				>
					<h1 className={`${styles.heroHeadText} text-white text-center md:text-left`}>
						Hi, I'm <span className="text-[#915EFF]">Hamid</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100 text-center md:text-left`}>
						<Typewriter
							words={[
								"I'm a frontend web developer.",
								"I craft responsive and accessible interfaces.",
								"I bring designs to life with clean code.",
								"I specialize in React and Tailwind CSS.",
								"I turn ideas into elegant web applications.",
								"User experience is my top priority.",
								"I build fast, scalable frontend systems.",
							]}
							loop={Infinity}
							cursor
							cursorStyle="|"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1500}
						/>
					</p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 1 }}
						className="mt-4 text-gray-300 max-w-md text-center md:text-left"
					>
						Passionate about building beautiful, performant, and accessible web experiences. Let's connect and create something amazing!
					</motion.p>

					{/* Social Icons */}
					<div className="flex gap-5 mt-6 justify-center md:justify-start">
						{socialLinks.map((link) => (
							<a
								key={link.label}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={link.label}
								className="text-2xl text-white hover:text-[#915EFF] transition-colors duration-300"
							>
								{link.icon}
							</a>
						))}
					</div>
				</motion.div>

				{/* Optional: Canvas or Illustration */}
				<div className="hidden lg:block flex-1 h-full">
					{/* <ComputersCanvas /> */}
				</div>
			</div>

			{/* Scroll Down Indicator */}
			<div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-10">
				<a href="#about" aria-label="Scroll Down">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-black/40 backdrop-blur-sm">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>

			{/* Responsive background animation (optional) */}
			<style>
				{`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 8s ease-in-out infinite;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
			</style>
		</section>
	);
};

export default Hero;
