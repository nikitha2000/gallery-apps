import React from "react";
import "./Hover.css";
import Button from "../Button";

const HoverButtons = ({ isHovered }) => {
  return (
    <div className={`hover-buttons ${isHovered ? "show" : ""}`}>
      {isHovered && (
        <div className="top-left-button">
          <Button
            label={<img src="/asset/save.svg" alt="Save Icon" />}
            className="save-button"
          />
          <Button
            label={<img src="/asset/heart.svg" alt="Heart Icon" />}
            className="save-button"
          />
        </div>
      )}
      <div className="bottom-left">
        <Button label={" Download"} className="download-button" />
      </div>
    </div>
  );
};

export default HoverButtons;
