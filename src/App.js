// src/App.js
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableTextItem from "./elements/DraggableTextItem";
import DraggableImageItem from "./elements/DraggableImageItem";
import DraggableButtonItem from "./elements/DraggableButtonItem";
import DropTargetArea from "./board/DropTargetArea";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: "20px" }}>
        <h1>Drag-and-Drop Builder</h1>

        <div style={{ display: "flex", gap: "20px" }}>
          <DraggableTextItem />
          <DraggableImageItem />
          <DraggableButtonItem />
        </div>

        <DropTargetArea />
      </div>
    </DndProvider>
  );
}

export default App;
