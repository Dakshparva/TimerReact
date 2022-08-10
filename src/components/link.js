import { createRef, useEffect, useState } from 'react';
import './component.css';

function Counter(){
    const[count,setCount] =useState(0);
    const[inputValue,setInputValue]= useState(0);
    const buttonRef = createRef(1)

    useEffect(()=>{
        if(count<=0){
           buttonRef.current.disabled = true;
        }else{
            buttonRef.current.disabled = false;
            
        }
    },[count]);



const increment = () => setCount(count+ Number(inputValue));
const decrement = () => setCount(count- Number(inputValue));

return(
    <div className="counter-container">
       <h1>Counter</h1>

       <input
            placeholder='Enter the counter value'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />

       <h2 className='color-white'>Count: {count}</h2>

       <button onClick={increment}>+</button>
       <button 
            onClick={decrement} 
            ref={buttonRef}
        >
            -
        </button>
    </div>
);
};

export default Counter;