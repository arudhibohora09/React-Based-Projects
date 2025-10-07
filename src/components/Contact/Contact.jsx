import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container mx-auto my-16 px-4 sm:px-6 md:px-8">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
        className="text-center space-y-2 max-w-lg mx-auto"
      >
        <motion.h1 className="text-4xl sm:text-3xl md:text-4xl font-bold font-serif text-green-600">
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.6 }}
          className="text-gray-500 text-sm sm:text-xs md:text-sm opacity-80"
        >
          Have a question or want to work with us? Fill out the form or check our location below.
        </motion.p>
      </motion.div>

      {/* Form + Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.8 }}
        className="mt-10 flex flex-col lg:flex-row gap-8"
      >
        {/* Form */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2 font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message..."
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Prakriti Farm Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.000000!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190000000000%3A0x0000000000000000!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1696512345678!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="h-96 lg:h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
