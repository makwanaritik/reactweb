import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Image/web-6.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with "
        imgsrc={web}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
