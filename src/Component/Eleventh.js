import React, { useRef, useState } from 'react'
//UNCONTROLLED FORMS
// USEREF NO RERENDER

function Eleventh() {
  
  const luckyName = useRef(null)
  const[show, setShow] = useState(false);
   
  const submitForm=(e)=>{
   e.preventDefault();
   const streak = luckyName.current.value;
    streak === " " ? alert("plz fill data") : setShow(true);
  }

  return (
    <div>
      <form action='' onSubmit={submitForm}>
      <label htmlFor='luckyName'> Enter your lucky name</label>
      <input type='text' id="luckyName" ref={luckyName}/>
      <br/>
      <button>submit</button>
      
      </form>
      <p>
        {show ? `your lucky name is ${luckyName.current.value}`: " "}
        </p>
      
    </div>
    
  )
}

export default Eleventh
