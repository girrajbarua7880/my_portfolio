import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import API_URL from "../../api";

const ResumeSection = () => {

  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {

    fetch
      (`${API_URL}/method/resumes/`)
      .then(res => res.json())
      .then(data => {

        if (data.file) {
          setResumeUrl(data.file);
        }

      })
      .catch(error => console.error("Error fetching resume:", error));

  }, []);

  const openResume = () => {

    if (resumeUrl) {
      window.open(resumeUrl, "_blank");
    }

  };

  return (

    <section
      id="Resume"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-6"
    >

      <div className="max-w-5xl mx-auto">

        <div className="bg-slate-800/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-12 shadow-2xl text-center">

          {/* Title */}

          <h2 className="text-4xl font-bold text-white">
            Download My <span className="text-cyan-400">Resume</span>
          </h2>

          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-cyan-400 rounded"></div>
          </div>

          {/* Description */}

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Want to explore my professional background, education, and
            technical experience? Download my detailed resume to get a
            comprehensive overview of my skills, projects, and achievements.
          </p>

          {/* Button */}

          <div className="flex justify-center mt-10">

            <button
              onClick={openResume}
              disabled={!resumeUrl}
              className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600
              text-white px-10 py-4 rounded-full font-semibold
              transition duration-300 hover:scale-105
              shadow-lg shadow-cyan-500/40 disabled:opacity-50"
            >
              <FaDownload />
              View Resume
            </button>

          </div>

        </div>

      </div>

    </section>

  );

};

export default ResumeSection;