import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(useState());
const plus = () => {
  setCount(count+1)
}

  return (
    <div>
      <h1>Hooks - {count}</h1>
      <button
        style={{ padding: "10px", fontSize: "1.4em" }}
        onClick={plus}
      >
        Plus +
      </button>

      <button
        style={{ padding: "10px", fontSize: "1.4em" }}
        onClick={() => setCount(count - 1)}
      >
        Minus -
      </button>
    </div>
  );
};

export default Counter;
