"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { Briefcase, GraduationCap, CalendarDays } from "lucide-react";

import { usePathname } from "next/navigation";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <SplashScreen /> : <MainPage />}</>;
}

/* SPLASH SCREEN */
function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img src="/images/logo1.png" alt="Logo" className="w-24 animate-pulse" />
    </div>
  );
}

/* MAIN PAGE */
function MainPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState("frontend");

  const pathname = usePathname();
  const isActive = pathname === "/";
  {
    /* clickable navbar*/
  }
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  {
    /*contact us*/
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess(false);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("FRONTEND ERROR:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  {
    /*my skills*/
  }

  const socialMediaSkills = [
    {
      title: "Canva",
      level: "Advanced",
      darkLogo: "/images/canva1.png",
      lightLogo: "/images/canva.png",
    },
    {
      title: "Adobe Photoshop",
      level: "Intermediate",
      darkLogo: "/images/photoshop1.png",
      lightLogo: "/images/photoshop.png",
    },
    {
      title: "Figma",
      level: "Advanced",
      darkLogo: "/images/figma1.png",
      lightLogo: "/images/figma.png",
    },
    {
      title: "Visual Storytelling",
      level: "Advanced",
      darkLogo: "/images/storytelling1.png",
      lightLogo: "/images/storytelling.png",
    },
    {
      title: "Campaign Creatives",
      level: "Advanced",
      darkLogo: "/images/campaign1.png",
      lightLogo: "/images/campaign.png",
    },
  
  ];

  const aiVideoSkills = [
    {
      title: "CapCut",
      level: "Advanced",
      darkLogo: "/images/capcut1.png",
      lightLogo: "/images/capcut.png",
    },
    {
      title: "Adobe Premiere Pro",
      level: "Intermediate",
      darkLogo: "/images/premiere1.png",
      lightLogo: "/images/premiere.png",
    },
    {
      title: "AI Video Creation",
      level: "Advanced",
      darkLogo: "/images/aivideo1.png",
      lightLogo: "/images/aivideo.png",
    },
    {
      title: "Gemini & ChatGPT",
      level: "Advanced",
      darkLogo: "/images/ai-tools1.png",
      lightLogo: "/images/ai-tools.png",
    },
    {
      title: "Content Planning",
      level: "Advanced",
      darkLogo: "/images/planning.png",
      lightLogo: "/images/planning1.png",
    },
  ];


const projectsData = [
  {
    title: "Evzonetech",
    image: "/images/ev.png",
    link: "/projects/evzonetech",
  },
  {
    title: "Lancer Seed",
    image: "/images/lancer1.png",
    link: "/projects/lancer-seed",
  },
  {
    title: "Eastern High School",
    image: "/images/ehs1.png",
    link: "/projects/eastern-high-school",
  },
  {
    title: "Fashion Bank",
    image: "/images/fb1.png",
    link: "/projects/fashion-bank",
  },
];
const experienceData = [
  {
    year: "Jan 2026 - Present",
    title: "Social Media Graphic Designer",
    company: "Lancer Seed",
    description: "Create social media posts and marketing creatives for seed and agriculture-focused products. Handle content planning, design AI-generated and AI-assisted videos for campaigns, and maintain brand consistency using Canva, CapCut, and Adobe Photoshop."
  },
  {
    year: "Jan 2025 - Present",
    title: "Social Media Graphic Designer",
    company: "Evzonetech",
    description: "Design engaging social media posts, promotional graphics, and campaign creatives. Plan content aligned with visual trends, create AI-powered short-form video content using CapCut, and develop polished assets using Canva and Adobe Photoshop."
  }
];

const educationData = [
  {
    year: "Sep 2021 - May 2025",
    title: "BSCS (Bachelor of Science in Computer Science)",
    company: "University of Agriculture",
    description: "Completed a comprehensive program building a strong blend of creative digital media skills and technical computer science foundations."
  }
];
  {
    /*  navbar activation */
  }
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -80px 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: darkMode
            ? "url('/images/bg-dark.png')"
            : "url('/images/bg-light.png')",
        }}
      >
        {/* Overlay */}
        <div
          className={`min-h-screen ${darkMode ? "bg-black/40 text-white" : "text-black"}`}
        >
          {/*navbar */}
          <>
            <nav
              className="flex items-center  justify-between
    px-4 sm:px-6 md:px-16
    py-3 md:py-2
    bg-blue/40 backdrop-blur-md shadow-sm
    fixed top-0 left-0 w-full z-50"
            >
              {/* Left: Logo */}
              <Link href="#home">
                <>
                  <img
                    src="/images/logo1.png"
                    alt="Logo Light"
                    className="h-12 w-auto block dark:hidden"
                  />
                  <img
                    src="/images/logo1.png"
                    alt="Logo Dark"
                    className="h-12 w-auto hidden dark:block"
                  />
                </>
              </Link>

              <div className="flex-1"></div>

              {/* Right side */}
              <div className="flex items-center gap-6 font-bold">
                {/* Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl"
                >
                  {darkMode ? "☀️" : "🌙"}
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-2xl"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? "✖" : "☰"}
                </button>

                {/* Desktop Nav */}
                <ul className="hidden  md:flex text-sm gap-8 ">
                  <li
                    onClick={() => scrollToSection("home")}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeSection === "home"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Home
                  </li>

                  <li
                    onClick={() => scrollToSection("about")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "about"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    About
                  </li>
                  <li
                    onClick={() => scrollToSection("skills")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "skills"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Skills
                  </li>
                  <li
                    onClick={() => scrollToSection("projects")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "projects"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Projects
                  </li>

                  <li
                    onClick={() => scrollToSection("experience")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "experience"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Experience
                  </li>
                </ul>

                {/* Button */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hidden md:block bg-purple-600 px-4 py-2 rounded-full text-sm hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.7)] animate-pulse hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
              <div
                className={`md:hidden fixed inset-0 z-50 flex flex-col ${
                  darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
                }`}
              >
                <div className="flex items-center justify-between px-6 py-4">
                 <div
  onClick={() => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.getElementById("/#home");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }}
  className="cursor-pointer"
>
                  

                    <img
                      src="/images/logo1.png"
                      alt="Logo Dark"
                      className="h-12 w-auto hidden dark:block"
                    />
                  </div>

                  <div className="flex items-center gap-4 z-20">
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="text-xl cursor-pointer"
                    >
                      {darkMode ? "☀️" : "🌙"}
                    </button>

                    <button
                      className="text-2xl cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      ✖
                    </button>
                  </div>
                </div>

                <ul className="flex flex-col flex-1 justify-center items-center gap-6 text-lg font-bold text-center -mt-50">
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("home");
                      setMenuOpen(false);
                    }}
                  >
                    Home
                  </li>

                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("about");
                      setMenuOpen(false);
                    }}
                  >
                    About
                  </li>

                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("skills");
                      setMenuOpen(false);
                    }}
                  >
                    Skills
                  </li>

                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("projects");
                      setMenuOpen(false);
                    }}
                  >
                    Projects
                  </li>

                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("experience");
                      setMenuOpen(false);
                    }}
                  >
                    Experience
                  </li>

                  {/* Contact Button (Fixed for mobile) */}
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      scrollToSection("contact");
                      setMenuOpen(false);
                    }}
                  >
                    <span className="bg-purple-600 px-4 py-2 rounded-full text-sm text-white shadow-[0_0_15px_rgba(168,85,247,0.7)] animate-pulse hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-all duration-300">
                      Contact Us
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </>
          {/* HERO */}
