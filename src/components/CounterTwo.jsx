// import React, { useState } from 'react'

// function CounterTWO() {

//     const [count, setCount] = useState(0)

//     const incrementCount = ()=>{
//         setCount(prev => prev + 1)
//     }

//     const decrementCount = ()=>{
//         setCount(prev => prev - 1)
//     }

//     const resetCount = ()=>{
//         setCount(0)
//     }

//   return (
//     <div>
//       <h1>Count:- {count}</h1>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//       <button onClick={resetCount}>Reset</button>
//     </div>
//   )
// }

// export default CounterTwo



//using custom hook
import React from 'react'
import useCounter from './useCounter'

function CounterTWO() {

 const [count, incrementCount, decrementCount, resetCount] = useCounter(0, 1)
  return (
    <div>
      <h1>Count:- {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default CounterTWO

