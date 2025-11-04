import React from "react";
import Heading from "../component/Home/Heading";
import Card from "../component/Home/Card";
import Video from "../component/Home/Video";
import StaticSection from "../component/Home/StaticSection";

export default function HomePages() {
  return (
    <div>
      <div className="flex flex-col 2xl:flex-row gap-6 mt-15 lg:mt-6">
        <div className="flex-1">
          <Heading />
          <Card />
          <Video />
        </div>
        <div className="">
          <StaticSection />
        </div>
      </div>
    </div>
  );
}
