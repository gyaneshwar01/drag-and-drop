import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ListItem from "./ListItem";

function ListContainer() {
  const [columnOne, setColumnOne] = useState(["A1", "A2", "A3"]);
  const [columnTwo, setColumnTwo] = useState(["B1", "B2", "B3"]);
  const [columnThree, setColumnThree] = useState(["C1", "C2", "C3"]);

  const [{ isOverOne }, dropRefA] = useDrop({
    accept: "item",
    drop: ({ name }) => {
      if (!columnOne.some((item) => item === name)) {
        setColumnOne([...columnOne, name]);
        setColumnTwo(columnTwo.filter((item) => item !== name));
        setColumnThree(columnThree.filter((item) => item !== name));
      }
    },
  });

  const [{ isOverTwo }, dropRefB] = useDrop({
    accept: "item",
    drop: ({ name }) => {
      if (!columnTwo.some((item) => item === name)) {
        setColumnTwo([...columnTwo, name]);
        setColumnOne(columnOne.filter((item) => item !== name));
        setColumnThree(columnThree.filter((item) => item !== name));
      }
    },
  });

  const [{ isOverThree }, dropRefC] = useDrop({
    accept: "item",
    drop: ({ name }) => {
      if (!columnThree.some((item) => item === name)) {
        setColumnThree([...columnThree, name]);
        setColumnOne(columnOne.filter((item) => item !== name));
        setColumnTwo(columnTwo.filter((item) => item !== name));
      }
    },
  });

  return (
    <div className="container">
      {columnOne && (
        <div className="column" ref={dropRefA}>
          <div className="title">
            <h4>Column A</h4>
            <button onClick={() => setColumnOne(null)}>X</button>
          </div>
          {columnOne.map((child) => (
            <ListItem name={child} key={child} />
          ))}
        </div>
      )}
      {columnTwo && (
        <div className="column" ref={dropRefB}>
          <div className="title">
            <h4>Column B</h4>
            <button onClick={() => setColumnTwo(null)}>X</button>
          </div>
          {columnTwo.map((child) => (
            <ListItem name={child} key={child} />
          ))}
        </div>
      )}
      {columnThree && (
        <div className="column" ref={dropRefC}>
          <div className="title">
            <h4>Column C</h4>
            <button onClick={() => setColumnThree(null)}>X</button>
          </div>
          {columnThree.map((child) => (
            <ListItem name={child} key={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListContainer;
