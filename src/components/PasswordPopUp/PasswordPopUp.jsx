import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordPopUp.css";

export const PasswordPopUp = ({ route, close }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const checkPassword = () => {
    const text = inputRef.current.value;
    if (text === "abretesesamo") {
      navigate(route);
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };
  return (
    <div className="password-pop-up-container">
      <div className="password-pop-up-subcontainer">
        <h1>Password</h1>
        <input className="std-input" type="password" ref={inputRef} />
        <div className="password-pop-up-button-container">
          <button className="std-b" onClick={checkPassword}>
            I'm Gonzalo
          </button>
          <button className="std-b red" onClick={close}>
            Close
          </button>
        </div>
        {showError && <label className="error-label">Nope</label>}
      </div>
    </div>
  );
};
