import React from "react";
import "./Text.css";
function Text(props) {
  return (
    <>
      <div>
        <div className="text">
          <div className="welcome">
            <div className="text__welcome">{props.name}</div>
            <div className="text__welcome">{props.content}</div>
          </div>
          <div className="content">{props.para}</div>
        </div>
      </div>
    </>
  );
}

export default Text;
