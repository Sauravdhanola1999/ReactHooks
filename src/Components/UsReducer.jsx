import React, { useReducer } from "react";
//4
// Provides complex state management using a reducer function and actions.
// Works similarly to Redux but within a functional component.
// Ideal for scenarios with multiple state transitions or complex state logic.
// useReducer provides two things(state:the current state of component, dispatch: a function to send the actions describe how to update);
//useReducer accepts two arguments (reducer, initial State); 
//reducer function decides how a state should update;
// A pure function that takes the current state and an action as an argument and return new state;
//action means what should happen


const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "multiply":
      return {
        count: state.count * 3,
      };
    default:
      console.log("No reducer Found");
  }
};

export const UsReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>Please Count Me {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "multiply" })}>*</button>
      </div>
    </div>
  );
};
