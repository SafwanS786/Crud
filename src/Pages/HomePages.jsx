import React from "react";
import Heading from "../component/Home/Heading";
import Card from "../component/Home/Card";
import Video from "../component/Home/Video";
import StaticSection from "../component/Home/StaticSection";

export default function HomePages() {
  return (
    <div className="space-y-8 p-2">
      {/* Top Section */}
      <div className="flex 2xl:flex-row flex-col gap-3">
        {/* grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 */}
        <div className="flex-2">
          {/* xl:col-span-2 space-y-6 */}
          <Heading />
          <Card />
          <Video />
        </div>
        <div className="flex-1">
          {/* xl:col-span-1 */}
          <StaticSection />
        </div>
      </div>
    </div>
  );
}
