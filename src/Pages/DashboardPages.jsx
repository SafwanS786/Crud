import React from "react";
import UserCard from "../component/Dashboard/UserCard";
import TodoCrud from "../component/Dashboard/TodoCrud";
// import Counter from "../component/Dashboard/Number";
import Crud from "../component/Dashboard/Crud";
export default function DashboardPages() {
  return (
    <div>
      <div>
        {/* <h1>Dashboard</h1> */}
        {/* {console.log("Dashboard", <TeacherCard />)} */}
        <UserCard />
        {/* <Counter /> */}
        <div className="p-2 mt-6">
          <h1 className="font-bold text-gray-500 text-2xl">Crud Operation</h1>
        </div>
        {/* <TodoCrud /> */}
        <Crud />
      </div>
    </div>
  );
}
