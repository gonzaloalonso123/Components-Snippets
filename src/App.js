import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Snippets } from "./components/Snippets/Snippets";
import { NewSnippet } from "./components/NewSnippet/NewSnippet";
import { ComponentPage } from "./components/ComponentPage/ComponentPage";
import { NewComponent } from "./components/NewComponent/NewComponent";
import { AppContext } from "./components/Context/AppContext";
import { Login } from "./components/Login/Login";
import { useContext } from "react";

function App() {
  const { components, snippets } = useContext(AppContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/snippets" element={<Snippets />} />
          <Route path="/components" element={<ComponentPage />} />
          <Route path="/newcomponent" element={<NewComponent />} />
          <Route path="/newsnippet" element={<NewSnippet />} />
          {components.map((component) => {
            return (
              <Route
                key={component.id}
                path={`/editcomponent/${component.id}`}
                element={<NewComponent component={component} />}
              />
            );
          })}
          {snippets.map((snippet) => {
            return (
              <Route
                key={snippet.id}
                path={`/editsnippet/${snippet.id}`}
                element={<NewSnippet snippet={snippet} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
