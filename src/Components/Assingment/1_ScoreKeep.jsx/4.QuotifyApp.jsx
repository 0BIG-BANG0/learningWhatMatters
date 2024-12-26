import React, { useState } from "react";

function QuotifyApp() {
  //Use state
  let [quote, setQuote] = useState("");
  let [name, setName] = useState("");
  let [quotes, setQuotes] = useState([]);

  const handleQuote = (e) => {
    e.preventDefault();
    let nameValue = e.target.name.value;
    let quoteValue = e.target.quote.value;
    console.log(nameValue, quoteValue);
    // Add the new quote to the quotes array
    setQuotes([...quotes, {name:nameValue, quote: quoteValue}])

    //clear the input fields after submission
    e.target.name.value = ""
    e.target.quote.value = ""

  };
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-purple-700 mt-5">Quotify</h1>

      <form action="" className="mt-16 " onSubmit={handleQuote}>
        <input
          type="text"
          id="name"
          defaultValue={name}
          className="border-2 border-black "
          placeholder="Enter your Name"
        />
        <input
          type="text"
          id="quote"
          defaultValue={quote}
          className="border-2 border-black "
          placeholder="Enter your Quote"
        />
        <button className="border-2 rounded-full active:border-gray-700 p-3">
          Add Quote
        </button>
      </form>
      <div className="display">
        {quotes.map((item,index)=>(
            <div className="cards" key={index}>
                 <h3 className="font-bold text-lg">{item.name}</h3>
                 <p className="italic">{item.quote}</p>
            </div>
        ))}
        
      </div>
    </div>
  );
}

export default QuotifyApp;
