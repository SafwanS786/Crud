// import React from "react";
// import { User, DollarSign, Folder, MessageSquare } from "lucide-react";
// export default function UserCard() {
//   const state = [
//     { title: "Users", value: 1250, icon: User, backColor: "#057bf1" },
//     { title: "Revenue", value: "$24K", icon: DollarSign, backColor: "#159874" },
//     { title: "Projects", value: 18, icon: Folder, backColor: "#158964" },
//     {
//       title: "Feedbacks",
//       value: 320,
//       icon: MessageSquare,
//       backColor: "#156954",
//     },
//   ];
//   return (
//     <div>
//       <div className="text-2xl font-bold">Dashboard Card</div>
//       <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6 mt-6">
//         {state.map((items, i) => {
//           return (
//             <div key={i} className="border border-[#f2f2f2] rounded-xl p-4">
//               <div className="flex flex-row items-center gap-4">
//                 <div
//                   className="flex p-2 rounded-xl"
//                   style={{ backgroundColor: `${items.backColor}` }}
//                 >
//                   <items.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="flex flex-col gap-2 justify-center items-center">
//                   <div className="">
//                     <p>{items.title}</p>
//                   </div>
//                   <div className="">
//                     <h2 className="text-[#057bf1]">{items.value}</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { User, DollarSign, Folder, MessageSquare } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function UserCard() {
  const [animateValues, setAnimateValues] = useState({
    users: 0,
    revenue: 0,
    projects: 0,
    feedbacks: 0,
  });

  // Dummy data for mini charts
  const chartData = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 50 },
    { name: "May", value: 70 },
  ];

  const state = [
    {
      title: "Users",
      value: 1250,
      icon: User,
      backColor: "#057bf1",
      key: "users",
    },
    {
      title: "Revenue",
      value: 24000,
      icon: DollarSign,
      backColor: "#159874",
      key: "revenue",
    },
    {
      title: "Projects",
      value: 18,
      icon: Folder,
      backColor: "#f0e00a",
      key: "projects",
    },
    {
      title: "Feedbacks",
      value: 320,
      icon: MessageSquare,
      backColor: "#0aa7f0",
      key: "feedbacks",
    },
  ];

  // Animate the numbers on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateValues((prev) => {
        const next = { ...prev };
        state.forEach((item) => {
          if (next[item.key] < item.value) {
            next[item.key] += Math.ceil(item.value / 50);
          } else {
            next[item.key] = item.value;
          }
        });
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-6 bg-linear-to-br from-gray-50 to-gray-200 dark:from-blue-200 dark:to-gray-900 rounded-2xl shadow-inner">
      <div className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Dashboard Overview
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-[#0aa7f0]">
        {state.map((items, i) => {
          const Icon = items.icon;
          return (
            <div
              key={i}
              className="group border border-gray-100 dark:border-gray-700 rounded-2xl p-5 bg-white dark:bg-gray-800 
                         hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <div
                  className="flex p-3 rounded-xl shadow-md"
                  style={{ backgroundColor: items.backColor }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-500">
                    {items.title}
                  </p>
                  <h2
                    className="text-2xl font-bold mt-1 text-gray-800 dark:text-gray-100"
                    style={{ color: items.backColor }}
                  >
                    {items.key === "revenue"
                      ? `$${animateValues[items.key].toLocaleString()}`
                      : animateValues[items.key]}
                  </h2>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="w-full h-16 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={items.backColor}
                      strokeWidth={2.5}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Footer line */}
              <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <span>+12% from last month</span>
                <span className="text-green-600 font-semibold">↑ Growth</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
