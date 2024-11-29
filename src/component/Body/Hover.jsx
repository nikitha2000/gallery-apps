import React from "react";
import "./Hover.css";
import Button from "../Button";

const ActionButtons = ({ isHovered }) => {
  return (
    <div>
      {isHovered && (
        <div className="top-left-button">
          <Button
            label={<img src="/svgexport-16.svg" />}
            className="save-button"
          />
          <Button
            label={<img src="/svgexport-17.svg" />}
            className="save-button"
          />
        </div>
      )}
      <div className="bottom-left">
        <Button label="download" className="download-btn" />
      </div>
    </div>
  );
};

export default ActionButtons;
