import React, { useContext, useRef } from "react";
import { AppContext } from "../Context/AppContext";
import "./Login.css";
import { useState } from "react";
import { Alert, CircularProgress } from "@mui/material";

export const Login = () => {
  const { setUsername, username } = useContext(AppContext);
  const inputRef = useRef(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const setUser = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setUsername(inputRef.current.value);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-subcontainer">
        <h1>User</h1>
        <input type="text" className="std-input" ref={inputRef} />
        <button className="std-b" onClick={setUser}>
          Load my code
        </button>
        {showSpinner && <CircularProgress />}
        {username != "" && !showSpinner && (
          <Alert severity="success">Loaded succesfully</Alert>
        )}
      </div>
    </div>
  );
};
