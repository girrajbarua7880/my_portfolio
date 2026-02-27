// import React from "react";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-slate-900 text-gray-300 border-t border-gray-700">
//       <div className="max-w-6xl mx-auto px-6 py-12">

//         <div className="grid md:grid-cols-3 gap-10">

//           {/* Left Section */}
//           <div>
//             <h2 className="text-2xl font-bold text-white mb-4">
//               Girraj Barua
//             </h2>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Full Stack Developer & Cyber Security Enthusiast.
//               Building secure, scalable and modern web applications.
//             </p>
//           </div>

//           {/* Middle Section - Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#Home" className="hover:text-cyan-400 transition">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#About" className="hover:text-cyan-400 transition">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#Skills" className="hover:text-cyan-400 transition">
//                   Skills
//                 </a>
//               </li>
//               <li>
//                 <a href="#Contact" className="hover:text-cyan-400 transition">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section - Social Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">
//               Connect With Me
//             </h3>

//             <div className="flex gap-4 text-xl">
//               <a
//                 href="https://github.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-cyan-400 transition"
//               >
//                 <FaGithub />
//               </a>

//               <a
//                 href="https://linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-cyan-400 transition"
//               >
//                 <FaLinkedin />
//               </a>

//               <a
//                 href="https://instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-cyan-400 transition"
//               >
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} Girraj Barua. All rights reserved.
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-10 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">
            Girraj <span className="text-cyan-400">Barua</span>
          </h3>
          <p className="text-sm mt-2">
            Full Stack Developer | Cyber Security Enthusiast
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">

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

        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm mt-8 text-gray-500">
        © {new Date().getFullYear()} Girraj Barua. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
