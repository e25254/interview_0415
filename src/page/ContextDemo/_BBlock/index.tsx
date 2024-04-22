import React, { useContext } from "react";
import "./index.css";
import { InputContext } from "../../../context/InputContext";
export default function BBlock() {
  const inputValue = useContext(InputContext);
  return <div className="b_block">{inputValue}</div>;
}
