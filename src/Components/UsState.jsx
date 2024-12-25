import React, { useState, useEffect } from "react";
//1
// Allows functional components to manage internal state.
// Returns a state variable and a function to update it.
// Commonly used for simple state management, like toggles, counters, and form inputs.
// state refers to data or properties that is tracked in an application

export const UsState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    //previosvalue => previosvalue+1;
    // console.log(count);
  };

//   useEffect(() => {
//     console.log(count);
//   }, [count]);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};
