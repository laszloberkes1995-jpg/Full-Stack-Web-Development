import { useState } from "react";

function Counter() {
  // const[count,setCount] = useState(0);
  const [user, setUser] = useState({ name: "Iman", age: 17 });
  return (
    <>
      <h1>
        Counter: {user.age} {user.name}
      </h1>
      <button
        onClick={() => {
            // 1. use a callback within a setState within to access the previous value
            // 2. Spread all the propertes of prev object into the new object
            //3. Change the property that you want to change.
          setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setUser((prevUser) => ({ ...prevUser, age: prevUser.age - 1 }));
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setUser((prevUser) => ({ ...prevUser, age: 17 }));
        }}
      >
        Reset
      </button>
    </>
  );
}
export default Counter;
