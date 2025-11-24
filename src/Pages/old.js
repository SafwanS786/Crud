
// import React, { useState } from "react";
// import Todo from "../component/Inbox/Todo";
// import { useTheme } from "../Context/ThemeContext";

// export default function InboxPages() {
//   const { theme } = useTheme();
//   const [view, setView] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showFilters, setShowFilters] = useState(false);

//   // Sample stats for the inbox
//   const stats = {
//     total: 24,
//     today: 8,
//     overdue: 3,
//     completed: 156,
//   };

//   return (
//     <div
//       className={`min-h-screen w-full p-4 md:p-6 lg:p-8 transition-colors duration-300 ${
//         theme === "light"
//           ? "bg-gray-50 text-gray-900"
//           : "bg-[#01081d] text-white"
//       }`}
//     >
//       {/* Header Section */}
//       <div className="mb-8">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight mb-1">Inbox</h1>
//             <p
//               className={`text-sm ${
//                 theme === "light" ? "text-gray-600" : "text-gray-400"
//               }`}
//             >
//               Manage your tasks and stay organized
//             </p>
//           </div>
//           <button
//             className={`px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg transition-all duration-200 hover:scale-105 ${
//               theme === "light"
//                 ? "bg-blue-600 text-white hover:bg-blue-700"
//                 : "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-400/30"
//             }`}
//           >
//             <span className="text-lg mr-2">+</span> New Task
//           </button>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//           {[
//             {
//               label: "Total Tasks",
//               value: stats.total,
//               color: "blue",
//               icon: "📋",
//             },
//             {
//               label: "Due Today",
//               value: stats.today,
//               color: "orange",
//               icon: "⏰",
//             },
//             {
//               label: "Overdue",
//               value: stats.overdue,
//               color: "red",
//               icon: "⚠️",
//             },
//             {
//               label: "Completed",
//               value: stats.completed,
//               color: "green",
//               icon: "✅",
//             },
//           ].map((stat, idx) => (
//             <div
//               key={idx}
//               className={`rounded-xl p-4 shadow transition-all duration-200 hover:scale-105 cursor-pointer ${
//                 theme === "light"
//                   ? "bg-white border border-gray-200"
//                   : "bg-white/5 border border-white/10"
//               }`}
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-2xl">{stat.icon}</span>
//                 <span
//                   className={`text-2xl font-bold ${
//                     stat.color === "blue"
//                       ? "text-blue-500"
//                       : stat.color === "orange"
//                       ? "text-orange-500"
//                       : stat.color === "red"
//                       ? "text-red-500"
//                       : "text-green-500"
//                   }`}
//                 >
//                   {stat.value}
//                 </span>
//               </div>
//               <p
//                 className={`text-xs font-medium ${
//                   theme === "light" ? "text-gray-600" : "text-gray-400"
//                 }`}
//               >
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Search and Filter Bar */}
//         <div className="flex flex-col sm:flex-row gap-3 mb-4">
//           <div className="flex-1 relative">
//             <input
//               type="text"
//               placeholder="Search tasks..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className={`w-full px-4 py-2.5 pl-10 rounded-xl border transition-colors ${
//                 theme === "light"
//                   ? "bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                   : "bg-white/5 border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white"
//               } outline-none`}
//             />
//             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">
//               🔍
//             </span>
//           </div>
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className={`px-4 py-2.5 rounded-xl border transition-all ${
//               theme === "light"
//                 ? "bg-white border-gray-300 hover:bg-gray-50"
//                 : "bg-white/5 border-white/10 hover:bg-white/10"
//             }`}
//           >
//             <span className="mr-2">⚙️</span> Filters
//           </button>
//         </div>

//         {/* Filter Options (conditional) */}
//         {showFilters && (
//           <div
//             className={`p-4 rounded-xl mb-4 animate-fadeIn ${
//               theme === "light"
//                 ? "bg-white border border-gray-200"
//                 : "bg-white/5 border border-white/10"
//             }`}
//           >
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "All",
//                 "Active",
//                 "Completed",
//                 "High Priority",
//                 "Low Priority",
//                 "No Due Date",
//               ].map((filter) => (
//                 <button
//                   key={filter}
//                   className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
//                     theme === "light"
//                       ? "bg-gray-100 hover:bg-gray-200"
//                       : "bg-white/10 hover:bg-white/20"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* View Tabs */}
//         <div
//           className={`flex gap-2 p-1 rounded-xl inline-flex ${
//             theme === "light" ? "bg-gray-200" : "bg-white/10"
//           }`}
//         >
//           {["all", "today", "upcoming", "completed"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setView(tab)}
//               className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
//                 view === tab
//                   ? theme === "light"
//                     ? "bg-white shadow text-blue-600"
//                     : "bg-blue-500/20 text-blue-300"
//                   : theme === "light"
//                   ? "text-gray-600 hover:text-gray-900"
//                   : "text-gray-400 hover:text-white"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div
//         className={`rounded-2xl shadow-xl border p-6 transition-all duration-300 ${
//           theme === "light"
//             ? "bg-white border-gray-200"
//             : "bg-white/3 border-white/10"
//         }`}
//       >
//         {/* Section Header */}
//         <div
//           className="flex items-center justify-between mb-4 pb-4 border-b ${
//           theme === 'light' ? 'border-gray-200' : 'border-white/10'
//         }"
//         >
//           <h2 className="text-xl font-semibold">
//             {view === "all" && "All Tasks"}
//             {view === "today" && "Due Today"}
//             {view === "upcoming" && "Upcoming Tasks"}
//             {view === "completed" && "Completed Tasks"}
//           </h2>
//           <div className="flex items-center gap-2">
//             <button
//               className={`p-2 rounded-lg transition-colors ${
//                 theme === "light" ? "hover:bg-gray-100" : "hover:bg-white/10"
//               }`}
//             >
//               📊
//             </button>
//             <button
//               className={`p-2 rounded-lg transition-colors ${
//                 theme === "light" ? "hover:bg-gray-100" : "hover:bg-white/10"
//               }`}
//             >
//               ⋮
//             </button>
//           </div>
//         </div>

//         {/* Todo Component */}
//         <Todo />

//         {/* Quick Actions Footer */}
//         <div
//           className={`mt-6 pt-6 border-t ${
//             theme === "light" ? "border-gray-200" : "border-white/10"
//           }`}
//         >
//           <div className="flex flex-wrap gap-3">
//             <button
//               className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                 theme === "light"
//                   ? "bg-gray-100 hover:bg-gray-200"
//                   : "bg-white/5 hover:bg-white/10"
//               }`}
//             >
//               <span>📁</span> Archive Completed
//             </button>
//             <button
//               className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                 theme === "light"
//                   ? "bg-gray-100 hover:bg-gray-200"
//                   : "bg-white/5 hover:bg-white/10"
//               }`}
//             >
//               <span>📤</span> Export Tasks
//             </button>
//             <button
//               className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                 theme === "light"
//                   ? "bg-gray-100 hover:bg-gray-200"
//                   : "bg-white/5 hover:bg-white/10"
//               }`}
//             >
//               <span>🔔</span> Manage Reminders
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Empty State (show when no tasks) */}
//       {/* <div className="text-center py-12">
//         <div className="text-6xl mb-4">📭</div>
//         <h3 className="text-xl font-semibold mb-2">Your inbox is empty</h3>
//         <p className={`mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
//           Create your first task to get started
//         </p>
//         <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
//           Create Task
//         </button>
//       </div> */}
//     </div>
//   );
// }