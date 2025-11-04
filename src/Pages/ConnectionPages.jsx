import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
export default function ConnectionPages() {
  return (
    <div className="flex min-h-screen p-2 relative">
      <div className="h-full sticky top-0 bottom-0 overflow-hidden">
        <Sidebar />
      </div>
      <div className="flex-1 transition-all duration-300 ml-0 lg:ml-0">
        <Navbar />
      </div>
    </div>
  );
}
