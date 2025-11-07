import React from "react";

const SkillBadge = ({ icon: Icon, label, color }) => {
    return(
      <div className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 hover:scale-105 transition-all duration-300 px-4 py-2 rounded-full shadow-md border border-gray-700 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]">
         {Icon && <Icon className={`${color} text-xl`} />}
            <span className="text-gray-200 text-sm font-medium">{label}</span>
        </div>
    )
}
export default SkillBadge;