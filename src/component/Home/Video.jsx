import React from "react";
import Demo from "../../assets/img/demo1.jpg";
import Demo1 from "../../assets/img/demo2.jpg";
import Demo2 from "../../assets/img/demo3.jpg";
import {
  SquaresSubtract,
  PencilRuler,
  EllipsisVertical,
  Workflow,
} from "lucide-react";
import { useTheme } from "../../../src/Context/ThemeContext";

export default function Video() {
  const { theme, ToggleTheme } = useTheme();
  const Data = [
    {
      icon: Demo,
      Head: "FRONT END",
      icon1: SquaresSubtract,
      Color: "#E2ECFF",
      Head1: "Beginner's Guide to Becoming a Professional Front-End Developer",
    },
    {
      icon: Demo1,
      Head: "UI/UX Design",
      icon1: PencilRuler,
      Color: "#EAE6FF",
      Head1: "Beginner's Guide to Becoming a Professional Front-End Developer",
    },
    {
      icon: Demo2,
      Title: "3/8 Watched",
      Head: "Branding",
      icon1: Workflow,
      Color: "#FBE7FF",
      Head1: "Beginner's Guide to Becoming a Professional Front-End Developer",
    },
  ];
  return (
    <div>
      <h1
        className={`text-sm sm:text-base md:text-xl font-bold mt-4 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Continue Watching
      </h1>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6 ">
        {Data.map((value, index) => (
          <div
            key={index}
            className="flex  flex-col border border-[#f2f2f2] rounded-2xl bg-white p-2 lg:p-4"
          >
            <div>
              <img
                src={value.icon}
                alt={value.Head}
                className="w-full h-auto rounded-2xl object-cover aspect-video"
              />
              {/* w-60 h-40 sm:w-70 sm:h-40 rounded-2xl   */}
            </div>
            <div
              className="w-fit p-1 mt-4 flex flex-row gap-2 rounded-2xl"
              style={{ backgroundColor: `${value.Color}` }}
            >
              <div>
                <value.icon1 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <h2 className="text-xs md:text-sm">{value.Head}</h2>
              </div>
            </div>
            <div className="mt-2 w-60">
              <h1 className="text-sm md:text-base font-bold">{value.Head1}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
