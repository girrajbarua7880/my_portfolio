// import React, { useEffect, useState } from "react";
// import { FaDownload } from "react-icons/fa";

// const Resume = () => {
//   const [file, setFile] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//           setFile(fullUrl);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching resume:", err);
//         setLoading(false);
//       });
//   }, []);

//   const handleDownload = () => {
//     fetch(file)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "Resume.pdf";
//         document.body.appendChild(a);
//         a.click();
//         a.remove();
//       })
//       .catch((error) => {
//         console.error("Download failed:", error);
//       });
//   };

//   return (
//     <section
//     id="Resume"
//      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4 sm:px-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="relative bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-3xl p-10 sm:p-14 shadow-2xl text-center">

//           {/* Glow Background Effect */}
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>

//           {/* Title */}
//           <h2 className="text-3xl sm:text-4xl font-bold text-white">
//             Download My <span className="text-cyan-400">Resume</span>
//           </h2>

//           {/* Divider */}
//           <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

//           {/* Description */}
//           <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
//             Want to explore my professional background, education, and technical
//             experience? Download my detailed resume to get a comprehensive
//             overview of my skills, projects, and achievements.
//           </p>

//           {/* Button */}
//           <div className="mt-10">
//             {loading ? (
//               <p className="text-gray-400">Loading resume...</p>
//             ) : file ? (
//               <button
//                 onClick={handleDownload}
//                 className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
//               >
//                 <FaDownload />
//                 Download Resume
//               </button>
//             ) : (
//               <p className="text-red-400">Resume not available</p>
//             )}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;

// import React, { useEffect, useState } from "react";
// import { FaDownload } from "react-icons/fa";

// const Resume = () => {
//   const [file, setFile] = useState("");
//   const [loading, setLoading] = useState(true);

//   const API = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/method/resumes/`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.resume_file) {
//           const fullUrl = `${API}${data.resume_file}`;
//           setFile(fullUrl);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching resume:", err);
//         setLoading(false);
//       });
//   }, [API]);

//   const handleDownload = () => {
//     fetch(file)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "Resume.pdf";
//         document.body.appendChild(a);
//         a.click();
//         a.remove();
//       })
//       .catch((error) => {
//         console.error("Download failed:", error);
//       });
//   };

//   return (
//     <section
//       id="Resume"
//       className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4 sm:px-6"
//     >
//       <div className="max-w-4xl mx-auto">
//         <div className="relative bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-3xl p-10 sm:p-14 shadow-2xl text-center">

//           {/* Glow Background Effect */}
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>

//           {/* Title */}
//           <h2 className="text-3xl sm:text-4xl font-bold text-white">
//             Download My <span className="text-cyan-400">Resume</span>
//           </h2>

//           {/* Divider */}
//           <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

//           {/* Description */}
//           <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
//             Want to explore my professional background, education, and technical
//             experience? Download my detailed resume to get a comprehensive
//             overview of my skills, projects, and achievements.
//           </p>

//           {/* Button */}
//           <div className="mt-10">
//             {loading ? (
//               <p className="text-gray-400">Loading resume...</p>
//             ) : file ? (
//               <button
//                 onClick={handleDownload}
//                 className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
//               >
//                 <FaDownload />
//                 Download Resume
//               </button>
//             ) : (
//               <p className="text-red-400">Resume not available</p>
//             )}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;

import React from "react";
import { FaDownload } from "react-icons/fa";

const ResumeSection = () => {

  const handleDownload = async () => {
    try {

      const response = await fetch("http://127.0.0.1:8000/method/resumes/");

      const data = await response.json();

      const fileUrl = data[0].Resume_file;

      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "Girraj_Barua_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error("Download error:", error);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-slate-800/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-12 shadow-2xl text-center">

          <h2 className="text-4xl font-bold text-white">
            Download My <span className="text-cyan-400">Resume</span>
          </h2>

          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-cyan-400 rounded"></div>
          </div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Want to explore my professional background, education, and technical experience?
            Download my detailed resume to get a comprehensive overview of my skills,
            projects, and achievements.
          </p>

          <button
            onClick={handleDownload}
            className="mt-10 flex items-center gap-3 mx-auto bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/40"
          >
            <FaDownload />
            Download Resume
          </button>

        </div>

      </div>

    </section>
  );
};

export default ResumeSection;