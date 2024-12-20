import React from "react";

function CNJsx() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];
  const user1 = {
    name: "Alice",
    age: 25,
    location: "New York",
  };
  const user2 = {
    name: "Alice",
    age: 25,
    location: "New York",
    profession: "Developer",
  };
  const data = [
    {
      category: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      category: "Vegetables",
      items: ["Carrot", "Lettuce", "Peas"],
    },
  ];
  const numbers = [1, 2, 3, 4, 5, 6];

  const itemsSold = [
    { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
    { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
    { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
    { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
  ];

  const IMAGES = [
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
    "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg",
  ];

  const timeTable = {
    Monday: {
      9: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour",
      },
      10: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
      11: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour",
      },
      13: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour",
      },
      14: {
        subject: "Hindi Vyakaran",
        teacher: "Sony Desai",
        time: "1 hour",
      },
      15: {
        subject: "PT",
        teacher: "Sonu Tyagi",
        time: "1 hour",
      },
    },
    Tuesday: {
      9: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour",
      },
      11: {
        subject: "Environtal Studies",
        teacher: "Rakesh Prakash",
        time: "1 hour",
      },
      13: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour",
      },
      14: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour",
      },
      15: {
        subject: "Physics Practical",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
    },
    Wednesday: {
      9: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour",
      },
      10: {
        subject: "English Grammar",
        teacher: "Aditi Upasane",
        time: "1 hour",
      },
      11: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour",
      },
      13: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour",
      },
      14: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
      15: {
        subject: "Chemistry Practical",
        teacher: "Vedanti Joshi",
        time: "1 hour",
      },
    },
    Thursday: {
      9: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour",
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour",
      },
      11: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour",
      },
      13: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour",
      },
      14: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour",
      },
      15: {
        subject: "Biology Practical",
        teacher: "Kuldeep Narayan",
        time: "1 hour",
      },
    },
    Friday: {
      9: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour",
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour",
      },
      11: {
        subject: "English Grammar",
        teacher: "Aditi Upasane",
        time: "1 hour",
      },
      13: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour",
      },
      14: {
        subject: "Hindi Vyakaran",
        teacher: "Sony Desai",
        time: "1 hour",
      },
      15: {
        subject: "PT",
        teacher: "Sonu Tyagi",
        time: "1 hour",
      },
    },
  };

  return (
    <>
      <div className="text-white bg-gray-600 text-center">
        <h1>Learning JSX</h1>
        <hr />
        <div>
          <h2>1. Rendering Arrays in React</h2>
          <hr />
          <h1>Fruit List --</h1>
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li> //Us e key to uniquely identify elements
            ))}
          </ul>
        </div>

        <div>
          <h2>2. Rendering an Arrays of Objects</h2>
          <hr />
          <h1>User List</h1>
          <ul>
            {users.map((user, index) => (
              <li key={user.id}>
                {user.name} - {user.age} years old
              </li> //Us e key to uniquely identify elements
            ))}
          </ul>
        </div>

        <div>
          <h2>3. Rendering Objects in React</h2>
          <hr />
          <h1>User Profile</h1>
          <p>Name: {user1.name}</p>
          <p>Age: {user1.age}</p>
          <p>Location: {user1.location}</p>
        </div>

        <div>
          <h2>3.Rendering Object Keys and Values Dynamically</h2>
          <hr />
          <h1>User List</h1>
          <ul>
            {Object.entries(user2).map(([key, value]) => (
              <li key={key}>
                {key} : {value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>4.Handling Complex Nested Arrays/Objects</h2>
          <p>
            For deeply nested structures, you might combine loops and recursion
            or use libraries like lodash to simplify access.
          </p>
          <hr />
          <h1>Groceries List</h1>
          <ul>
            {data.map((group, index) => (
              <div key={index}>
                <h2>{group.category}</h2>
                <ul>
                  {group.items.map((item, i) => (
                    <li key={i}>
                      {i + 1}-{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
        <hr />
        <div>
          <h2>4. Rendering Conditional Content</h2>
          <hr />
          <h1>Even Numbers</h1>
          <ul>
            {numbers
              .filter((num) => num % 2 === 0) //Filter even
              .map((num) => (
                <li key={num}>{num}</li>
              ))}
          </ul>
        </div>
        <div>
          <h1>Record of sold items</h1>
          <table border="1px">
            {/* iterate over data here */}
            <thead>
              <td>Id</td>
              <td>Name</td>
              <td>Selling price</td>
              <td>Quantity</td>
            </thead>
            <tbody>
              {itemsSold.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <td>Total Revenue</td>
              <td colSpan="3">
                ${itemsSold.reduce((accu, cur) => accu + cur.price, 0)}
              </td>
            </tfoot>
          </table>
        </div>
        <hr />
        <div>
          <h2>5. Conditional Rendering using ternary operator</h2>
          <hr />
          {user1.name !== undefined ? `Hi ${user1.name}` : "hello User"}
        </div>
        <hr />
        <div>
          <h2>6. Conditional Rendering using AND operator</h2>
          <hr />
          {`${user1.name}` && "hello User" && "Batman"}{" "}
          {/* It will return the first falsy value or teh last value if all are false
          SO using and it will return the false value*/}
        </div>
        <hr />
        <div>
          <h2>6. Conditional Rendering using OR operator</h2>
          <hr />
          {`${user1.name}` || ("hello User" && "Batman")}{" "}
          {/* It will return the last truthy value if all are false
          SO using and it will return the false value*/}
        </div>
        <hr />
        <div>
          <h2>Student Timetable</h2>
          <hr />
          <table className="border-spacing-1">
            <thead>
              <tr>
                <th></th>
                <th>9am-10am</th>
                <th>10am-11am</th>
                <th>11am-noon</th>
                <th>12noon-1pm</th>
                <th>1pm-2pm</th>
                <th>2pm-3pm</th>
                <th>3pm-4pm</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(timeTable).map((day, index) => (
                <tr key={index}>
                  <th>{day}</th>
                  <td>{timeTable[day]?.[9]?.subject || "N/A"}</td>
                  <td>{timeTable[day]?.[10]?.subject || "N/A"}</td>
                  <td>{timeTable[day]?.[11]?.subject || "N/A"}</td>
                  <td>Break</td>
                  <td>{timeTable[day]?.[13]?.subject || "N/A"}</td>
                  <td>{timeTable[day]?.[14]?.subject || "N/A"}</td>
                  <td>{timeTable[day]?.[15]?.subject || "N/A"}</td>
                </tr>
                // Optional chaining:
// Used ?. to avoid errors if any slot is missing, and fallback to "N/A".
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CNJsx;
