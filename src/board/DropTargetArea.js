// src/board/DropTargetArea.js
import React from "react";
import { useDrop } from "react-dnd";

const DropTargetArea = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["text", "image", "button"],
    drop: (item) => console.log(`Dropped ${item.name}`),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        minHeight: "400px",
        border: "2px dashed black",
        backgroundColor: isOver ? "lightgreen" : "white",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      Drop Here (Canvas)
    </div>
  );
};

export default DropTargetArea;
