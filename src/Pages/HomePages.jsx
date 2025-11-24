import React from "react";
import Heading from "../component/Home/Heading";
import Card from "../component/Home/Card";
import Video from "../component/Home/Video";
import StaticSection from "../component/Home/StaticSection";
import { useTheme } from "../Context/ThemeContext";

export default function HomePages() {
  const { theme } = useTheme();
  return (
    <div className="space-y-8 p-2">
      {/* Top Section */}
      <div className="flex 2xl:flex-row flex-col gap-3">
        {/* grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 */}
        <div className="flex-3">
          {/* xl:col-span-2 space-y-6 */}
          <Heading theme={theme} />
          <Card theme={theme} />
          <Video theme={theme} />
        </div>
        <div className="flex-1">
          {/* xl:col-span-1 */}
          <StaticSection />
        </div>
      </div>
    </div>
  );
}
