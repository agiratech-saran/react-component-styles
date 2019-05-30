import React from "react";
import "./RoundedButton.css";

const RoundedButton = props => (
  <button className="roundedButton">{props.children}</button>
);

export default RoundedButton;
