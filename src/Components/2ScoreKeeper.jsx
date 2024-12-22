import React, { useState } from "react";

function ScoreKeeper() {
  let scorearray = [0, 1, 2, 3, 4, 5, 6, "W"];
  const [score, setScore] = useState(0); //track score
  const [wicket, setWicket] = useState(0); //Tracks wickets
  const [results, setResults] = useState([]); //Track ballwise Result
  //Function to handle button clicks
  const handleClick = (item) => {
    if (item === "W") {
      //Increment wicket only if less than 10
      if (wicket < 10) {
        setWicket(wicket + 1);
        // Add ball result to the results array
        setResults([...results, item]);
      }
    } else {
      //Incremet the count
      if (wicket < 10) {
        setScore(score + item);
        // Add ball result to the results array
        setResults([...results, item]);
      }
    }

    console.log(results);
  };
  return (
    <div className="w-full h-screen bg-zinc-800 text-white text-center ">
      <h1 className="pt-10 text-5xl py-10 font-semibold font-mono">
        Score-Keeper
      </h1>
      <h2 className="text-3xl">
        Score:{score}/{wicket}
      </h2>
      <div className="mt-10">
        {scorearray.map((item, index) => (
          <button
            key={index}
            className="p-3 border rounded-sm bg-slate-700 active:bg-slate-900 active:scale-95"
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        <h2>Ball-wise Results: </h2>
        <div>
          {results.map((results, index) => (
            <div>{results}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScoreKeeper;
