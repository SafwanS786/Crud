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
  X,
  Menu,
} from "lucide-react";
import Ellipse_Img from "../../assets/img/Ellipse.png";
import Ellipse_Img1 from "../../assets/img/Ellipse1.png";
import { useSidebar } from "../../Context/SidebarContext";
import { NavLink, useNavigate } from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();
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
      {isopen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        // className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white  dark:border-gray-700
        //   transform transition-transform duration-300 ease-in-out rounded-2xl
        //   ${isopen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
        //   flex flex-col bg-amber-600 h-screen `}
        className={`fixed w-64 lg:static mt-16 md:m-0 font-primary inset-y-0 left-0 z-40 bg-white
           text-gray-800  transform transition-transform duration-300 ease-in-out shadow-lg flex flex-col ${
             isopen ? "translate-x-0" : "-translate-x-full"
           }  
            lg:translate-x-0 flex flex-col bg-amber-600 h-screen 
           `}
      >
        {/* {console.log("Done", isopen)} */}
        {/* Close Button - Mobile Only */}
        <div className="p-2 lg:hidden flex justify-end">
          <button onClick={closeSidebar}>
            {/* {isopen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} */}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Logo */}
          <button
            onClick={() => {
              navigate("/");
              closeSidebar();
            }}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-8">
              <School className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-800">Coursue</h1>
            </div>
          </button>

          {/* Navigation */}
          <nav className="space-y-6">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase mb-3">
                Overview
              </p>
              {main_data.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.Path}
                  end={item.Path === "/dashboard" ? true : undefined}
                  onClick={closeSidebar}
                  className="w-full flex items-center gap-3 p-3 hover:text-white cursor-pointer
                   rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <item.icon className="w-5 h-5" />
                  <span className=" font-medium">{item.Head}</span>
                </NavLink>
              ))}
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase mb-3">
                Friends
              </p>
              {Friends.map((frd, i) => (
                <div key={i} className="flex items-center gap-3 p-3">
                  <img
                    src={frd.icon}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{frd.Head}</p>
                    <p className="text-xs text-gray-500">{frd.Title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase mb-3">
                Settings
              </p>
              {setting.map((s, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <s.icon className="w-5 h-5" />
                  <span>{s.Head}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
