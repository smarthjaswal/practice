import React, { useState } from 'react'

function Second() {



    const arr = [
        {
            id: 0,
            myName: "Smarth",
            age: 25
        },
        {
            id: 1,
            myName: "Jaswal",
            age: 26
        },
        {
            id: 2,
            myName: "Developer",
            age: 27
        }
    ]
    const [myArr, setMyArr] = useState(arr);
    const clearArr = () => {
        setMyArr([]);
    }

    const removeElem = (id) => {
        const myNewData = myArr.filter((currElm) => {
            return currElm.id !== id;
        })

        setMyArr(myNewData);
    }



    return (
        <div>
            <h1>Data</h1>
            {
                myArr.map((currElm) => {
                    return (
                        <h1 key={currElm.id}>Name:{currElm.myName} & Age: {currElm.age}

                            <button onClick={() => removeElem(currElm.id)}>remove</button>
                        </h1>
                    );

                })
            }
            <button onClick={clearArr}>clear</button>

        </div>
    )
}

export default Second