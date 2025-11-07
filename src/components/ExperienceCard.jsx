import React from "react";

const ExperienceCard = ({ logo, company, role, period, points }) => {
  return (
     console.log(logo),
    <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-105 rounded-xl p-6 shadow-lg border border-gray-700">
      {/* Logo + Company Name */}
      <div className="flex items-center gap-3 mb-2">
  <img
    src={logo}
    alt={`${company} logo`}
    className="w-12 h-12 object-contain rounded-full border border-blue-500 shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform duration-300"
  />
  <h3 className="text-2xl font-semibold text-blue-400">{company}</h3>
</div>
        {/* Role and Period */}

      <p className="text-gray-300 italic">
        {role} | {period}
      </p>

      <ul className="mt-4 list-disc list-inside text-gray-400 space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;

