import React, { useState } from 'react' //this convert JSX to JS code
import Products from './Products.jsx'
import Name from './Name.jsx';
import CNJsx from './Components/1CNJsx.jsx';
import ScoreKeeper from './Components/2ScoreKeeper.jsx';

function App() {
  const [count , setCount] = useState(0); 
  const increment =()=>{
    
      setCount(count+1)
    
  }
  return (
    <>
    {/* <div className="w-full h-10  text-green text-center bg-red-800 text-7xl	font-bold line-through py-4">
      <div></div>
     <h1>{count}</h1>
     <button onClick={increment} className='px-3 bg-green-500 hover:bg-green-700   rounded-md font-normal text-2xl'>Click</button>
    </div> */}
    {/* // <div>hey</div> we can only return one div so use reat fragment  */}

     {/* <Products /> */}

    {/* <Name emoji="🛠️🛠️" data={{name: "ABDUS SAMAD", age:26}}/> */}

    {/* Learning JSX */}
    {/* <CNJsx/> */}
    <ScoreKeeper/>
    </>
  )
}

export default App
