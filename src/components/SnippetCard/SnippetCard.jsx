import React, { useContext, useState } from "react";
import "./SnippetCard.css";
import { CopyBlock, dracula } from "react-code-blocks";
import { PopUp } from "../PopUp/PopUp";
import { useNavigate } from "react-router-dom";
import { deleteSnippet } from "../../firebase/access";
import { AppContext } from "../Context/AppContext";

export const SnippetCard = ({ name, code, language, id }) => {
  const [showDelete, setShowDelete] = useState(false);
  const { snippets, setSnippets } = useContext(AppContext);
  const navigate = useNavigate();
  const deleteItem = () => {
    deleteSnippet(id);
    setShowDelete(false);
    setSnippets(snippets.filter((s) => s.id !== id));
    navigate("/snippets");
  };
  return (
    <div className="snippet-card-container">
      {showDelete && (
        <PopUp close={() => setShowDelete(false)}>
          <div className="delete-pop-up-container">
            <h1>Do yo want to delete this item?</h1>
            <div className="flex-row-far">
              <button
                className="std-b notimportant"
                onClick={() => setShowDelete(false)}
              >
                Cancel
              </button>
              <button className="std-b red" onClick={deleteItem}>
                Delete
              </button>
            </div>
          </div>
        </PopUp>
      )}
      <div className="flex-row-far">
        <h1 className="snippet-card-title">{name}</h1>
        <div className="snippet-card-button-container">
          <button
            className="std-b blue"
            onClick={() => navigate(`/editsnippet/${id}`)}
          >
            Edit
          </button>
          <button className="std-b red" onClick={() => setShowDelete(true)}>
            Delete
          </button>
        </div>
      </div>
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={true}
        startingLineNumber={0}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};
