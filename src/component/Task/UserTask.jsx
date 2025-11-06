import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Circle,
  Clock,
  Calendar,
  Filter,
  Search,
} from "lucide-react";
export default function UserTask() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const tasks = [
    {
      id: 1,
      title: "Complete UI/UX Module 3",
      course: "UI/UX Design",
      due: "Today, 3:00 PM",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      title: "Submit Branding Project",
      course: "Branding",
      due: "Tomorrow",
      status: "pending",
      priority: "medium",
    },
    {
      id: 3,
      title: "Review FrontEnd Quiz",
      course: "FrontEnd",
      due: "2 days left",
      status: "completed",
      priority: "low",
    },
    {
      id: 4,
      title: "Watch React Hooks Video",
      course: "FrontEnd",
      due: "4 days left",
      status: "pending",
      priority: "medium",
    },
  ];

  const filteredTasks = tasks
    .filter((t) => filter === "all" || t.status === filter)
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));

  const getPriorityColor = (p) => {
    switch (p) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  useEffect(() => {
    const student = [
      { id: 1, name: "shaikh", age: 20 },
      { id: 2, name: "safwan", age: 23 },
      { id: 3, name: "Bhai", age: 26 },
    ];
    localStorage.setItem("PrcTask", JSON.stringify(student));
    // let saved =localStorage.setItem("PrcTask", JSON.stringify(student));
    // console.log("SavedData", saved);
    const data = JSON.parse(localStorage.getItem("PrcTask"));
    console.log("From localStorage:", data);
  }, []);
  useEffect(() => {
    const studentCheck = [
      { id: 1, name: "Yusuf", age: 20 },
      { id: 2, name: "Khan", age: 23 },
      { id: 3, name: "Bhai", age: 26 },
    ];
    localStorage.setItem("PrcTaskCheck", JSON.stringify(studentCheck));
    // let saved =localStorage.setItem("PrcTask", JSON.stringify(student));
    // console.log("SavedData", saved);
    const datacheck = JSON.parse(localStorage.getItem("PrcTaskCheck"));
    console.log("From localStorage DataCheck:", datacheck);
    // localStorage.removeItem("PrcTaskCheck");
    // localStorage.clear();
  }, []);
  return (
    <div>
      <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
              Your Tasks
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {filteredTasks.length} tasks •{" "}
              {tasks.filter((t) => t.status === "pending").length} pending
            </p>
          </div>

          <button className="px-4 py-2 bg-[#7B61FF] text-white rounded-xl hover:bg-[#6a50e0] transition flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            Schedule New
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B61FF] transition"
            />
          </div>

          <div className="flex gap-2">
            {["all", "pending", "completed"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition ${
                  filter === f
                    ? "bg-[#7B61FF] text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="group flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer border border-transparent hover:border-[#7B61FF]/20"
            >
              {/* Checkbox */}
              <button className="flex shrink-0">
                {task.status === "completed" ? (
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400 group-hover:text-[#7B61FF] transition" />
                )}
              </button>

              {/* Task Info */}
              <div className="flex-1">
                <h3
                  className={`font-semibold text-gray-800 dark:text-white ${
                    task.status === "completed" ? "line-through opacity-60" : ""
                  }`}
                >
                  {task.title}
                </h3>
                <div className="flex items-center gap-3 mt-1 text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {task.course}
                  </span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {task.due}
                  </div>
                </div>
              </div>

              {/* Priority Badge */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
          ))}
        </div>
        {/* Empty State */}
        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">No tasks found</p>
          </div>
        )}
      </div>
    </div>
  );
}
