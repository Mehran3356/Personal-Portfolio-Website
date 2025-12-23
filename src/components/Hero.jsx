import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-24 bg-linear-to-b from-gray-900 via-gray-950 to-black text-white scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-8 items-center">
          <motion.div
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-500/60 rounded-full hidden sm:block"></span>
            <h1 className="text-4xl sm:text-5xl ml-5 md:text-6xl font-bold leading-tight tracking-tight">
              Hi, I'm
              <span className="text-transparent ml-2 bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 ">
                Muhammad Mehran
              </span>
            </h1>
            <p className="mt-4 text-gray-300 text-2xl sm:text-xl leading-relaxed text-center md:text-left max-w-xl mx-auto">
              I am a {""}
              <span className="text-blue-400 font-semibold">
                <Typewriter
                  words={[
                    "MERN-stack Developer",
                    "Frontend Enthusiast",
                    "React.js Developer",
                    "Web Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </p>

            {/* <p className="mt-4 ml-5 text-lg max-w-xl text-gray-300 leading-relaxed">
                MERN-stack developer building clean, user-friendly web apps.I
                focus on frontend interfaces, performance and developer
                experience.
              </p> */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 ml-5 flex flex-wrap gap-5"
            >
              <a
                href="#projects"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl font-medium shadow-md hover:shadow-blue-500/30"
                aria-label="See my projects"
              >
                See my work
              </a>

              <a
                href="/Muhammad Mehran Resume.pdf"
                className="inline-block px-6 py-3 border border-gray-600 rounded-xl font-medium hover:border-gray-400 hover:text-white transition"
                aria-label="Download resume"
              >
                Download resume
              </a>
            </motion.div>
          </motion.div>

          <div className="flex justify-center md:justify-end `md:-translate-y-[-10px]`">
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
              className="w-64 h-64 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border border-gray-700/60 bg-gray-800/30 shadow-2xl backdrop-blur-sm flex items-center justify-center overflow-hidden hover:scale-105 transition-transform text-sm"
              aria-hidden="true"
            >
              <motion.img
                style={{ transformOrigin: "center" }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="/myimage.png"
                alt="Illustration"
                className="w-full h-full object-cover brightness-95 contrast-105"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
