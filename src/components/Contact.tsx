import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-opacity-70 bg-slate-900">
      <div className="section-container">
        {/* Title */}
        <h2 className="section_title mb-6">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-slate-800 bg-opacity-50 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-700 text-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-700 text-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="w-full bg-gray-700 text-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white font-bold px-6 py-2 rounded-md hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-300">
            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
            <p>
              I’m always open to discussing new opportunities, exciting
              projects, or sharing knowledge. Feel free to reach out!
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-pink-500" />
                <Link
                  href="mailto:your.email@example.com"
                  className="hover:text-pink-500 transition"
                >
                  your.email@example.com
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faPhone} className="text-pink-500" />
                <Link
                  href="tel:+1234567890"
                  className="hover:text-pink-500 transition"
                >
                  +123 456 7890
                </Link>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
