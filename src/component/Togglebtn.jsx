import React from "react";
import { useTheme } from "../../src/Context/ThemeContext";
import Toggle_Img from "../assets/img/Toggle_Super_Admin.svg";
export default function Togglebtn() {
  const { theme, ToggleTheme } = useTheme();

  return (
    <div>
      <div className="flex justify-start mt-4 gap-4 items-center">
        <button
          type="button"
          className={`py-1 px-1 flex rounded-full w-8 h-16 transition-all duration-600
                  relative cursor-pointer ease-in-out  ${
                    theme === "light"
                      ? "bg-[#123456] justify-start"
                      : "bg-gray-300 justify-end"
                  }`}
          onClick={ToggleTheme}
        >
          {/* <div
            className={`flex items-center transform transition-transform duration-700
                     ${theme === "light" ? "translate-y-7" : "translate-y-0"}`}
          ></div> */}
          {theme === "light" ? (
            <img
              src={Toggle_Img}
              alt="Toggle_Icon"
              className="w-6 h-6 translate-y-8 transform transition-transform duration-500"
            />
          ) : (
            <img
              src={Toggle_Img}
              alt="Toggle_Icon"
              className="w-6 h-6 translate-y-0 transform transition-transform duration-500"
            />
          )}
        </button>
      </div>
    </div>
  );
}
