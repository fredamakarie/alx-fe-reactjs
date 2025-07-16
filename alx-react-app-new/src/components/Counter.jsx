import {useState} from 'react';
function Counter(){
    const [count, setCount] = useState(0);
    
    return (
        <div style = {{backgroundColor: "#3d3d3d", color: "white"}}>
            <p> Counter: {count}</p>
            <button onClick = {() => setCount (count + 1)}>Increment</button>
            <button onClick = {() => setCount (count - 1)}>Decrement</button>
            <button onClick = {() => setCount(0)}>Reset</button>
        </div>
    
    );
}
export default Counter;