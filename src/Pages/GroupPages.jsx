import React from "react";
import ApiExample from "../component/Group/ApiExp";
import PrcAPI from "../component/Group/PrcAPI";
import { useTheme } from "../Context/ThemeContext";
export default function GroupPages() {
  const { theme } = useTheme();
  return (
    <div>
      <div
        className={
          theme === "dark"
            ? "bg-gray-950 text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <ApiExample theme={theme} />
        <PrcAPI theme={theme} />
      </div>
    </div>
  );
}
