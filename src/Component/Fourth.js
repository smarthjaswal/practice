import React, { useEffect, useState } from 'react'

function Fourth() {
    const[lists, setLists] = useState([]);
    const[party, setParty] = useState("Jaswal");
    useEffect(()=>{
        // alert("im changes")
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
           return res.json();
        }).then((res)=>{
            setLists(res);
            
            console.log(res);
        })
},[party])

const changes = () =>{
   let val = party;
   (val === 'Jaswal') ?
   setParty('Smarth'):setParty('Jaswal');
}
console.log(lists)
  return (
    <div>
        <h1>Data here {lists.id}</h1>
        <ul> 
            {lists.map(res=>(
                <li>
                    <h1>{res.id}</h1>
                </li>
            ))}
        </ul>
        <p>{party}</p>
        <button onClick={changes}> click me</button>

    </div>
  )
}

export default Fourth