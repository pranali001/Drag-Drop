// src/elements/DraggableImageItem.js
import React from "react";
import { useDrag } from "react-dnd";

const DraggableImageItem = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { name: "image" },
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
      Drag me (Image)
    </div>
  );
};

export default DraggableImageItem;
