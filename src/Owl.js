import React from "react";
import Iframe from "react-iframe";
import "./Owl.css";

export default function Owl() {
  return (
    <Iframe
      url="https://my.spline.design/untitled-8d81842b2fc418c6d88a47aefb5eeec8/"
      width="100%"
      height="400px"
      className="owl"
      styles={{ margin: "0 auto" }}
    />
  );
}
