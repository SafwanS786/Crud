import React, { useState } from "react";
import {
  School,
  LayoutDashboard,
  Inbox,
  Notebook,
  ClipboardList,
  UsersRound,
  Settings,
  LogOut,
} from "lucide-react";
import Ellipse_Img from "../../assets/img/Ellipse.png";
import Ellipse_Img1 from "../../assets/img/Ellipse1.png";
import { useSidebar } from "../../Context/SidebarContext";
export default function Sidebar() {
  const { isopen, closeSidebar } = useSidebar(); // ✅ use context
  // const [isopen, setIsopen] = useState(false);
  const main_data = [
    {
      icon: LayoutDashboard,
      Head: "Dashboard",
      Path: "/dashboard",
    },
    {
      icon: Inbox,
      Head: "Inbox",
      Path: "/inbox",
    },
    {
      icon: Notebook,
      Head: "Lesson",
      Path: "/lesson",
    },
    {
      icon: ClipboardList,
      Head: "Task",
      Path: "/task",
    },
    {
      icon: UsersRound,
      Head: "Group",
      Path: "/group",
    },
  ];
  const Friends = [
    {
      icon: Ellipse_Img,
      Head: "JSON",
      Title: "Friend",
    },
    {
      icon: Ellipse_Img1,
      Head: "Jam",
      Title: "Old Friend",
    },
    {
      icon: Ellipse_Img,
      Head: "Buddy",
      Title: "Friend",
    },
  ];
  const setting = [
    {
      icon: Settings,
      Head: "Setting",
    },
    {
      icon: LogOut,
      Head: "Logout",
    },
  ];
  // console.log(isopen);
  return (
    <>
      {/* <button
        onClick={() => setIsopen(!isopen)}
        className="fixed top-2 left-1 z-50 bg-white rounded-lg shadow-md p-2 block lg:hidden cursor-pointer"
      >
        {isopen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button> */}
      {/* <button
        onClick={toggleSidebar}
        className="fixed top-2 left-1 z-50 bg-white rounded-lg shadow-md p-2 block lg:hidden cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button> */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40
          w-60 mt-15 lg:w-60 lg:mt-0 lg:rounded-2xl bg-white shadow-lg border border-[#f2f2f2] 
          p-4 flex flex-col justify-between overflow-hidden
          transition-transform duration-300 ease-in-out h-screen cursor-pointer
          ${isopen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto 
        `}
      >
        <div className=" flex flex-col gap-4 overflow-y-auto justify-between ">
          <div className="flex flex-row items-center gap-4">
            <div>
              <School className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-900" />
            </div>
            <div>
              <h1 className="text-base md:text-2xl font-bold">Coursue</h1>
            </div>
          </div>
          <div>
            <div>
              <span className="text-xs">Overview</span>
            </div>
            <div className="flex flex-col gap-6 mt-6">
              {main_data.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-2 cursor-pointer"
                    // onClick={() => setIsopen(false)}
                    onClick={closeSidebar} // ✅ close on click
                  >
                    {/* {console.log("this is there",closeSidebar)} */}
                    <div>
                      <data.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <h1 className="text-sm sm:text-base font-semibold text-[#000000]">
                        {data.Head}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center ">
            <div>
              <span className="text-xs">Friends</span>
            </div>
            {Friends.map((frd, i) => {
              return (
                <div key={i} className="flex flex-row gap-2 items-center">
                  <div>
                    <img
                      src={frd.icon}
                      alt={frd.Title}
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    />
                  </div>
                  <div className="flex flex-col gap-0">
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold">
                        {frd.Head}
                      </h4>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm">{frd.Title}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <span className="text-xs">Settings</span>
            </div>
            {setting.map((s, i) => {
              return (
                <div key={i} className="flex flex-row gap-2 items-center">
                  <div>
                    <s.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h2>{s.Head}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isopen && (
        <>
          {console.log("this is Render when Black  True coming", isopen)}
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-30 lg:hidden cursor-pointer"
            onClick={closeSidebar}
          />
          {/* {console.log("this is Render when Black  False coming", isopen)} */}
        </>
      )}
    </>
  );
}
