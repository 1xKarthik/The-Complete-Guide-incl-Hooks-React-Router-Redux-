import React from "react";
import BuildControl from "./BuilderControl/BuilderControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "meat" }
];

const builderControls = props => {
  return (
    <div className="BuildControls">
      {controls.map((item, index) => (
        <BuildControl key={index} label={item.label} />
      ))}
    </div>
  );
};

export default builderControls;
