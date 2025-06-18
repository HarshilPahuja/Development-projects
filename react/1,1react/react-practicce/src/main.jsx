import React from 'react';
import {createRoot} from 'react-dom/client';
const date=new Date().getHours().toString();
const root = createRoot(document.getElementById("root"));

let colorobj={color:"yellow"};

let wish="";

if(date<12){
  colorobj.color="red",
  wish="good morning"
}
else if(date>=12 && date<18){
  colorobj.color="green",
  wish="good afternoon"
}
else if(date>18 && date<24){
  colorobj.color="blue",
  wish="good night"
}


root.render(<div>
 <h1 className="heading" style={colorobj}> {date} {wish} </h1>
</div>

)