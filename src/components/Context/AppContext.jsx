import { createContext, useEffect, useState } from "react";
import {
  getComponentsByUserName,
  getSnippetsByUserName,
} from "../../firebase/access";

const initValue = {};
export const AppContext = createContext(initValue);

export const AppContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [snippets, setSnippets] = useState([]);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const c = await getComponentsByUserName(username);
      const s = await getSnippetsByUserName(username);
      setComponents(c);
      setSnippets(s);
    };
    if (username) {
      fetchData();
      window.localStorage.setItem("username", username);
    }
  }, [username]);

  useEffect(() => {
    const user = window.localStorage.getItem("username");
    console.log(user);
    if (user !== null) {
      setUsername(user);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        snippets,
        components,
        setComponents,
        setSnippets,
        username,
        setUsername,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
