import React, { useContext, useState } from "react";
import { createContext } from "react";
//3
// A react hook that allows us to share data(context) accross multiple components without need of passing data explicitly through props.
//Avoid prop drilling by allowing components to access global or shared state directly.
//Commonly used with React’s Context API to manage global states, such as themes or user authentication
//Create a Context: Use React.createContext to create a context object. This object will hold the shared data.
//Provide the Context: Use the Provider component from the context object to wrap the part of the component tree that needs access to the context. The value prop of the Provider supplies the data.
//Consume the Context: Use the useContext hook inside any functional component to access the context value

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
