import React, { useState } from 'react'

function DynamicUserCard() {
    // In React, to dynamically update and render UI based on changing values, you need to use state.
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [about,setAbout] = useState("")

    function handleInput(e,field){
        if(field === 'name'){
            setName(e.target.value)
        }else if(field === 'email'){
            setEmail(e.target.value)
        }else{
            setAbout(e.target.value)
        }
    }
  return (
    <>
      <div className="card text-lg font-medium">
          {/* Display the values of name, email, and about dynamically */}
          <h3>Name: {name}</h3>
          <p>Email: {email}</p>
          <p>About: {about}</p>
        </div>
        {/* TODO: Add the Card component here to render the user's input values (name, email, about).*/}
          
    <div className="inputs ">
            {/* Add onChange event handlers to capture the input value */}
            <input placeholder="Name" value={name} onChange={(e)=> handleInput(e,'name')} className='border-2 border-black'/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=> handleInput(e,'email')} className='border-2 border-black'/>
            <textarea placeholder="About" value={about} onChange={(e)=> handleInput(e,'about')} className='border-2 border-black'></textarea>
          </div>
    </>
  )
}

export default DynamicUserCard
