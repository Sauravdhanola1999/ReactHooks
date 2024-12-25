import React, { useRef, useState, useEffect } from "react";
//7
// Provides a way to create mutable references that persist across renders.
// Mutable refernce means a object where is value changes but does not cause re-render
// persist across renders means value changes but does not cause re-render
// Useful for accessing DOM elements, managing focus, or storing mutable objects.
// Can also be used to implement instance-based state without triggering re-renders.

export const UsRef = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h2>Previos Count: {previousCount.current}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
