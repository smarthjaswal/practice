import React, { useState } from 'react'
// LogIN FORM in MAKING
function Sixth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [entry, setEntry] = useState([]);


    const submitForm = (e) => {
        e.preventDefault();
        if (email && password) {
            const newEntry = { id: new Date().getTime().toString(), email, password };
            setEntry([...entry, newEntry])
            console.log(entry);

            setEmail("");
            setPassword("");
        } else {
            alert("fill key details");
        }

    }
    return (
        <div>

            <form action='' onSubmit={submitForm}>
                <div>
                    <label htmlFor='email'> Email</label>
                    <input type='text' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'> Password</label>
                    <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>LogIn</button>
            </form>
            <p>{
                entry.map((currElm) => {
                    const { id, email, password } = currElm;
                    return (
                        <p key={id}> {email} {password}  </p>
                    )
                })
            }
            </p>

        </div>
    )
}

export default Sixth
