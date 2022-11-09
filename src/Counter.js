import React, {useState} from "react";

function Counter() {
   const [count, setCount] = useState(0);

   const decrement = () => {
       if (count <= 0) {
        setCount(0)
       }
       else {
           setCount(count - 1)
       } 
   }

   const increment = () => {
       if (count >= 10) {
           setCount(10)
       } else {
           setCount(count + 1)
       }
   }

   return (
       <div>
           <h1>Counter</h1>
           <h2>{count}</h2>
           <button onClick={decrement}>-</button>
           <button onClick={increment}>+</button>
           <button onClick={() => {
               setCount(0)
           }}>Reset</button>
       </div>
   ) 
}

export default Counter;
