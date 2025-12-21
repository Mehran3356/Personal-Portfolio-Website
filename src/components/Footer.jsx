import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-gray-800 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-semibold text-white tracking-wide">
            Muhammad Mehran
          </h2>
          <p className="text-sm mt-2 text-gray-500 max-w-xs">
            Mern Stack Developer - Building clean and modern web applications.
          </p>
        </motion.div>
        {/* Navigation  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li>
              <a href="#hero" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-white">
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
        {/* Social icons */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mt-2"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/Mehran3356"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <FaGithub size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/muhammad-mehran-2b632427b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:mehranarohi7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <SiGmail size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
      {/* Copyright message */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="border-t border-gray-700 mt-10 pt-5 text-center text-sm"
      >
        © {new Date().getFullYear()} Muhammad Mehran. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
