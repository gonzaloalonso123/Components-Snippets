import React, { useContext, useEffect } from "react";
import "./PopUp.css";

export const PopUp = ({ children, close }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="pop-up-container" onClick={close}>
      <div
        className="pop-up-subcontainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
