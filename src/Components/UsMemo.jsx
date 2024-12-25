import React, { useState, useMemo } from "react";
//5
// Memoizes computed values to avoid recalculations on each render.
//Memoize means to store the result of a function so, that they can be reused instead of recalculating
// Useful for optimizing expensive calculations or derived state that depends on multiple variables.
// Uses a dependency array to control when the memoized value should be recalculated.

export const UsMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive computation function
  const multipytwo = (n) => {
    console.log("Computing factorial...");
    return n * 2;
  };

  // const updatedValue = multipytwo(count);  Without Using Memo

  // Memoized calculation
  const updatedValue = useMemo(() => multipytwo(count), [count]);

  return (
    <div>
      <h1>
        Multiply of {count} is {updatedValue}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
};
