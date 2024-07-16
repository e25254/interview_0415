import React, { useEffect, useMemo, useState } from "react";

export default function TestPage() {
  const [obj, setObj] = useState({ name: { gary: 1 } });
  const memoValue = useMemo(() => ({ ...obj }), [obj]);

  const testClosure = (() => {
    const closure = () => {
      const a = 1;
      return a;
    };
    console.log("closure", closure());
  })();

  useEffect(() => {
    console.log("memoValue", memoValue);
  }, [memoValue]);
  return (
    <div>
      <button onClick={() => setObj({ name: { gary: 1 } })}></button>
    </div>
  );
}
