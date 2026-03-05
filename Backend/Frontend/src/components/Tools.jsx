import { useEffect, useState } from "react";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/method/tools/")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setTools(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section id="Tools" className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto text-center ">

      
          <h2 className="text-5xl font-bold tracking-wide">
            My{" "}
            <span className="relative inline-block text-cyan-400 pb-3">
              Tools
              <span className="absolute left-0 bottom-0 w-full h-1.5 bg-cyan-400 rounded-full"></span>
            </span>
          </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">

          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:border hover:border-cyan-400 transition duration-500 group"
            >

              <div className="w-24 h-24 mx-auto rounded-full bg-gray-700 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition duration-500">

                {tool.logo && (
                  <img
                    src={tool.logo}
                    alt={tool.tool_name}
                    className="w-14 h-14 object-contain"
                  />
                )}

              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition duration-300">
                {tool.tool_name}
              </h3>

              <p className="text-gray-400 text-sm">
                {tool.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Tools;