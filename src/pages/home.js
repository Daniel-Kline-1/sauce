import React, { useState } from "react";
import img1 from "./../photos/dexter.png";
import "./../App.css";
export default function Home() {
  return (
    <div>
      <div className="photo1" style={styleHome}>
        <text className="text1" style={styleText}>
          Hello World
        </text>
      </div>

      <div className="photo1" style={styleHome}>
        <text className="text1">Hello World</text>
      </div>
    </div>
  );
}

const styleHome = {
  backgroundImage: `url(${img1})`,
  height: "100vh",
  width: "100vw",
  backgroundPosition: "center",
};

const styleText = {
  top: "50vh",
};
