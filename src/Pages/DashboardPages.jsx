import React from "react";
import UserCard from "../component/Dashboard/UserCard";
import  Counter  from "../component/Dashboard/Number";
export default function DashboardPages() {
  return (
    <div>
      <div>
        {/* <h1>Dashboard</h1> */}
        {/* {console.log("Dashboard", <TeacherCard />)} */}
        <UserCard />
        <Counter />
      </div>
    </div>
  );
}
