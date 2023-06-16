import React, { useContext, useEffect, useState } from "react";
import { SnippetCard } from "../SnippetCard/SnippetCard";
import "./Snippets.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export const Snippets = ({}) => {
  const [currentSearch, setCurrentSearch] = useState("");
  const { snippets, username } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      <section className="snippets-container">
        <div className="snippets-header">
          <div className="search-bar-container">
            <h1>&#x1F50D; Search for snippets</h1>
            <input
              type="text"
              className="std-input"
              onChange={(e) => setCurrentSearch(e.currentTarget.value)}
            />
          </div>
          {username != "" && (
            <button
              className="std-b add"
              onClick={() => navigate("/newsnippet")}
            >
              New snippet
            </button>
          )}
        </div>
        {snippets
          .filter((s) =>
            s.name.toLowerCase().includes(currentSearch.toLowerCase())
          )
          .map((s) => {
            return (
              <SnippetCard
                name={s.name}
                language={s.language}
                code={s.code}
                id={s.id}
              />
            );
          })}
      </section>
    </>
  );
};
