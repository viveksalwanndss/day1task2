import { useState } from 'react'


function Counter({ countValue }) {

    const [count, setCount] = useState(countValue);

    const handleDecrement = ()=>{
           setCount(count-1)
    }

     const handleIncrement = ()=>{
           setCount(count+1)
    }

   

    return (
        <>

            <p> <button onClick={handleDecrement}>Decrement</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>Increment</button> </p>

        </>
    )
}

export default Counter;
