
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      
      <div className="h-16 flex items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Girraj Barua
        </h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6">
          <a href="/Home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#About" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#Skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#Projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#Contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-100 text-black px-6 py-4 space-y-3`}>
        <a href="/Home" className="block hover:text-blue-600">
          Home
        </a>
        <a href="#About" className="block hover:text-blue-600">
          About
        </a>
        <a href="#Skills" className="block hover:text-blue-600">
          Skills
        </a>
        <a href="#Projects" className="block hover:text-blue-600">
          Projects
        </a>
        <a href="#Contact" className="block hover:text-blue-600">
          Contact
        </a>
      </div>

    </nav>
  );
};

export default Navbar;