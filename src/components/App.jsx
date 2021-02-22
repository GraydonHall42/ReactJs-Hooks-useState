import React from "react";

function App() {
  //define initial state as 0
  //count is the value of the state
  //setcount is a function which can update the value of count
  const [count, setCount] = React.useState(0);

  //increases value of state variable by 1
  function increase() {
    setCount(count + 1);
  }

  //decreases value of state variable by 1
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
