import React from "react";
import {
  PencilRuler,
  Workflow,
  SquaresSubtract,
  EllipsisVertical,
} from "lucide-react";

export default function Card() {
  const Card_data = [
    {
      icon: PencilRuler,
      Title: "2/8 Watched",
      Head: "UI/UX Design",
      icon1: EllipsisVertical,
      Color: "#EAE6FF",
    },
    {
      icon: Workflow,
      Title: "3/8 Watched",
      Head: "Branding",
      icon1: EllipsisVertical,
      Color: "#FBE7FF",
    },
    {
      icon: SquaresSubtract,
      Title: "6/12 Watched",
      Head: "FrontEnd",
      icon1: EllipsisVertical,
      Color: "#E2ECFF",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-3 gap-2 mt-3 lg:mt-6">
        {Card_data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="border border-[#f2f2f2] bg-white  p-2 rounded-lg sm:rounded-xl sm:p-3 md:p-2 lg:p-4 md:rounded-3xl"
            >
              <div className="flex flex-row items-center justify-between gap-4">
                <div className="flex flex-row gap-4 items-center justify-center">
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 flex items-center justify-center rounded-sm sm:rounded-lg md:rounded-2xl"
                    style={{ backgroundColor: `${item.Color}` }}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="flex flex-col gap-0">
                      <span className="text-[#8B8B8B] text-xs sm:text-base">
                        {item.Title}
                      </span>
                      <h1 className="font-semibold md:font-bold text-sm sm:text-base">
                        {item.Head}
                      </h1>
                    </div>
                  </div>
                </div>
                <div>
                  <item.icon1 className="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 text-[#8B8B8B]" />
                </div>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
}
