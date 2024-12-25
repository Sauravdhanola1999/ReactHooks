import React, { useState, useEffect } from "react";
//2
// Handles side effects such as data fetching, subscriptions, and DOM manipulations.
// Can replace lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
// Uses a dependency array to control when the effect runs and whether it requires cleanup.

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
