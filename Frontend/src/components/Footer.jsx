

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaInstagram,
  FaWhatsapp,
  FaSnapchatGhost,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0a0f1f] to-[#111827] text-gray-400 py-16 px-6">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Girraj <span className="text-cyan-400">Barua</span>
          </h2>
          <p className="mt-2 text-sm">
            Full Stack Developer | Cyber Security Enthusiast
          </p>
        </div>

        {/* Right Section - All Icons */}
        <div className="flex gap-7 text-lg items-center">

          {/* Home */}
          <a
            href="/"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaHome />
          </a>

          <a
            href="https://github.com/girrajbarua7880"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/girrajbarua7880"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:girrajbarua7880@email.com"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/918602881218"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          

          <a
            href="https://instagram.com/cyberx_1520"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>

          

          <a
            href="https://www.snapchat.com/add/cyberx-1520"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaSnapchatGhost />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaFacebook />
          </a>

          

        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Girraj Barua. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;