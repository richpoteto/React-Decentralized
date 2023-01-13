import React from "react";
import TopBar from "components/TopBar";
import RoadMap from "components/RoadMap";
import AboutDecentraland from "components/AboutDecentraland";
import BlogContactUs from "components/BlogContactUs";
import CarouselStyle from "components/CarouselStyle";
const Views = () => {
  return (
    <>
      <TopBar />
      <RoadMap />
      <CarouselStyle/>
      <AboutDecentraland />
      <BlogContactUs />
    </>
  );
};

export default Views;
