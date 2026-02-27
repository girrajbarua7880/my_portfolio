import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="relative py-20 bg-slate-900 text-white px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl top-10 right-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-cyan-500/30 blur-xl rounded-2xl group-hover:bg-cyan-500/50 transition duration-500"></div>
              <img
                src="/images/Girraj.jpeg"
                alt="Profile"
                className="relative w-64 sm:w-80 rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-gray-300 space-y-6 leading-relaxed">

            <p>
              I’m a <span className="text-cyan-400 font-semibold">Full Stack Web Developer</span> 
              passionate about building fast, secure, and user-focused digital solutions. 
              I work across the entire development lifecycle — from designing intuitive 
              and responsive user interfaces to developing scalable backend systems.
            </p>

            <p>
              On the frontend, I specialize in 
              <span className="text-cyan-400 font-medium"> HTML, CSS, JavaScript, and React</span>, 
              creating modern, interactive experiences that are visually appealing and performance-optimized.
              On the backend, I primarily work with 
              <span className="text-cyan-400 font-medium"> Python (Django)</span>, 
              focusing on secure architecture, authentication systems, and database-driven applications.
            </p>

            <p>
              I have hands-on experience with 
              <span className="text-cyan-400 font-medium"> SQL databases, Linux environments, and Postman</span> 
              for API testing and development workflows. 
              I also deploy applications using platforms like 
              <span className="text-cyan-400 font-medium"> Netlify and Render</span>.
            </p>

            <p>
              I’m confident with Git/GitHub, version control, and modern deployment practices. 
              Security and performance are priorities in my development process, 
              and I continuously explore new technologies to stay aligned with modern web development.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
