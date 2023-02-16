import React from "react";
import { useDrag } from "react-dnd";

export default function ListItem({ name }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className="list-item" ref={dragRef}>
      {name}
      {isDragging && "🚀"}
    </div>
  );
}
