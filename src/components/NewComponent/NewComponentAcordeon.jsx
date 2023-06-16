import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuItem, Select } from "@mui/material";
import { highlight, languages } from "prismjs/components/prism-core";
import Editor from "react-simple-code-editor";

export default function NewComponentAcordeon({ pages, setPages }) {
  const setCode = (code, index) => {
    const tempPages = pages;
    tempPages[index].code = code;
    setPages([...tempPages]);
  };
  const setName = (name, index) => {
    const tempPages = pages;
    tempPages[index].name = name;
    setPages([...tempPages]);
  };
  const setLanguage = (language, index) => {
    const tempPages = pages;
    tempPages[index].language = language;
    setPages([...tempPages]);
  };
  return (
    <div>
      {pages.map((p, i) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{p.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="new-page-form-container">
                <h1>Name</h1>
                <input
                  type="text"
                  value={p.name}
                  className="std-input"
                  onChange={(e) => setName(e.currentTarget.value, i)}
                />
                <h1>Language</h1>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={p.language}
                  onChange={(e) => setLanguage(e.target.value, i)}
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
                  value={p.code}
                  onValueChange={(code) => setCode(code, i)}
                  highlight={(code) => highlight(code, languages.js)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    border: "2px solid black",
                    borderRadius: "10px",
                    height: "20em",
                    overflowY: "scroll",
                    outline: "none",
                  }}
                />
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
