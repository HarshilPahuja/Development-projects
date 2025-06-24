
import { useState } from "react";
function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    const newValue=event.target.value;
    const inputName=event.target.name;

    setContact((prevvalue)=> {
      if(inputName==="fName"){
        return{
          fName:newValue,
          lName:prevvalue.lName,
          email:prevvalue.email
        }
      }
      else if(inputName==="lName"){
        return{
          fName:prevvalue.fName,
          lName:newValue,
          email:prevvalue.email
        }
      }
      else{
        return{
        fName:prevvalue.fName,
        lName:prevvalue.lName,
        email:newValue
        }
      }

    })
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
