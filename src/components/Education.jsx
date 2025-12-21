import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-28 bg-linear-to-b from-black via-gray-950 to-black text-white border-t border-gray-800 scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        {/* Heading  */}
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
          Educa<span className="text-blue-400">tion</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line  */}
          <div className="absolute left-4 sm:left-6 top-0 h-full w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-blue-500 opacity-70"></div>

          {/* Matric  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative pl-16 sm:pl-20 pb-16"
          >
            <div className="absolute left-0 top-1">
              <div className="w-12 h-12 rounded-full bg-gray-900 border border-blue-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <FaGraduationCap className="text-blue-400" />
              </div>
            </div>

            <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-blue-500/40 transition">
              <h3 className="text-xl font-semibold">Matriculation (Science)</h3>
              <p className="text-sm text-gray-400 mt-1">
                2017 – 2019 | BISE Kohat
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Matriculation in science, focused on Mathematics, Physics, and
                Computer Science.
              </p>
            </div>
          </motion.div>

          {/* Intermediat  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative pl-16 sm:pl-20 pb-16"
          >
            <div className="absolute left-0 top-1">
              <div className="w-12 h-12 rounded-full bg-gray-900 border border-blue-500/40 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <FaGraduationCap className="text-blue-400" />
              </div>
            </div>

            <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-blue-500/40 transition">
              <h3 className="text-xl font-semibold">
                Intermediate (Pre Medical)
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {" "}
                2019 - 2021 | BISE Kohat
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Built a strong foundation in Biology, Chemistry, and Physics
                with a focus on critical thinking.
              </p>
            </div>
          </motion.div>

          {/* Diploma  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative pl-16 sm:pl-20 pb-16"
          >
            <div className="absolute left-0 top-1">
              <div className="w-12 h-12 rounded-full bg-gray-900 border border-blue-500/40 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <FaGraduationCap className="text-blue-400" />
              </div>
            </div>

            <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-blue-500/40 transition">
              <h3 className="text-xl font-semibold">
                Diploma in Documentary & Filmmaking
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                2021 | NAVCTTC Pakistan
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Practical experience in filming, editing, storytelling, and
                visual communication.
              </p>
            </div>
          </motion.div>
          {/* BS CS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative pl-16 sm:pl-20"
          >
            <div className="absolute left-0 top-1">
              <div className="w-12 h-12 rounded-full bg-gray-900 border border-blue-500/40 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <FaGraduationCap className="text-blue-400" />
              </div>
            </div>

            <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-blue-500/40 transition">
              <h3 className="text-xl font-semibold">BS in Computer Science</h3>
              <p className="text-sm text-gray-400 mt-1">
                2022 – Present · Khushal Khan Khattak University, Karak
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Focused on software engineering, data structures, and full-stack
                web development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
