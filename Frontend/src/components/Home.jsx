
const Home = () => {
  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Glow (smaller on mobile) */}
      <div className="absolute w-52 h-52 sm:w-80 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse top-16 left-5"></div>
      <div className="absolute w-52 h-52 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse bottom-16 right-5"></div>

      <div className="text-center max-w-3xl relative z-10">

        {/* Intro */}
        <p className="text-gray-400 text-base sm:text-lg mb-2 tracking-wide animate-fadeIn">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 animate-slideUp">
          <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
            Girraj Barua
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-medium">
          <span className="border-r-2 border-cyan-400 pr-2 animate-typing whitespace-nowrap overflow-hidden inline-block max-w-full">
            Cyber Security Enthusiast & Full Stack Developer
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto">
          Passionate about securing digital systems and building scalable
          modern web applications. Focused on performance, security,
          and clean architecture.
        </p>

        {/* Buttons (Stack on mobile, row on desktop) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">

          <a
            href="#Projects"
            className="w-full sm:w-auto text-center bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            View Projects
          </a>

          <a
            href="#Contact"
            className="w-full sm:w-auto text-center border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold transition duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
          >
            Contact Me
          </a>

        </div>
      </div>

      
    </section>
  );
};

export default Home;
