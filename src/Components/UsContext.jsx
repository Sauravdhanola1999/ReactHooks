import React, { useContext, useState } from "react";
import { createContext } from "react";
//3
// Consumes context values in functional components.
// Helps avoid prop drilling by allowing components to access global or shared state directly.
// Commonly used with React’s Context API to manage application-wide states like themes or user authentication.

const globalStateContext = createContext(null);
export const UsContext = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <globalStateContext.Provider value={{ isToggle, setIsToggle }}>
      <div>
        <ChildDisplay />
        <ChildToggle />
      </div>
    </globalStateContext.Provider>
  );
};

export const ChildToggle = () => {
  const { setIsToggle } = useContext(globalStateContext);
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>Toogle State</button>
    </div>
  );
};

export const ChildDisplay = () => {
  const { isToggle } = useContext(globalStateContext);
  return (
    <div>
      <p>Curent State : {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};
