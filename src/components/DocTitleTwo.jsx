// //without custom hook
// import React, { useState, useEffect} from 'react'

// function DocTitleTwo() {

//   const [count, setCount] = useState(0)

//   useEffect(()=>{
//     document.title = `Count ${count}`
//   },[count])
//   return (
//     <div>
//       <button onClick={()=>setCount(count + 1)}>Count:- {count}</button>
//     </div>
//   )
// }

// export default DocTitleTwo



import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleTwo() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)


  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Count:- {count}</button>
    </div>
  )
}

export default DocTitleTwo
