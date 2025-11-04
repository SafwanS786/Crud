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
    <div
      className={`flex justify-between items-center flex-row fixed lg:static border-[#f2f2f2] bg-white gap-12 lg:gap-4 md:rounded-2xl
    px-6 py-3 lg:px-8 w-full top-0 left-0 right-0 ${
      isScrolled ? "shadow-2xl" : "shadow-md"
    }`}
    >
      {/* <div className="flex justify-start mt-4 gap-4 items-center">
        <button
          type="button"
          className={`py-1 px-1 flex rounded-full w-16 transition-all duration-600
            relative h-8 items-center  ${
              theme === "light"
                ? "bg-[#000611] justify-end"
                : "bg-gray-300 justify-start"
            }`}
          onClick={ToggleTheme}
        >
          <div
            className={`flex items-center transform transition-transform duration-700
               ${theme ? "translate-x-6" : "translate-x-0"}`}
          ></div>
          {theme ? (
            <img src={Toggle_Img} alt="Toggle_Icon" className="w-6 h-6" />
          ) : (
            <img src={Toggle_Img} alt="Toggle_Icon" className="w-6 h-6" />
          )}
        </button>
      </div> */}
      {/* <button className="p-2 bg-gray-200 rounded-full " onClick={ToggleTheme}>
        {theme === "light" ? <img src={Toggle_Img} /> : "light"}
      </button> */}
      <button
        onClick={toggleSidebar}
        className="block lg:hidden p-2 rounded-lg bg-gray-100 cursor-pointer z-60"
      >
        {isopen ? (
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
        {/* {console.log("Navbar", isopen)} */}
      </button>
      <div className="hidden lg:inline-flex px-2 py-2 lg:flex-5 items-center gap-2 bg-gray-100 lg:px-3 lg:py-3 rounded-full">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <div className="inline-flex flex-1 justify-end items-center gap-4">
        <div
          className="text-gray-600 hover:text-[#126f77] md:p-2 cursor-pointer border flex
         items-center justify-center border-[#f2f2f2] rounded-full w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
        >
          <Mail className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
        <div
          className="text-gray-600  hover:text-[#126f77] md:p-2 cursor-pointer border flex
         items-center justify-center border-[#f2f2f2] rounded-full w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
        >
          <BellPlus className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>

        <div className="h-8 w-1 font-bold bg-[#f2f2f2]"></div>
        {/* <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-xl transition-all"> */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer p-2 rounded-xl transition-all">
          <img
            src={Ellipse}
            alt="Profile"
            className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full object-cover"
          />
          {/* <div className="border border-[#f2f2f2] w-12 "></div> */}
          <span
            className="text-xs sm:text-sm flex items-center font-medium text-gray-700
          "
          >
            {/* hidden lg:block text-sm lg:text-base xl:text-lg font-medium text-gray-700 */}
            Admin
          </span>
        </div>
      </div>
    </div>
  );
}
