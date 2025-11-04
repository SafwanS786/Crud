import React, { useState, useEffect } from "react";
import { Search, Mail, BellPlus, Menu, X, ToggleLeftIcon } from "lucide-react";
import Ellipse from "../../assets/img/Ellipse1.png";
import { useSidebar } from "../../Context/SidebarContext";

export default function Navbar() {
  const { isopen, toggleSidebar } = useSidebar(); // ✅ get toggle function
  const [isScrolled, setisScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log("Scroll");

  return (
    <header
      className={`w-full bg-white px-4 py-3 z-40 lg:rounded-2xl  mt-0 transition-shadow ${
        isScrolled ? "shadow-2xl" : "shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Mobile Menu */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-gray-100 lg:hidden"
        >
          {isopen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Search - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="flex items-center w-full gap-3 px-4 py-3 bg-gray-100 rounded-full">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Mail className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <BellPlus className="w-5 h-5" />
          </button>
          <div className="h-8 w-px bg-gray-300 mx-2" />
          <div className="flex items-center gap-3">
            <img src={Ellipse} alt="Admin" className="w-9 h-9 rounded-full" />
            <span className="font-medium hidden sm:block">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
