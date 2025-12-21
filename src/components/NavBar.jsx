import React, { useEffect, useState } from "react";
import { TbSectionSign } from "react-icons/tb";
import { motion } from "framer-motion";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 150 && top > -300) setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <header
      // initial={{ y: -80, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-900 py-2 text-white fixed top-0 left-0 w-full border-b-blue-800 z-50 shadow-md scroll-mt-28"
    >
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 lg:px-20  py-4 flex justify-between items-center"
      >
        <h1 className="text-2xl font-semibold tracking-wide">
          Mehran<span className="text-blue-400">.dev </span>{" "}
        </h1>

        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex space-x-8 text-gray-300 font-medium"
        >
          <motion.a
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#hero"
            className={`relative group transition ${
              active === "hero" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            Home
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all ${
                active === "hero" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#about"
            className={`relative group transition ${
              active === "about" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            About
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all ${
                active === "about" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#skills"
            className={`relative group transition ${
              active === "skills" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            Skills
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all ${
                active === "skills" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#projects"
            className={`relative group transition ${
              active === "projects" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            Projects
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all 
              ${active === "projects" ? "w-full" : "w-0 group-hover:w-full"}
            `}
            ></span>
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#contact"
            className={`relative group transition ${
              active === "contact" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            Contact
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all 
              ${active === "contact" ? "w-full" : "w-0 group-hover:w-full"}
            `}
            ></span>
          </motion.a>
        </motion.nav>
        {/* Mobile menu code  */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition text-2xl z-60"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </motion.div>
      {/* Mobile drop down menu   */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800/60 backdrop-blur-xl shadow-xl md:hidden z-40  transition-transform duration-300  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 py-20 space-y-6 text-lg text-gray-200">
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className={`${
              active === "hero" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className={`${
              active === "about" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className={`${
              active === "skills" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className={`${
              active === "projects" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`${
              active === "contact" ? "text-blue-400" : "hover:text-white"
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
