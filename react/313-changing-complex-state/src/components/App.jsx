import { useState } from "react";
function App() {
  const [fname, setfname]=useState("");
  const [lname, setlname]=useState("");

  function handlefname(event){
    setfname(event.target.value);
  }

  function handlelname(event){
    setlname(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input onChange={handlefname} name="fName" placeholder="First Name" value={fname}/>
        <input onChange={handlelname} name="lName" placeholder="Last Name" value={lname} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


// second waay to use it is setfname and lname as an object.