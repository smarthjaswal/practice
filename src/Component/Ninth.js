import React, { useEffect, useState } from 'react'
// CLEAN UP FUNCTION
function Ninth() {
    const[width, setWidth] = useState(window.screen.width);
    
   const actualWidth = () => {
    setWidth(window.innerWidth);
   }

    useEffect(()=>{
        window.addEventListener("resize", actualWidth);
        return () => {
            window.removeEventListener("resize", actualWidth);
        }
    })
  return (
    <div>
      <h1>THE ACTUAL SIZE OF WINDOW : </h1>
      <h2>{width}</h2>
    </div>
  )
}

export default Ninth
