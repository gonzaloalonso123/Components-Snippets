import React, { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import { MenuItem, Select } from "@mui/material";
import { createComponent, createSnippet } from "../../firebase/access";
import { useNavigate } from "react-router-dom";
import "./NewComponent.css";
import NewComponentAcordeon from "./NewComponentAcordeon";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export const NewComponent = ({ component }) => {
  const [name, setName] = useState(``);
  const { username, setComponents, components } = useContext(AppContext);
  const navigate = useNavigate();
  const [pages, setPages] = useState([
    {
      name: "page 1",
      code: "",
      language: "",
    },
  ]);

  useEffect(() => {
    if (component) {
      setName(component.name);
      setPages(component.pages);
    }
  }, []);

  const newComponent = () => {
    createComponent(name, pages, username, component && component.id);
    if (!component) {
      setComponents([
        ...components,
        { name: name, pages: pages, user: username },
      ]);
    } else {
      setComponents(
        components.map((c) => {
          if (c.id === component.id) {
            return {
              name: name,
              pages: pages,
              user: username,
              id: component.id,
            };
          }
          return c;
        })
      );
    }
    navigate("/components");
  };

  const addPage = () => {
    setPages([
      ...pages,
      {
        name: "",
        code: "",
        language: "",
      },
    ]);
  };

  return (
    <section className="new-snippet-container">
      <h1>Component name</h1>
      <input
        type="text"
        className="std-input"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <h1>Pages</h1>
      <NewComponentAcordeon pages={pages} setPages={setPages} />
      <button className="std-b orange" onClick={addPage}>
        Add page
      </button>
      <button
        className="std-b"
        onClick={newComponent}
        style={{ marginTop: "3em" }}
      >
        {!component ? "Create Component" : "Save"}
      </button>
    </section>
  );
};
