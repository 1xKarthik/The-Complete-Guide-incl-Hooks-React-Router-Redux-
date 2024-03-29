import React from "react";

const builderControl = props => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Less">Less</button>
    <button className="More">More</button>
  </div>
);

export default builderControl;
