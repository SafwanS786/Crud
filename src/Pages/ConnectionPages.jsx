import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import { useTheme } from "../Context/ThemeContext";
export default function ConnectionPages({ children }) {
  const { theme } = useTheme();
  return (
    <>
      <Sidebar theme={theme} />
      <div className="lg:p-4 overflow-y-auto  h-screen">{children}</div>
    </>
  );
}
