import React from "react";

import HomePages from "./Pages/HomePages";
import Togglebtn from "./component/Togglebtn";
import { useTheme } from "./Context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import ConnectionPages from "./Pages/ConnectionPages";
function App() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`flex min-h-screen p-2 relative ${
          theme === "light" ? "bg-[#F9FAFB]" : "bg-[#123456]"
        }`}
      > 
        {/* {console.log("App.jsx is there", theme)}
        {console.log("what is this", useTheme())} */}

        <ConnectionPages />
        <Routes>
          <Route path="/" element={<HomePages />} />
        </Routes>
      </div>
      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50">
        <Togglebtn />
      </div>
    </>
  );
}
export default App;
