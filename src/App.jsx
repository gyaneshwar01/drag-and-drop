import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import ListContainer from "./components/ListContainer";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ListContainer />
    </DndProvider>
  );
}

export default App;
