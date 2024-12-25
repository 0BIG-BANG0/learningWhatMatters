import React, { useState } from "react";

function Forms() {
  let [name, setName] = useState("");
  let [marks, setMarks] = useState("");

  const Form = () => {
    const handleClick = (e) => {
      e.preventDefault();
        //Get the value from input fields when the form is submitted
        const nameValue = e.target.name.value
        const marksValue = e.target.marks.value

      setName(nameValue);
      setMarks(marksValue);
      console.log(nameValue,marksValue)
    };
    return (
      <div className="flex flex-col p-3">
        <h1>Students Form</h1>
        <form className="flex-col " onSubmit={handleClick}>
          <label htmlFor="">Name:</label>
          <input id="name" type="text" defaultValue ={name} className="border-2 border-black" required />
          <label htmlFor="">Marks:</label>
          <input id="marks" defaultValue={marks} type="number" className="border-2 border-black" required />
          <button className="border-2 text-white  bg-gray-600 rounded-full p-2 active:bg-gray-900 ">
            Submit
          </button>
        </form>
      </div>
    );
  };
  const Result = () => {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Marks: {marks}</p>
      </div>
    );
  };
  return (
    <>
      <Form />
      <Result />
    </>
  );
}

export default Forms;
