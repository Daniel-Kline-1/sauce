import React from "react";
import img1 from "./../photos/dexter.png";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../actions/index";
function DirtyDan() {
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="photo1" style={styleHome}>
      {isLogged ? (
        <div className="vid">
          <ReactPlayer url="https://www.youtube.com/watch?v=kOyPsl0bI1g" />
          <button
            onClick={() => {
              dispatch(actions.logout());
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            dispatch(actions.login());
          }}
        >
          Log In
        </button>
      )}
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
