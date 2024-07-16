import React, { useState, useEffect, useCallback, memo, useRef } from "react";

const HeavyComponent = memo(
  ({ onClick, title }: { onClick: () => void; title: string }) => {
    const [data, setData] = useState<number>(null);

    const sleep = (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    return (
      <div>
        <h1>{title}</h1>
        <p>{Math.random()}</p>
        <button onClick={onClick}>click</button>
      </div>
    );
  },
  (before, after) => {
    if (before.title === after.title) return true;
    return false;
  }
);

const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <input {...{ value, onChange }} />;
};

export default function TestPage2() {
  const [value, setValue] = useState<string>("");
  const ref = useRef(() => {});
  useEffect(() => {
    ref.current = () => {
      console.log(value);
    };
  }, [value]);
  const onClick = useCallback(() => {
    ref.current();
  }, []);

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <HeavyComponent onClick={onClick} title="HeavyComponent" />
    </div>
  );
}
