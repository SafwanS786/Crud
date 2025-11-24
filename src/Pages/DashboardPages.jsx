import React from "react";
import UserCard from "../component/Dashboard/UserCard";
import TodoCrud from "../component/Dashboard/TodoCrud";
// import Counter from "../component/Dashboard/Number";
import Crud from "../component/Dashboard/Crud";
import { useTheme } from "../Context/ThemeContext";
export default function DashboardPages() {
  const { theme } = useTheme();
  return (
    <div>
      <div className="">
        {/* <h1>Dashboard</h1> */}
        {/* {console.log("Dashboard", <TeacherCard />)} */}
        <UserCard theme={theme} />
        {/* <Counter /> */}
        <div className="p-2 mt-6">
          <h1
            className={`font-bold text-2xl ${
              theme === "light" ? "text-gray-500" : "text-white"
            }`}
          >
            Crud Operation
          </h1>
        </div>
        {/* <TodoCrud /> */}
        <Crud theme={theme} />
      </div>
    </div>
  );
}
