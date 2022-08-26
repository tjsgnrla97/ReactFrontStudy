import React, {useEffect, useState} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log(count);
    });
    const increment = ()=>{
        setCount(count+1);
    };
    console.log('rendering')
    return(
        <div className="UseEffect">
            <h1>Kossie Coder</h1>
            <button onClick={increment}>Click</button>
        </div>
    );
}
export default UseEffect;