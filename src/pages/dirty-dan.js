import React from "react";
import img1 from "./../photos/dexter.png";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

function DirtyDan() {
  return (
    <div className="photo1" style={styleHome}>
      <div className="vid">
        <ReactPlayer url="https://www.youtube.com/watch?v=kOyPsl0bI1g" />
      </div>
    </div>
  );
}

export default DirtyDan;

const styleHome = {
  backgroundImage: `url(${img1})`,
  height: "100vh",
  width: "100vw",
  backgroundPosition: "center",
};
