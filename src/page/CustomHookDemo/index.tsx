import React from "react";
import useLocalStorage from "../../hook/useLocalStorage";
import "./index.css";

export default function CustomHookDemo() {
  const [stringLocalStorage, setStringLocalStorage] = useLocalStorage<string>(
    "string_local_storage",
    "hello"
  );
  const [numberLocalStorage, setNumberLocalStorage] = useLocalStorage<number>(
    "number_local_storage",
    1
  );
  return (
    <div className="custom_hook_demo">
      <div>
        <input
          type="text"
          onChange={(event) => setStringLocalStorage(event.target.value)}
          value={stringLocalStorage}
        />
        {stringLocalStorage}
      </div>
      <div>
        <input
          type="number"
          onChange={(event) =>
            setNumberLocalStorage(parseInt(event.target.value))
          }
          value={numberLocalStorage}
        />
        {numberLocalStorage}
      </div>
    </div>
  );
}
