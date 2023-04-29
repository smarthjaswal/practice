import React, { useEffect, useState } from 'react'

function Tenth() {

    const [stuff, setStuff] = useState([]);
    const[loading, setLoading] = useState(false);

    const getUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            setStuff(await response.json());
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getUsers();
    }, [])

    if(loading){
        <h1>Loading</h1>
    }

    return (
        <div>
            <h1>data fetching</h1>
            <p>{
                stuff.map((currElm) => {
                    return (
                        <div key={currElm.id}>
                            <p>{currElm.id}</p>
                            <p>{currElm.title}</p>
                        </div>
                    )
                })


            }</p>
        </div>
    )
}

export default Tenth
