import React from "react";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 bg-linear-to-b from-black via-gray-950 to-black text-white border-t border-gray-800 scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Ski<span className="text-blue-400">lls</span>
        </h2>
        {/* Skills cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 place-items-center ">
          {/* Html */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="group relative  w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full  bg-linear-to-r from-blue-500/50 to-purple-500/40 p-[1.5px]"
          >
            <div className="w-full h-full rounded-full bg-gray-950 flex flex-col items-center justify-center gap-2 transition group-hover:scale-105">
              <FaHtml5 className="text-5xl text-orange-500 group-hover:drop-shadow-[0_0_12px_rgb(249,115,0.6)] transition " />
              <span className="text-sm font-medium text-gray-300"> HTML</span>
            </div>
          </motion.div>

          {/* Css */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="group relative  w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full  bg-linear-to-r from-blue-500/50 to-purple-500/40 p-[1.5px]"
          >
            <div className="w-full h-full rounded-full bg-gray-950 flex flex-col items-center justify-center gap-2 transition group-hover:scale-105">
              <FaCss3 className="text-5xl text-blue-500 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] transition" />
              <span className="text-sm font-medium text-gray-300"> CSS</span>
            </div>
          </motion.div>
          {/* JavaScript  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="group relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full  bg-linear-to-r from-blue-500/50 to-purple-500/40 p-[1.5px]"
          >
            <div className="w-full h-full rounded-full bg-gray-950 flex flex-col items-center justify-center gap-2 transition group-hover:scale-105">
              <FaJs className="text-5xl text-yellow-400 group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.6)] transition" />
              <span className="text-sm font-medium text-gray-300">
                JavaScript
              </span>
            </div>
          </motion.div>

          {/* React  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="group relative  w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full  bg-linear-to-r from-blue-500/40 to-purple-500/40 p-[1.5px]"
          >
            <div className="w-full h-full rounded-full bg-gray-950 flex flex-col items-center justify-center gap-2 transition group-hover:scale-105">
              <FaReact className="text-5xl text-cyan-400 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] transition" />
              <span className="text-sm font-medium text-gray-300">
                {" "}
                React.js
              </span>
            </div>
          </motion.div>
          {/* Node  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="group relative  w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full  bg-linear-to-r from-blue-500/40 to-purple-500/40 p-[1.5px]"
          >
            <div className="w-full h-full rounded-full bg-gray-950 flex flex-col items-center justify-center gap-2 transition group-hover:scale-105">
              <FaNodeJs className="text-5xl text-green-500 group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
              <span className="text-sm font-medium text-gray-300">Node.js</span>
            </div>
          </motion.div>
          {/* Express  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="group relative  w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full  bg-linear-to-r from-blue-500/40 to-purple-500/40 p-[1.5px]"
          >
            <div className="w-full h-full rounded-full bg-gray-950 flex flex-col items-center justify-center gap-2 transition group-hover:scale-105">
              <SiExpress className="text-5xl text-gray-200 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition" />
              <span className="text-sm font-medium text-gray-300">
                {" "}
                Express.js
              </span>
            </div>
          </motion.div>
          {/* MongoDb  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="group relative  w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full  bg-linear-to-r from-blue-500/40 to-purple-500/40 p-[1.5px]"
          >
            <div className="w-full h-full rounded-full bg-gray-950 flex flex-col items-center justify-center gap-2 transition group-hover:scale-105">
              <SiMongodb className="text-5xl text-green-400 group-hover:drop-shadow-[0_0_12px_rgba(74,222,128,0.6)] transition" />
              <span className="text-sm font-medium text-gray-300">
                {" "}
                MongoDB
              </span>
            </div>
          </motion.div>
          {/* GitHub  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="group relative  w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full  bg-linear-to-r from-blue-500/40 to-purple-500/40 p-[1.5px]"
          >
            <div className="w-full h-full rounded-full bg-gray-950 flex flex-col items-center justify-center gap-2 transition group-hover:scale-105">
              <FaGitAlt className="text-4xl text-red-500 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.6)] transition" />
              <span className="text-sm font-medium text-gray-300">
                Git / GitHub
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
