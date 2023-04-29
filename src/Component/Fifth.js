import React, { useState } from 'react'
// SHORT CIRCUIT EVALUATION-- we can do multiple renders with the help of OR and AND operator
function Fifth() {
   const [demo, setDemo] = useState("mic check")
      
   const changeStuff=()=>{
      setDemo("checking Done")
   }

  return (
    <div>
      <h1>{demo|| "Smarth"}</h1>
      <h1>{demo && "Jaswal"}</h1>
      <p>{demo}</p>
      <button onClick={changeStuff}>change</button>
    </div>
  )
}

export default Fifth
