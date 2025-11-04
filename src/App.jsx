import React from "react";

import HomePages from "./Pages/HomePages";
import Togglebtn from "./component/Togglebtn";
import { useTheme } from "./Context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import ConnectionPages from "./Pages/ConnectionPages";
import Navbar from "./component/Navbar/Navbar";
import DashboardPages from "./Pages/DashboardPages";
function App() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "light" ? "bg-[#F9FAFB]" : "bg-[#123456]"
        }`}
      >
        <div className="flex flex-row">
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
            <div className="flex flex-row">
              <div className="">
                <div className="lg:p-3 xl:p-4">
                  <Routes>
                    <Route path="/" element={<HomePages />} />
                    <Route path="/dashboard" element={<DashboardPages />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
