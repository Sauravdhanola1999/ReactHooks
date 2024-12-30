import React, { useState, useEffect } from "react";
//2
// allow us to perform side effects in our components such as data fetching, subscriptions, and DOM manipulations.
// Can replace lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
//useEffect accepts two arguments and the second one is optional (1.function, 2.dependency array)
//useEffect(effectFunction, dependencyArray);
//Empty Array ([]): Effect runs only once after the initial render.
//Dependencies Listed: Effect runs whenever a dependency value changes.
//No Array Provided: Effect runs after every render.

export const UsEffect = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
    };
    fetchdata();
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setShowData((prev) => !prev)}>
          {showData ? "Hide Data" : "Show Data"}
        </button>
        {showData && (
          <ul>
            {data.map((items, index) => {
              return (
                <div key={index}>
                  <li>{items.title}</li>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
