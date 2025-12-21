import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const respose = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (respose.ok) {
      setPopup(true);
      // alert("Message has sent successfully");
      toast.success("Message has sent successfully😊");
      e.target.reset();
    } else {
      // alert("Message could not be sent. Please try again");
      toast.error("Message could not be sent. Please try again😒");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-linear-to-b border-t border-gray-800 from-black via-gray-950 to-black text-white scroll-mt-28"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Contact <span className="text-blue-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-12 text-center"
        >
          Feel free to reach out through the form or any platform below
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-14"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/muhammad-mehran-2b632427b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900 hover:bg-blue-500/10 transition"
          >
            <FaLinkedin size={24} className="text-blue-400" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/Mehran3356"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900 hover:bg-gray-700 transition"
          >
            <FaGithub size={24} className="text-gray-200" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:mehranarohi7@gmail.com"
            className="p-3 rounded-full bg-gray-900 hover:bg-red-500/10 transition"
          >
            <SiGmail size={24} className="text-red-400" />
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="grid gap-3 bg-gray-900/70 p-6 sm:p-8 mt-10 sm:mt-16 mx-4 sm:mx-20 rounded-2xl shadow-xl border border-gray-800"
        >
          <input
            type="hidden"
            name="access_key"
            value="08bd3ec1-0e73-481a-af1b-ff2696b04b2f"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                autoComplete="off"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md text-sm bg-gray-950 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-sm bg-gray-950 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              rows={5}
              name="textarea"
              required
              autoComplete="off"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-md text-sm bg-gray-950 border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-fit px-6 py-2 mt-2 rounded-md bg-blue-600 hover:bg-blue-700 text-sm font-medium transition mx-auto"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
