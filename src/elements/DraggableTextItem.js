// src/elements/DraggableTextItem.js
import React from "react";
import { useDrag } from "react-dnd";

const DraggableTextItem = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { name: "text" },
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
      Drag me (Text)
    </div>
  );
};

export default DraggableTextItem;
