import React, { useState } from 'react'

function Third() {
    const[myObj, setMyObj] = useState({
        myName:"Smarth",
        myAge: 25,
        degree:"CSE"
    });
    
    const changeObj=()=>{
        setMyObj({...myObj, myName:"Jaswal"});
    }
  return (
    <div>
       <h1>Name:{myObj.myName},Age:{myObj.myAge},Degree:{myObj.degree}</h1>
       <button onClick={changeObj}>Update</button>
    </div>
  )
}

export default Third