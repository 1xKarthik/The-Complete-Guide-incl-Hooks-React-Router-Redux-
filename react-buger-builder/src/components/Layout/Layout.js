import React from "react";
import Aux from "../../hoc/Aux";

let layout = props => (
  <Aux>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
