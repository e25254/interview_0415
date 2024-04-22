import React, { useContext } from "react";
import "./index.css";
import { InputContext } from "../../../context/InputContext";
export default function ABlock() {
  const inputValue = useContext(InputContext);
  return <div className="a_block">{inputValue}</div>;
}
