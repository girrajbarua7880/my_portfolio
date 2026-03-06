

import { useEffect, useState } from "react";
import API_URL from "../../api";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(
      `${API_URL}/method/skills/`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setSkills(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section id="Skills" className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold tracking-wide">
            My{" "}
            <span className="relative inline-block text-cyan-400 pb-3">
              Skills
              <span className="absolute left-0 bottom-0 w-full h-1.5 bg-cyan-400 rounded-full"></span>
            </span>
          </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">

          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center text-center group"
            >

              <div className="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center mb-6 shadow-lg transition duration-500 group-hover:scale-110">

                {skill.logo && (
                  <img
                    src={skill.logo}
                    alt={skill.skill_name}
                    className="w-16 h-16 object-contain"
                  />
                )}

              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition duration-300">
                {skill.skill_name}
              </h3>

              <p className="text-gray-400 text-sm max-w-xs">
                {skill.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;