import React, {useState} from "react";


function App() {
  
  let [time,gettime]=useState("TIME");

  function gettingtime(){
    let systime = new Date().toLocaleTimeString([], { hour12: false });
    gettime(time=systime);
  }
  

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={() => setInterval(gettingtime, 1000)}>start Timer</button>
    </div>
  );
}

export default App;
