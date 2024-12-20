import React from 'react'

function ScoreKeeper() {
    let scorearray = [1,2,3,4,5,6,"W"]
    let score = 0
    let wicket = 0
    const updateScore=()=>{

    }
  return (
    <div className='w-full h-screen bg-zinc-800 text-white text-center '>

      <h1 className='pt-10 text-5xl py-10 font-semibold font-mono'>Score-Keeper</h1>
      <h2 className='text-3xl'>Score:{score}/{wicket}</h2>
      <div className='mt-10'>
        {scorearray.map((item,index)=>(
            <button className='p-3 border rounded-sm bg-slate-700 active:bg-slate-900 active:scale-95' onClick={updateScore} >{item}</button>
        ))}
      </div>
    </div>
  )
}

export default ScoreKeeper
