import { useState } from 'react'

function useCounter(initialValue = 0, value) {

    const [count, setCount] = useState(initialValue)

    const incrementCount = ()=>{
        setCount(prev => prev + value)
    }

    const decrementCount = ()=>{
        setCount(prev => prev - value)
    }

    const resetCount = ()=>{
        setCount(0)
    }

    return [count, incrementCount, decrementCount, resetCount]
}

export default useCounter
