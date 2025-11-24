import React from "react";

import HomePages from "./Pages/HomePages";
import Togglebtn from "./component/Togglebtn";
import { useTheme } from "./Context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import ConnectionPages from "./Pages/ConnectionPages";
import Navbar from "./component/Navbar/Navbar";
import DashboardPages from "./Pages/DashboardPages";
import TaskPages from "./Pages/TaskPages";
import GroupPages from "./Pages/GroupPages";
import LessonPages from "./Pages/LessonPages";
import { useLocation } from "react-router-dom";
import InboxPages from "./Pages/InboxPages";
function App() {
  const { theme } = useTheme();
  const location = useLocation();
  let closeLesson = location.pathname === "/lesson";
  return (
    <>
      {/* border #1d2939 */}
      <div
        className={`min-h-screen ${
          theme === "light" ? "bg-[#F9FAFB]" : "bg-[#01081d]"
        }`}
      >
        {/* [#123456] */}
        {/* <div className="flex flex-row">
          <div className="">
            <ConnectionPages />
          </div>
          <div>
            <div className="sticky top-0 z-40">
              <div className="lg:p-2">
                <Navbar />
              </div>
            </div>
            <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50">
              <Togglebtn />
            </div>
            <div className="flex flex-row w-full">
              <div className="">
                <div className="lg:p-3 xl:p-4">
                  <Routes>
                    <Route path="/" element={<HomePages />} />
                    <Route path="/dashboard" element={<DashboardPages />} />
                    <Route path="/task" element={<TaskPages />} />
                    <Route path="/group" element={<GroupPages />} />
                    <Route path="/lesson" element={<LessonPages />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-row">
          <ConnectionPages>
            {/* ✅ Navbar and other stuff now inside ConnectionPages */}
            {!closeLesson && (
              <div className="sticky top-0 z-40">
                <div className="lg:p-2">
                  <Navbar theme={theme} />
                </div>
              </div>
            )}
            {console.log("Lesson", closeLesson)}

            <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50">
              <Togglebtn />
            </div>

            <div className="lg:p-3 xl:p-4">
              <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/dashboard" element={<DashboardPages />} />
                <Route path="/task" element={<TaskPages />} />
                <Route path="/group" element={<GroupPages />} />
                <Route path="/lesson" element={<LessonPages />} />
                <Route path="/inbox" element={<InboxPages />} />
              </Routes>
            </div>
          </ConnectionPages>
        </div>
      </div>
      {/* {!closeLesson && <Navbar />} */}
    </>
  );
}
export default App;