<section
            id="home"
            className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-20"
          >
            {" "}
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="max-w-xl space-y-5"
            >
             <h6 className="text-lg text-purple-600 pt-18 font-bold">
                I am Asma Saleem
              </h6>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                <span
                  className={`bg-linear-to-r ${
                    darkMode
                      ? "from-white to-purple-400"
                      : "from-gray-900 to-purple-800"
                  } bg-clip-text text-transparent`}
                >
                  <TypeAnimation
                    sequence={[
                      "Social Media Graphic Designer +",
                      3000,
                      "Content Creator",
                      3000,
                      "",
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <p
                className={`text-sm md:text-base leading-relaxed whitespace-break-spaces text-justify ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Creative Social Media Graphic Designer and Content Creator specializing in engaging social media posts, campaign creatives, promotional content, and AI-powered videos. Skilled in Canva, Figma, CapCut, and Adobe Photoshop with a strong BSCS background.
              </p>

              {/* BUTTON + ICON ROW */}
              <div className="flex items-center gap-6 flex-wrap">
                {/* GET IN TOUCH */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden border border-purple-500 px-4 md:px-5 py-2 rounded-full flex items-center gap-2 group"
                >
                  <span
                    className={`relative z-10 flex items-center gap-2 ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Get In Touch
                    <img
                      src="/images/right-arrow.png"
                      alt="arrow"
                      className={`w-5 h-5 md:w-6 md:h-6 animate-pulse ${
                        darkMode ? "invert-0" : "invert"
                      }`}
                    />
                  </span>

                  <span className="absolute inset-0 bg-purple-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                </motion.button>

                {/* SOCIAL ICONS */}
                <div className="flex gap-3 items-center">
                  <a
                    href="https://www.linkedin.com/in/asma-saleem1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/linkedin.png"
                      className="w-7 h-7 md:w-9 md:h-9 hover:scale-110 transition rounded-full ring-1 ring-purple-500 dark:ring-gray-400"
                    />
                  </a>

                  <a
                    href="https://wa.me/923101657409"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/whatsapp.png"
                      className="w-7 h-7 md:w-9 md:h-9 hover:scale-110 transition rounded-full ring-1 ring-purple-500 dark:ring-gray-400"
                    />
                  </a>
                </div>
              </div>

              {/* DOWNLOAD CV (Single CV) */}
              <div className="relative inline-block mt-0">
                <a
                  href="documents/Asma_Saleem_Social_Media_Graphic_Designer_CV.pdf"
                  download
                  className="relative overflow-hidden border border-purple-500 px-8 py-2 rounded-full flex items-center gap-2 group bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                >
                  <span className="relative z-10">Download CV</span>
                </a>
              </div>
            </motion.div>
            {/* RIGHT SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="relative mt-10 md:mt-0 flex justify-center md:mr-20"
            >
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-500 via-blue-900 to-purple-900 blur-lg opacity-70"></div>

              <img
                src="images/asma2.png"
                alt="profile"
                className="relative w-56 md:w-72 lg:w-80 rounded-2xl shadow-lg"
              />
            </motion.div>
          </section>
        </div>
      </div>
      {/*About Me*/}

      <section
        id="about"
        className="w-full px-4 md:px-16 py-16 md:py-24
                 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: darkMode
            ? "url('/images/about-bg.png')"
            : "url('/images/about-bg1.png')",
        }}
      >
        <motion.div
          className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* LEFT IMAGE CARD */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div
              className="relative p-0.5 rounded-xl 
            bg-linear-to-r from-purple-500 via-cyan-400 to-purple-900 
            bg-size-[200%_200%] animate-[gradientMove_4s_ease_infinite]
            shadow-[0_0_25px_rgba(0,255,255,0.6)]"
            >
              <div className="rounded-xl overflow-hidden bg-black">
                <Image
                  src="/images/asma2.png"
                  alt="Profile"
                  width={400}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
            viewport={{ once: false }}
          >
            {/* Top Label */}
            <span className="text-xs font-semibold tracking-widest text-white-300 uppercase bg-purple-900/30 px-3 py-1 rounded">
              About Me
            </span>

         <h1
              className={`text-3xl md:text-2.5xl pt-6 font-bold leading-snug ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              I AM AVAILABLE FOR{" "}
              <span className="text-purple-500">SOCIAL MEDIA DESIGN</span>
             
               & <span className="text-purple-500">CONTENT CREATION</span> PROJECTS
            </h1>

            <p
              className={`mt-4 text-sm md:text-base max-w-md text-justify ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              I am a creative Social Media Graphic Designer and Content Creator with hands-on experience in designing engaging social media posts, campaign creatives, promotional content, and AI-powered videos. I focus on visual storytelling, brand consistency, and modern design trends while leveraging tools like Canva, Figma, CapCut, and Adobe Photoshop.
            </p>

            <p
              className={`mt-3 text-sm md:text-base max-w-md text-justify ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              Along with graphic design, I bring a strong technical foundation from my BSCS background. I handle content planning, concept development, and short-form video editing to deliver polished, platform-ready digital assets that align with brand goals and audience needs.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => router.push("/hire")}
              className="mt-6 px-6 py-2 bg-purple-600 text-white text-sm rounded-full animate-pulse shadow-lg shadow-blue-500/50"
            >
              HIRE ME
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* skills*/}
     <section
        id="skills"
        className="w-full px-4 md:px-16 py-16 md:py-24
                 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: darkMode
            ? "url('/images/skills-bg.png')"
            : "url('/images/skills-bg1.png')",
        }}
      >
        {/* Content */}
        <div className="relative max-w-7xl mx-auto z-10">
          {/* HEADER */}
          <div className="text-center mb-16">
            <p
              className={`uppercase tracking-[4px] text-lg font-semibold mb-4 ${
                darkMode ? "text-pink-400" : "text-pink-600"
              }`}
            >
              My Expertise
            </p>

            <h1
              className={`text-4xl md:text-6xl font-extrabold mb-6 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              My Skills
            </h1>

            <p
              className={`max-w-2xl mx-auto text-sm md:text-base leading-7 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Creative Social Media Graphic Designer and Content Creator with expertise in social media design, campaign creatives, promotional visuals, short-form video editing, and AI-powered tools.
            </p>
          </div>

        {/* SOCIAL MEDIA DESIGN SKILLS */}
          <h2
            className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="w-2 h-8 rounded-full bg-linear-to-b from-purple-500 to-pink-500"></span>
            Social Media Design Skills
          </h2>

          <div className="overflow-visible mb-16 py-8">
            <div className="marquee flex gap-6 items-center">
              {[...socialMediaSkills, ...socialMediaSkills].map((skill, i) => (
                <div
                  key={i}
                  className={`w-45 h-55 shrink-0 rounded-2xl p-5 text-center flex flex-col items-center justify-center relative z-10 transition-all duration-300 ease-in-out hover:scale-110 hover:z-50 cursor-pointer ${
                    darkMode
                      ? "bg-[#12052b] text-white border border-purple-900 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]"
                      : "bg-purple-300 backdrop-blur-md text-black border border-purple-200 hover:bg-purple-50 hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)]"
                  }`}
                >
                  <img
                    src={darkMode ? skill.darkLogo : skill.lightLogo}
                    alt={skill.title}
                    className="w-14 h-14 mx-auto mb-4 object-contain"
                  />

                  <h3
                    className={`text-sm font-semibold mb-2 min-h-10 flex items-center justify-center ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {skill.title}
                  </h3>

                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DESIGN TOOLS & AI EXPERTISE */}
          <h2
            className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="w-2 h-8 rounded-full bg-linear-to-b from-cyan-500 to-blue-500"></span>
            Design Tools & AI Expertise
          </h2>

          <div className="overflow-visible mb-20 py-8">
            <div className="marquee flex gap-6 items-center">
              {[...aiVideoSkills, ...aiVideoSkills].map((skill, i) => (
                <div
                  key={i}
                  className={`w-45 h-55 shrink-0 rounded-2xl p-5 text-center flex flex-col items-center justify-center relative z-10 transition-all duration-300 ease-in-out hover:scale-110 hover:z-50 cursor-pointer ${
                    darkMode
                      ? "bg-[#12052b] text-white border border-cyan-900 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]"
                      : "bg-purple-300 backdrop-blur-md text-black border border-purple-200 hover:bg-purple-50 hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)]"
                  }`}
                >
                  <img
                    src={darkMode ? skill.darkLogo : skill.lightLogo}
                    alt={skill.title}
                    className="w-14 h-14 mx-auto mb-4 object-contain"
                  />

                  <h3
                    className={`text-sm font-semibold mb-2 min-h-10 flex items-center justify-center ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {skill.title}
                  </h3>

                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*projects*/}

      {/* PROJECTS */}

      {/* PROJECTS / RECENT WORKS */}
     <section
  id="projects"
  className="w-full px-4 md:px-16 py-16 md:py-24
       bg-cover bg-top bg-no-repeat
       scroll-mt-24"
  style={{
    backgroundImage: darkMode
      ? "url('/images/projects-bg.png')"
      : "url('/images/projects-bg1.png')",
  }}
>
  <div className="flex flex-col items-center text-center mb-14">
    <h1
      className={`text-4xl md:text-5xl font-bold mb-4 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      My Recent Works
    </h1>
    <p
      className={`text-sm md:text-base max-w-xl ${
        darkMode ? "text-gray-300" : "text-gray-700"
      }`}
    >
      Explore my professional campaign creatives, promotional posts, and AI-powered video projects. Click any project to view detailed designs and carousels.
    </p>
  </div>

  {/* PROJECT GRID (4 Projects) */}
  <div className="relative max-w-6xl mx-auto w-full">
    <div className="absolute inset-0 bg-purple-700/20 blur-3xl"></div>

    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: "Evzonetech",
          image: "/images/ev.png",
          link: "/projects/evzonetech",
        },
        {
          title: "Lancer Seed",
          image: "/images/lancer1.png",
          link: "/projects/lancer-seed",
        },
        {
          title: "Eastern High School",
          image: "/images/ehs1.png",
          link: "/projects/eastern-high-school",
        },
        {
          title: "Fashion Bank",
          image: "/images/fb1.png",
          link: "/projects/fashion-bank",
        },
      ].map((project, index) => (
        <Link
          key={index}
          href={project.link}
          className="bg-[#0f0f0f] rounded-xl overflow-hidden border border-purple-900/30 hover:scale-[1.02] transition duration-300 block group cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-65 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-5 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <span className="text-purple-400 text-sm group-hover:translate-x-1 transition-transform">
              View Gallery &rarr;
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
      {/* experience*/}
    <section
  id="experience"
  className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-cover bg-top bg-no-repeat relative"
  style={{
    backgroundImage: darkMode
      ? "url('/images/experience-bg.png')"
      : "url('/images/skills-bg1.png')",
  }}
>
  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    
    {/* Experience Section */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-purple-500 w-7 h-7" />
        <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
          My Experience
        </h2>
      </div>

      <div className="space-y-5">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className={`min-h-[170px] flex flex-col justify-center rounded-2xl p-5 border transition-all duration-300 hover:scale-[1.02] shadow-lg ${
              darkMode
                ? "bg-[#14081f] border-purple-900/40 hover:border-purple-500"
                : "bg-white/80 border-gray-300 hover:border-purple-400"
            }`}
          >
            <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
              <CalendarDays size={16} />
              <span>{item.year}</span>
            </div>
            <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-black"}`}>
              {item.title}
            </h3>
            <p className={`text-sm font-medium mt-1 ${darkMode ? "text-purple-300" : "text-purple-700"}`}>
              {item.company}
            </p>
            <p className={`text-xs mt-2 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Education Section */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="text-purple-500 w-7 h-7" />
        <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
          My Education
        </h2>
      </div>

      <div className="space-y-5">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`min-h-[170px] flex flex-col justify-center rounded-2xl p-5 border transition-all duration-300 hover:scale-[1.02] shadow-lg ${
              darkMode
                ? "bg-[#14081f] border-purple-900/40 hover:border-purple-500"
                : "bg-white/80 border-gray-300 hover:border-purple-400"
            }`}
          >
            <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
              <CalendarDays size={16} />
              <span>{item.year}</span>
            </div>
            <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-black"}`}>
              {item.title}
            </h3>
            <p className={`text-sm font-medium mt-1 ${darkMode ? "text-purple-300" : "text-purple-700"}`}>
              {item.company}
            </p>
            <p className={`text-xs mt-2 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>

  </div>
</section>

      {/*contact us*/}

      <section
        id="contact"
        className={`relative w-full py-20 px-6 md:px-16 overflow-hidden transition-all duration-500 bg-cover bg-center bg-no-repeat ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
        style={{
          backgroundImage: darkMode
            ? "url('/images/about-bg.png')"
            : "url('/images/about-bg1.png')",
        }}
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full -z-0 animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
          {/* LEFT SIDE */}
          <div
            className={`group rounded-3xl p-8 md:p-10 border transition-all duration-500 hover:scale-[1.02]
      ${
        darkMode
          ? "bg-gradient-to-br from-purple-900/50 to-black border-purple-700/40 hover:border-purple-400"
          : "bg-white border-purple-300 hover:border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
      }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Let’s work together!
            </h2>

            <p
              className={`mb-8 transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Send me a message and let’s build something amazing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl px-4 py-3 outline-none transition-all duration-300
            hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
            focus:shadow-[0_0_20px_rgba(168,85,247,0.6)]
            ${
              darkMode
                ? "bg-black/40 border border-purple-700/40 text-white placeholder:text-gray-500 focus:border-purple-400"
                : "bg-gray-100 border border-purple-200 text-black placeholder:text-gray-500 focus:border-purple-500"
            }`}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl px-4 py-3 outline-none transition-all duration-300
            hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
            focus:shadow-[0_0_20px_rgba(168,85,247,0.6)]
            ${
              darkMode
                ? "bg-black/40 border border-purple-700/40 text-white placeholder:text-gray-500 focus:border-purple-400"
                : "bg-gray-100 border border-purple-200 text-black placeholder:text-gray-500 focus:border-purple-500"
            }`}
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full rounded-xl px-4 py-3 outline-none transition-all duration-300
          hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
          focus:shadow-[0_0_20px_rgba(168,85,247,0.6)]
          ${
            darkMode
              ? "bg-black/40 border border-purple-700/40 text-white placeholder:text-gray-500 focus:border-purple-400"
              : "bg-gray-100 border border-purple-200 text-black placeholder:text-gray-500 focus:border-purple-500"
          }`}
              />

              {/* Message */}
              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full rounded-xl px-4 py-3 outline-none resize-none transition-all duration-300
          hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
          focus:shadow-[0_0_20px_rgba(168,85,247,0.6)]
          ${
            darkMode
              ? "bg-black/40 border border-purple-700/40 text-white placeholder:text-gray-500 focus:border-purple-400"
              : "bg-gray-100 border border-purple-200 text-black placeholder:text-gray-500 focus:border-purple-500"
          }`}
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]
          transition-all duration-300 px-8 py-3 rounded-full font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400">Message sent successfully!</p>
              )}
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* Phone */}
            {/* Phone */}
            <div
              className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:scale-105
  ${darkMode ? "hover:bg-purple-900/20" : "hover:bg-purple-100"}`}
            >
              <div className="bg-purple-700/20 p-4 rounded-full transition-all duration-300 hover:rotate-12 hover:scale-110">
                <Phone className="text-purple-400" />
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>

                <a
                  href="https://wa.me/923101657409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:text-purple-500 hover:underline ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  +92 3101 657409
                </a>
              </div>
            </div>

            {/* Email */}
            <div
              className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:scale-105
  ${darkMode ? "hover:bg-purple-900/20" : "hover:bg-purple-100"}`}
            >
              <div className="bg-purple-700/20 p-4 rounded-full transition-all duration-300 hover:rotate-12 hover:scale-110">
                <Mail className="text-purple-400" />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=asmasaleem65654@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:text-purple-500 hover:underline ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  asmasaleem65654@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div
              className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer
        ${darkMode ? "hover:bg-purple-900/20" : "hover:bg-purple-100"}`}
            >
              <div className="bg-purple-700/20 p-4 rounded-full transition-all duration-300 hover:rotate-12 hover:scale-110">
                <FaLinkedinIn className="text-purple-400 text-xl" />
              </div>

              <div>
                <h3 className="font-semibold">LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/asma-saleem-0bbaa0319/"
                  target="_blank"
                  className={`transition-all duration-300 hover:text-purple-500 ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  linkedin.com/in/Asma Saleem
                </a>
              </div>
            </div>

            {/* Address */}
            <div
              className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer
        ${darkMode ? "hover:bg-purple-900/20" : "hover:bg-purple-100"}`}
            >
              <div className="bg-purple-700/20 p-4 rounded-full transition-all duration-300 hover:rotate-12 hover:scale-110">
                <MapPin className="text-purple-400" />
              </div>

              <div>
                <h3 className="font-semibold">Address</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-700"}>
                  Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*last page*/}
      
      <section
     
        className={`relative w-full h-[180px] overflow-hidden transition-all duration-500 bg-cover bg-center bg-no-repeat ${
          darkMode ? "bg-[#090016] text-white" : "bg-white text-black"
        }`}
        style={{
          backgroundImage: darkMode
            ? "url('/images/skills-bg.png')"
            : "url('/images/experience-bg1.png')",
        }}
        
      >
        
        {/* Purple Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-[500px] h-[220px] rounded-full blur-[120px] ${
              darkMode ? "bg-purple-500/20" : "bg-purple-400/20"
            }`}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Logo */}
          <div className="relative w-[55px] h-[55px] sm:w-[65px] sm:h-[65px]">
             <Link href="#home">
            <Image
              src="/images/logo1.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
            </Link>
          </div>

          {/* Navbar Links */}
          <div className="mt-4 flex items-center gap-3 sm:gap-5 md:gap-6">
            <Link
              href="#home"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Home
            </Link>

            <Link
              href="#about"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              About
            </Link>

            <Link
              href="#skills"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Projects
            </Link>

            <Link
              href="#experience"
              className={`text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] transition ${
                darkMode
                  ? "text-white/80 hover:text-purple-400"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Experience
            </Link>
          </div>

          {/* Bottom Text */}
          <p
            className={`mt-3 text-[7px] sm:text-[9px] uppercase tracking-[0.35em] ${
              darkMode ? "text-purple-400" : "text-purple-700"
            }`}
          >
            Powered By Asma
          </p>
        </div>

        {/* Bottom Glow Border */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[1px] ${
            darkMode
              ? "bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
              : "bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
          }`}
        />
      </section>
    </>
  );
}
