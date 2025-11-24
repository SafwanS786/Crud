import React from "react";
import ApiExpNews from "../component/Lesson/ApiExpNews";
import DummyAPI from "../component/Lesson/DummyAPI";
import { useTheme } from "../Context/ThemeContext";
export default function LessonPages() {
  const { theme } = useTheme();
  return (
    <div>
      {/* <ApiExpNews /> */}
      <h1></h1>
      <DummyAPI theme={theme} />
    </div>
  );
}
