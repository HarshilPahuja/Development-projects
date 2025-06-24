import { useState } from "react";
function App() {


  

  
  const[listitem, changelistitem]=useState("");
  const [listarray,changelistarray]=useState([]);

  function addlistitem(event){
    
    changelistitem(event.target.value);
  }
  
  function pusharray(){
    changelistarray((prevvalue)=>{
      return [...prevvalue, listitem]
    });
    changelistitem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addlistitem} type="text" value={listitem}/>
        <button onClick={pusharray}>
          <span>add</span>
        </button>
      </div>
      <div>
        <ul>
          {listarray.map(listitemm => (
          <li >{listitemm}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
