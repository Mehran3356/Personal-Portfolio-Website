import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      // className="py-28 bg-[#0f172a] text-white"
      className="py-28 bg-linear-to-b from-black via-gray-950 to-black text-white border-t border-gray-800 scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <div className="bd-gray-900/70 border border-gray-700 rounded-2xl px-8 py-14 md:px-14 md:py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            About <span className="text-blue-400"> Me </span>{" "}
          </h2>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center md:justify-start">
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-xl border border-gray-700 bg-gray-800 shadow-md flex items-center justify-center text-sm text-gray-400"
                aria-hidden="true"
              >
                <img
                  src="/myimage.png"
                  alt="Muhammad Mehran"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-200 leading-relaxed">
                I am Muhammad Mehran, a MERN stack developer passionate about
                creating clean, responsive and user-friendly web applications. I
                enjoy working with modern frontend tools, improving UI/UX, and
                writing code that is simple, readable, and scalable.
              </p>

              <p className=" text-gray-400 leading-relaxed">
                Currently, I am expanding my backend skills with Node.js,
                Express, and MongoDB while building real-world projects to
                strengthen my understanding of full-stack development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
