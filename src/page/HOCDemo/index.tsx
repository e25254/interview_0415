import React, { useEffect, FC } from "react";
import AsyncAwaitDemo from "../AsyncAwaitDemo";

const withConsole = <T,>(Component: React.ComponentType): FC<T> => {
  return (props) => {
    useEffect(() => {
      console.log(`${Component.name} mounted`);
      return () => {
        console.log(`${Component.name} unmounted`);
      };
    }, []);
    return <Component {...(props as T)} />;
  };
};

export default function HOCDemo() {
  const ConsoleAsyncAwait = withConsole(AsyncAwaitDemo);

  return (
    <div>
      <ConsoleAsyncAwait />
    </div>
  );
}
