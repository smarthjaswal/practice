import React, { useState } from 'react'

function First() {
    
    const[plus, setPlus] = useState(0);
    const[changeName, setChangeName] = useState('Smarth');
    const increment = () => {
        setPlus(plus+1);
    }
    
    const nameChange=()=>{
        let val = changeName;
        (val === 'Smarth') ?
         setChangeName('Jaswal'):setChangeName('Smarth');
    
}
  return (
    <div>
        <h1>{plus}</h1>
       <button onClick={increment}> click me</button>
       <h1>{changeName}</h1>
       <button onClick={nameChange}>click me</button>
    </div>
  )
}

export default First