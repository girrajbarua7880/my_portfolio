import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/project/")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="Projects"
      className="py-20 bg-gray-900 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* 🔥 Heading With Same Underline Style As "My Tools" */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-wide">
            My{" "}
            <span className="relative inline-block text-cyan-400 pb-3">
              Projects
              <span className="absolute left-0 bottom-0 w-full h-1.5 bg-cyan-400 rounded-full"></span>
            </span>
          </h2>
          
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const maxLength = 100;
            const shortText = project.description?.slice(0, maxLength);

            return (
              <div
                key={project.id}
                className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition duration-300"
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
                    {isExpanded
                      ? project.description
                      : shortText}

                    {project.description?.length > maxLength && (
                      <span
                        onClick={() => toggleReadMore(project.id)}
                        className="text-cyan-400 cursor-pointer font-semibold ml-1 hover:underline"
                      >
                        {isExpanded ? " Show Less" : "... Read More"}
                      </span>
                    )}
                  </p>

                  <div className="flex gap-4">
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-gray-700 rounded-md hover:bg-cyan-500 transition duration-300"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-gray-700 rounded-md hover:bg-green-500 transition duration-300"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;