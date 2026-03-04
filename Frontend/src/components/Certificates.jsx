
import { useEffect, useState } from "react";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `http://127.0.0.1:8000${path}`;
  };

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/credential/certificates/"
        );
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section
      id="Certificates"
      className="relative py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4 sm:px-6 text-white overflow-hidden"
    >
      {/* 🔥 Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold tracking-wide">
            My{" "}
            <span className="relative inline-block text-cyan-400 pb-3">
              Certifications
              <span className="absolute left-0 bottom-0 w-full h-1.5 bg-cyan-400 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Professional achievements and verified credentials
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-3 transition-all duration-500"
            >
              {/* Image */}
              {cert.Certificate_image && (
                <div className="relative overflow-hidden">
                  <img
                    src={getImageUrl(cert.Certificate_image)}
                    alt={cert.Certificate_name}
                    onClick={() =>
                      setSelectedImage(getImageUrl(cert.Certificate_image))
                    }
                    className="w-full h-56 object-cover cursor-pointer transform group-hover:scale-110 transition duration-700"
                  />

                  {/* Date Badge */}
                  <span className="absolute top-4 right-4 bg-cyan-500 text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    {new Date(cert.issue_date).toLocaleDateString()}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                  {cert.Certificate_name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {cert.Certificate_description}
                </p>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-cyan-400 text-sm font-medium">
                    {cert.issued_by}
                  </span>

                  <span className="text-gray-500 text-xs">
                    Added: {new Date(cert.add_time).toLocaleDateString()}
                  </span>
                </div>

                {cert.Certificate_link && (
                  <a
                    href={cert.Certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition duration-300 font-medium"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-6 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl transform scale-100 transition duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;