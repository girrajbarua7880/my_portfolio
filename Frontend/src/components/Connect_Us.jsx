
import React, { useState } from "react";
import API_URL from "../../api";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
      `${API_URL}/contact/connect/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      alert(data.message || "Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section
      id="Contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - CONNECT */}
        <div className="bg-slate-800/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-3xl font-bold text-white">
            Let’s <span className="text-cyan-400">Connect</span>
          </h2>

          <div className="w-14 h-1 bg-cyan-400 mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-6 leading-relaxed">
            I’m always open to discussing new projects, creative ideas,
            or opportunities to collaborate. Feel free to reach out
            through any platform below.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">

            {/* Email */}
            <a
              href="mailto:girrajbarua7880@gmail.com"
              className="group bg-slate-900/80 p-6 rounded-2xl border border-slate-700 
              hover:border-cyan-400 transition duration-300 hover:scale-105 
              hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                Email
              </p>
              <p className="text-gray-400 text-sm mt-1">
                girrajbarua7880@gmail.com
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/girrajbarua7880"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900/80 p-6 rounded-2xl border border-slate-700 
              hover:border-cyan-400 transition duration-300 hover:scale-105 
              hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                LinkedIn
              </p>
              <p className="text-gray-400 text-sm mt-1">
                linkedin.com/in/girrajbarua7880
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/girrajbarua7880"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900/80 p-6 rounded-2xl border border-slate-700 
              hover:border-cyan-400 transition duration-300 hover:scale-105 
              hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                GitHub
              </p>
              <p className="text-gray-400 text-sm mt-1">
                github.com/girrajbarua7880
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+918602881218"
              className="group bg-slate-900/80 p-6 rounded-2xl border border-slate-700 
              hover:border-cyan-400 transition duration-300 hover:scale-105 
              hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                Phone
              </p>
              <p className="text-gray-400 text-sm mt-1">
                +91 8602881218
              </p>
            </a>

          </div>

        </div>


        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-3xl font-bold text-white">
            Send Me a <span className="text-cyan-400">Message</span>
          </h2>

          <div className="w-14 h-1 bg-cyan-400 mt-4 rounded-full"></div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 transition"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;