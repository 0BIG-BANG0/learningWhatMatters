import React, { useState } from "react";

function CMT() {
  let capacity = 25;
  let [seatsLeft, setSeats] = useState(capacity);

  let [count, setCount] = useState("");
  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  let [guests, setGuests] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleTimeString(); // Get the current time
    // Check if there are enough seats
    if (seatsLeft - parseInt(count) < 0) {
        alert("Not enough seats available!");
        return;
      }
    //Update the guest array
    setGuests([...guests, { count: parseInt(count), name, number,checkIn: currentDate }]);
    console.log(guests);

    //now show change the left seat
    setSeats(seatsLeft - parseInt(count));
    //clear the fields
    setCount("");
    setName("");
    setNumber("");
  };
  const handleDelete=(index)=>{
    //Remove the guest at specified index
    setGuests(guests.filter((guest,guestIndex)=> guestIndex !== index))

    //Update the remaining seats
    setSeats(seatsLeft + guests[index].count)
  }

  function Form() {
    return (
      <div className="flex justify-center">
        <form className="flex flex-col mt-7" onSubmit={handleInput}>
          <input
            id="count"
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder="Guest Count"
            className="border-2 border-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Primary Guest Name"
            className="mt-2 border-2 border-black "
          />
          <input
            id="phone"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            className="mt-2  border-2 border-black "
          />
          <button className="mt-2 border rounded-full active:border-green-800">
            Add Button
          </button>
        </form>
      </div>
    );
  }
  function Result(){
    return(
        <div className="mt-8">
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Check In</th>
                        <th>Remove Entry</th>
                    </tr>
                </thead>
                <tbody>
                {guests.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.count}</td>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.checkIn}</td>
                        <td><button className="border px-2 rounded-full active:border-gray-700" onClick={()=>handleDelete(index)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
  }
  return (
    <div className="text-center mt-8 box-border">
      <h1 className="text-6xl">Total Capacity :{capacity}</h1>
      <h1 className="mt-8 text-5xl">Seats Left :{seatsLeft}</h1>
      <Form />
      <Result/>
    </div>
  );
}

export default CMT;
