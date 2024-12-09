import React, { useState } from "react";
import { use } from "react";

function MyComponent() {
  // Set initial state for 'name' as an empty string or any default value.
  const [name, setName] = useState("guest");
  const [age,setAge]=useState(0);
  const [isEmployed ,setIsEmployed]= useState(false);

  // Update function for setting the name.
  const updateName = () => {
    setName("Spongebob"); // Use the setter function to update the state.
    console.log(name); // This will still log the old 'name' due to the asynchronous nature of state updates.
  }
  const incrementAge=()=>{

    setAge(age+1);
  }
  const toggleEmployedStatus =()=>{
    setIsEmployed(!isEmployed);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age:{age}</p>
      <button onClick={incrementAge}>İncrement age</button>

      <p>Is Employed:{isEmployed ? "yes":"no"}</p>
      <button onClick={toggleEmployedStatus}>Toggle</button>
    </div>
  );
}

export default MyComponent;
