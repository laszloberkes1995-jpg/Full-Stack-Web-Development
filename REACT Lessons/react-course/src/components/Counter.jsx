import { useState } from "react";

function Counter() {
 // ['+1','-1','+1', +1, +1]
 const [array, setArray] = useState([]);
  return (
    <>
      <h1>{array.toString()}</h1>
      <button onClick={() => {
        setArray((prevArray) => [...prevArray, '+1'])
      }}>Increment</button>
      <button onClick={() => {
        setArray((prevArray) => [...prevArray, '-1'])
      }}>Decrement</button>
      
    </>
  );
}
export default Counter;
