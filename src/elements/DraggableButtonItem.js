// src/elements/DraggableButtonItem.js
import React from "react";
import { useDrag } from "react-dnd";

const DraggableButtonItem = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "button",
    item: { name: "button" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "10px",
        border: "1px solid black",
        cursor: "move",
      }}
    >
      Drag me (Button)
    </div>
  );
};

export default DraggableButtonItem;
