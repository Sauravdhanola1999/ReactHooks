import React, { useState, useEffect } from "react";
//Hooks are functions in react that allows us to use React features without writing class components
//1
// Allows us to track state in a functional Component
//state generally refers to data/properties that need to be tarcked in an application.
//Usestate accepts initial state and Returns two values: the current state and a function to update it.
// Commonly used for simple state management, like toggles, counters, and form inputs.

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
