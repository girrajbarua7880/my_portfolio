import { useEffect, useState } from "react";
import API_URL from "../../api";

const BadgeSection = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/credential/badges/`)
      .then((response) => response.json())
      .then((data) => setBadges(data))
      .catch((error) => console.error("Error fetching badges:", error));
  }, []);

  return (
    <section 
    id="Badges"
    className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold tracking-wide">
            My{" "}
            <span className="relative inline-block text-cyan-400 pb-3">
              Badges
              <span className="absolute left-0 bottom-0 w-full h-1.5 bg-cyan-400 rounded-full"></span>
            </span>
          </h2>

          <div className="flex justify-center mt-4">
            <div className="absolute left-0 bottom-0 w-full h-1.5 bg-cyan-400 rounded-full"></div>
          </div>
        </div>

        {/* Badge Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">

          {badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-slate-800 p-4 rounded-lg text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300"
            >

              {/* Badge Image */}
              <img
                src={badge.Badge_image}
                alt={badge.Badge_name}
                className="w-28 h-28 object-contain mx-auto mb-3"
              />

              {/* Badge Name */}
              <h3 className="text-sm font-semibold text-white">
                {badge.Badge_name}
              </h3>

              {/* Issuer */}
              <p className="text-gray-400 text-xs mt-1">
                Issued by {badge.issued_by}
              </p>

              {/* Date */}
              <p className="text-gray-500 text-xs">
                {badge.issue_date}
              </p>

              {/* Link */}
              <a
                href={badge.Badge_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-xs mt-2 inline-block hover:underline"
              >
                View →
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BadgeSection;