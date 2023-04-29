import React, { useEffect, useState } from 'react'

function Eighth() {
    const[count, setCount] = useState(0);
    useEffect(()=>{
        if(count>= 1){
        document.title = `watch(${count})`;
        }else{
            document.title = `watch`;
        }
        
    },[count])
    console.log("outside useeffect function");

    const increment = () => {
        setCount(count+1);
    }
    useEffect(()=>{
        console.log("2nd")
    },[])

  return (
    <div>
      <h1>useEffect hook</h1>
      <h2>{count}</h2>
      <button onClick={increment}>click me</button>
    </div>
  )
}

export default Eighth
