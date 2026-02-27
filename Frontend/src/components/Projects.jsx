import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-4">

                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      Live
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;