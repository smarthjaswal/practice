import React, { useState } from 'react'

// HANDELING FORM DATA

function Seventh() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [entry, setEntry] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    // console.log(value);
    setData({ ...data, [name]: value })
  }


  const submitForm = (e) => {
    e.preventDefault();
    const newRecords = { ...data, id: new Date().getTime().toString() }
    setEntry([...entry, newRecords]);
    console.log(entry);
    setData({name:"",email:"",phone:"",password:""})
  }




  return (
    <div>
      <form action='' onSubmit={submitForm}>
        <div>
          <label htmlFor='name'> Full Name</label>
          <input type='text' name='name' id='name' value={data.name} onChange={handleInput} />
        </div>
        <div>
          <label htmlFor='email'> Email</label>
          <input type='text' name='email' id='email' value={data.email} onChange={handleInput} />
        </div>
        <div>
          <label htmlFor='phone'> Phone</label>
          <input type='number' name='phone' id='phone' value={data.phone} onChange={handleInput} />
        </div>
        <div>
          <label htmlFor='password'> Password</label>
          <input type='password' name='password' id='password' value={data.password} onChange={handleInput} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <p>{
        entry.map((currElm) => {
          const { id, name, email, phone, password } = currElm;
          return (
            <h2 key={id}>{name} {email} {phone} {password}</h2>
          )
        })
      }
      </p>

    </div>
  )
}

export default Seventh
