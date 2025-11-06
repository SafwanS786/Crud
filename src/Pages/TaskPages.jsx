import React from "react";
import UserTask from "../component/Task/UserTask";
import ArrayPractise from "../component/Task/ArrayPractise";
import AddName from "../component/Task/AddName";
// import Prc from "../component/Task/Prc";
export default function TaskPages() {
  return (
    <div>
      <UserTask />
      {/* <Prc /> */}
      <ArrayPractise />
      <AddName />
    </div>
  );
}
