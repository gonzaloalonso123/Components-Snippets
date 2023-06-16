import React, { useContext, useState } from "react";
import "./ComponentCard.css";
import CustomizedAccordions from "../PageAcordeon/PageAcordeon";
import { useNavigate } from "react-router-dom";
import { PopUp } from "../PopUp/PopUp";
import { deleteComponent } from "../../firebase/access";
import { AppContext } from "../Context/AppContext";

export const ComponentCard = ({ name, pages, id }) => {
  const [showDelete, setShowDelete] = useState(false);
  const { setComponents, components } = useContext(AppContext);
  const navigate = useNavigate();
  const deleteItem = () => {
    deleteComponent(id);
    setShowDelete(false);
    setComponents(components.filter((c) => c.id !== id));
    navigate("/components");
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
      <div className="snippet-card-header">
        <h1 className="snippet-card-title">{name}</h1>
        <div className="snippet-card-button-container">
          <button
            className="std-b blue"
            onClick={() => navigate(`/editcomponent/${id}`)}
          >
            Edit
          </button>
          <button className="std-b red" onClick={() => setShowDelete(true)}>
            Delete
          </button>
        </div>
      </div>
      <CustomizedAccordions pages={pages} />
    </div>
  );
};
