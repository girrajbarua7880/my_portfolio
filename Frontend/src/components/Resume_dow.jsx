import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        <div className="relative bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-3xl p-10 sm:p-14 shadow-2xl text-center">

          {/* Glow Background Effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Download My <span className="text-cyan-400">Resume</span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Want to explore my professional background, education, and technical
            experience? Download my detailed resume to get a comprehensive
            overview of my skills, projects, and achievements.
          </p>

          {/* Button */}
          <div className="mt-10">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Resume;
