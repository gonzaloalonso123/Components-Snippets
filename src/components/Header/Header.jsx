import React, { useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export const Header = () => {
  const { username } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="header-subcontainer">
        <h1 onClick={() => navigate("/")} className="header-user">
          {username !== "" ? username : "Log in"}
        </h1>
        <div className="header-options-container">
          <Link className="header-link" to="/snippets">
            Snippets
          </Link>
          <Link className="header-link" to="/components">
            Components
          </Link>
        </div>
      </div>
    </div>
  );
};
