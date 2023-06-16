import React, { useContext, useEffect, useState } from "react";
import { PasswordPopUp } from "../PasswordPopUp/PasswordPopUp";
import { getAllComponents } from "../../firebase/access";
import { ComponentCard } from "../ComponentCard/ComponentCard";
import "./ComponentPage.css";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

export const ComponentPage = ({}) => {
  const { username } = useContext(AppContext);
  const [currentSearch, setCurrentSearch] = useState("");
  const { components } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <section className="components-container">
      <div className="components-header">
        <div className="search-bar-container">
          <h1>&#x1F50D; Search for components</h1>
          <input
            type="text"
            className="std-input"
            onChange={(e) => setCurrentSearch(e.currentTarget.value)}
          />
        </div>
        {username != "" && (
          <button
            className="std-b add"
            onClick={() => navigate("/newcomponent")}
          >
            New component
          </button>
        )}
      </div>
      {components
        .filter((c) =>
          c.name.toLowerCase().includes(currentSearch.toLowerCase())
        )
        .map((c) => {
          return <ComponentCard name={c.name} pages={c.pages} id={c.id} />;
        })}
    </section>
  );
};
