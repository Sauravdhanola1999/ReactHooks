import { React } from "react";
//6
// Memoizes functions to prevent re-renders when passing callbacks to child components.
// Helps optimize performance by ensuring that functions remain consistent unless dependencies change.
//useMemo returns the memoized value, while useCallback returns the memoized function
const UsCallback = ({ learning }) => {
  console.log("I am rendering");
  return <div></div>;
};

export default UsCallback;
