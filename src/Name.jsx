import React, { useState } from 'react'

function Name({emoji,data}) {
    const [name, setName] = useState('') //Initilize it with empty String
    const handleChange = (e)=>setName(e.target.value) // Update state with input value

    const [a,b] = useState(false)

  return (
    <div className='text-white w-full h-52 bg-red-800 text-center font-semibold text-2xl'>
      <input type="text" value={name} onChange={handleChange} className='bg-black text-white border-2 border-opacity-5 font-serif shadow-2xl cursor-text' />
      <p className='my-3 italic font-extralight ease-lineare delay-150'>Hi , {name} ,{emoji}</p>
      <h1>{data.name}</h1>
      <h1>{a === true ? data.age : 25}</h1>
      <button onClick={()=>b(!a)}className='px-3 bg-green-500 hover:bg-green-700   rounded-md font-normal text-2xl'>Change Age</button>
      {/* //COnditional Rendering */}
    </div>
  )
}

export default Name
