import React, { useContext, useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import { MenuItem, Select } from "@mui/material";
import { createSnippet } from "../../firebase/access";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export const NewSnippet = ({ snippet }) => {
  const [code, setCode] = useState(``);
  const [language, setLanguage] = useState(``);
  const [name, setName] = useState(``);
  const navigate = useNavigate();
  const { username, setSnippets, snippets } = useContext(AppContext);

  useEffect(() => {
    if (snippet) {
      setCode(snippet.code);
      setLanguage(snippet.language);
      setName(snippet.name);
    }
  }, []);

  const newSnippet = () => {
    createSnippet(name, code, language, username, snippet && snippet.id);
    if (!snippet) {
      setSnippets([
        ...snippets,
        { name: name, code: code, language: language, user: username },
      ]);
    } else {
      setSnippets(
        snippets.map((s) => {
          if (s.id === snippet.id) {
            return {
              name: name,
              code: code,
              language: language,
              user: username,
              id: snippet.id,
            };
          }
          return s;
        })
      );
    }
    navigate("/snippets");
  };

  return (
    <section className="new-snippet-container">
      <h1>Name</h1>
      <input
        type="text"
        value={name}
        className="std-input"
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <h1>Language</h1>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{
          color: "black",
          borderRadius: "10px",
        }}
      >
        <MenuItem value={"javascript"}>javascript</MenuItem>
        <MenuItem value={"typescript"}>typescript</MenuItem>
        <MenuItem value={"css"}>css</MenuItem>
        <MenuItem value={"html"}>html</MenuItem>
        <MenuItem value={"python"}>python</MenuItem>
        <MenuItem value={"shell"}>shell</MenuItem>
      </Select>
      <h1>Code</h1>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          border: "2px solid black",
          borderRadius: "10px",
          height: "20em",
        }}
      />
      <button className="std-b" onClick={newSnippet}>
        {!snippet ? "Add" : "Save"}
      </button>
    </section>
  );
};
