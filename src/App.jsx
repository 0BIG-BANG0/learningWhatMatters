import React, { useState } from 'react' //this convert JSX to JS code
import Products from './Products.jsx'
import Name from './Name.jsx';
import CNJsx from './Components/1CNJsx.jsx';
import ScoreKeeper from './Components/2ScoreKeeper.jsx';
import FavouriteFood from './Components/Assingment/1_ScoreKeep.jsx/1.FavouriteFood.jsx';
import DynamicUserCard from './Components/Assingment/1_ScoreKeep.jsx/2.DynamicUserCard.jsx';
import Forms from './Components/Assingment/1_ScoreKeep.jsx/3.Forms.jsx';
import QuotifyApp from './Components/Assingment/1_ScoreKeep.jsx/4.QuotifyApp.jsx';
import CMT from './Components/Assingment/1_ScoreKeep.jsx/5.CMT.jsx';

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
    {/* <ScoreKeeper/> */}
    {/* <FavouriteFood/> */}
    {/* <DynamicUserCard/> */}
    {/* <Forms/> */}
    {/* <QuotifyApp/> */}
    <CMT/>
    
    </>
  )
}

export default App
