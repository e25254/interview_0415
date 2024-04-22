import React, { useState } from "react";
import ABlock from "./_ABlock";
import BBlock from "./_BBlock";
import "./index.css";
import { InputContext } from "../../context/InputContext";

export default function ContextDemo() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="context_demo">
      <InputContext.Provider value={inputValue}>
        <input
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <div>
          <ABlock />
          <BBlock />
        </div>
      </InputContext.Provider>
    </div>
  );
}
