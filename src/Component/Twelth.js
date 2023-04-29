import React, { useReducer } from 'react'
//USE REDUCER HOOK
function Twelth() {


    const initialState = 5;

    const reducer=(state, action)=>{ // curent state, action method
        
        if(action.type==='INCREMENT')
        return state+1;
        if(action.type==='DECREMENT'){
            return state-1;
        }
     
    }
 
    const[state, dispatch] =   useReducer(reducer, initialState); //it is also called as pure function which takes a state and an action
   // it does not produce side effects



  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=> dispatch({type: "INCREMENT"})}>PLUS</button>
      <button onClick={()=> dispatch({type: "DECREMENT"})}>MINUS</button>
    </div>
  )
}

export default Twelth
