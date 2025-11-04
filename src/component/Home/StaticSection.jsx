// StaticSection.jsx
import React from "react";
import { Plus } from "lucide-react";
import mentor1 from "../../assets/img/Ellipse.png";
import mentor2 from "../../assets/img/Ellipse1.png";
import mentor3 from "../../assets/img/Ellipse.png";
import { useTheme } from "../../Context/ThemeContext";

export default function StaticSection() {
  const { theme } = useTheme();
  return (
    <div
      className="flex-1 flex flex-col justify-between gap-0 items-center p-2
      sm:flex-col sm:gap-1 md:flex-row md:gap-2 md:p-2 lg:flex-row lg:w-full xl:flex-row 2xl:flex-col 2xl:gap-2 rounded-2xl shadow-sm border border-gray-100 xl:p-3"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[6px] border-[#EAE6FF] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[6px] border-t-[#7B61FF] border-r-[#7B61FF] border-transparent rotate-45"></div>
            <span className="text-sm sm:text-base md:text-lg font-semibold text-[#7B61FF]">
              32%
            </span>
          </div>
        </div>

        <h1
          className={`text-xs sm:text-sm md:text-base font-semibold mt-3
          ${theme === "light" ? "text-black" : "text-white"}`}
        >
          Good Morning <span className="text-[#7B61FF]">Jason 🔥</span>
        </h1>
        <p
          className={`text-xs sm:text-sm md:text-base  mt-1 ${
            theme === "light" ? "text-gray-500" : "text-white"
          }`}
        >
          Continue your learning to achieve your target!
        </p>
      </div>

      {/* Bar Chart Section */}
      <div className="mt-6">
        <h2
          className={`text-xs md:text-sm font-semibold  mb-3 ${
            theme === "light" ? "text-gray-700" : "text-white"
          }`}
        >
          Statistic
        </h2>
        <div className="flex items-end justify-between h-24">
          <div className="w-4 bg-[#EAE6FF] h-10 rounded-md"></div>
          <div className="w-4 bg-[#7B61FF] h-16 rounded-md"></div>
          <div className="w-4 bg-[#EAE6FF] h-20 rounded-md"></div>
          <div className="w-4 bg-[#7B61FF] h-12 rounded-md"></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span className="text-[10px] sm:text-xs md:text-sm">1–10 Aug</span>
          <span className="text-[10px] sm:text-xs md:text-sm">11–20 Aug</span>
          <span className="text-[10px] sm:text-xs md:text-sm">21–30 Aug</span>
        </div>
      </div>

      {/* Mentor Section */}
      <div className="mt-8 w-full md:w-fit">
        <div className="flex justify-between items-center mb-3">
          <h2
            className={`text-xs sm:text-sm font-semibold  ${
              theme === "light" ? "text-gray-700" : "text-white"
            }`}
          >
            Your Mentor
          </h2>
          <button className="p-1 bg-[#EAE6FF] rounded-lg">
            <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-[#7B61FF]" />
          </button>
        </div>

        {/* Mentor List */}
        <div className="space-y-3">
          <MentorCard name="Padahang Satrio" role="Mentor" img={mentor1} />
          <MentorCard name="Zakir Horizontal" role="Mentor" img={mentor2} />
          <MentorCard name="Leonardo Samsul" role="Mentor" img={mentor3} />
        </div>

        <button
          className="w-full mt-3 sm:mt-5 bg-[#EAE6FF] text-[#7B61FF] text-xs sm:text-sm font-medium
        rounded-lg sm:rounded-xl py-1 sm:py-2 hover:bg-[#7B61FF] hover:text-white transition"
        >
          See All
        </button>
      </div>
    </div>
  );
}

// Reusable mentor card component
function MentorCard({ name, role, img }) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex justify-between gap-2 items-center p-2 rounded-xl  transition ${
        theme === "light" ? "hover:bg-gray-00" : "hover:bg-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt={name}
          className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover"
        />
        <div>
          <h3
            className={`text-xs sm:text-sm font-medium  ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            {/* {console.log("Black is there", theme)} */}
            {name}
          </h3>
          <p
            className={`text-[10px] sm:text-xs text-gray-500 ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            {role}
          </p>
        </div>
      </div>
      <button
        className="text-[10px] sm:text-xs text-[#7B61FF] font-medium border border-[#EAE6FF] rounded-sm sm:rounded-lg px-1 sm:px-2 sm:py-1 hover:bg-[#7B61FF]
       hover:text-white transition"
      >
        Follow
      </button>
    </div>
  );
}
// StaticSection.jsx - CLEAN & SIMPLE RESPONSIVE VERSION
// import React from "react";
// import { Plus } from "lucide-react";
// import mentor1 from "../../assets/img/Ellipse.png";
// import mentor2 from "../../assets/img/Ellipse1.png";
// import mentor3 from "../../assets/img/Ellipse.png";

// export default function StaticSection() {
//   return (
//     <div className="flex flex-col lg:flex-col gap-6 p-4 lg:p-6 rounded-2xl shadow-sm border border-gray-100">
//       {/* SECTION 1: Welcome & Progress */}
//       <div className="flex flex-col items-center text-center">
//         {/* Progress Circle */}
//         <div className="relative">
//           <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-[6px] border-[#EAE6FF] flex items-center justify-center">
//             <div className="absolute inset-0 rounded-full border-[6px] border-t-[#7B61FF] border-r-[#7B61FF] border-transparent rotate-45"></div>
//             <span className="text-base lg:text-lg font-semibold text-[#7B61FF]">
//               32%
//             </span>
//           </div>
//         </div>

//         {/* Greeting Text */}
//         <h1 className="text-sm lg:text-base font-semibold mt-4">
//           Good Morning <span className="text-[#7B61FF]">Jason 🔥</span>
//         </h1>
//         <p className="text-xs lg:text-sm text-gray-500 mt-2">
//           Continue your learning to achieve your target!
//         </p>
//       </div>

//       {/* SECTION 2: Bar Chart */}
//       <div className="flex-1">
//         <h2 className="text-sm font-semibold text-gray-700 mb-3">Statistic</h2>

//         {/* Bars */}
//         <div className="flex items-end justify-around gap-2 h-24">
//           <div className="w-8 bg-[#EAE6FF] h-10 rounded-md"></div>
//           <div className="w-8 bg-[#7B61FF] h-16 rounded-md"></div>
//           <div className="w-8 bg-[#EAE6FF] h-20 rounded-md"></div>
//           <div className="w-8 bg-[#7B61FF] h-12 rounded-md"></div>
//         </div>

//         {/* Labels */}
//         <div className="flex justify-around mt-2 text-xs text-gray-400">
//           <span>1–10 Aug</span>
//           <span>11–20 Aug</span>
//           <span>21–30 Aug</span>
//         </div>
//       </div>

//       {/* SECTION 3: Mentors */}
//       <div className="w-full lg:w-64">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-sm font-semibold text-gray-700">Your Mentor</h2>
//           <button className="p-2 bg-[#EAE6FF] rounded-lg hover:bg-[#7B61FF] transition group">
//             <Plus className="w-4 h-4 text-[#7B61FF] group-hover:text-white" />
//           </button>
//         </div>

//         {/* Mentor List */}
//         <div className="space-y-3">
//           <MentorCard name="Padahang Satrio" role="Mentor" img={mentor1} />
//           <MentorCard name="Zakir Horizontal" role="Mentor" img={mentor2} />
//           <MentorCard name="Leonardo Samsul" role="Mentor" img={mentor3} />
//         </div>

//         {/* See All Button */}
//         <button className="w-full mt-5 bg-[#EAE6FF] text-[#7B61FF] text-sm font-medium rounded-xl py-2 hover:bg-[#7B61FF] hover:text-white transition">
//           See All
//         </button>
//       </div>
//     </div>
//   );
// }

// // Mentor Card Component
// function MentorCard({ name, role, img }) {
//   return (
//     <div className="flex justify-between items-center p-2 rounded-xl hover:bg-gray-50 transition">
//       <div className="flex items-center gap-3">
//         <img
//           src={img}
//           alt={name}
//           className="w-8 h-8 rounded-full object-cover"
//         />
//         <div>
//           <h3 className="text-sm font-medium text-gray-800">{name}</h3>
//           <p className="text-xs text-gray-500">{role}</p>
//         </div>
//       </div>

//       <button className="text-xs text-[#7B61FF] font-medium border border-[#EAE6FF] rounded-lg px-3 py-1 hover:bg-[#7B61FF] hover:text-white transition">
//         Follow
//       </button>
//     </div>
//   );
// }
