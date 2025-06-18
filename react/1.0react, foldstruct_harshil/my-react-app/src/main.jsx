import React from "react";
import { createRoot } from "react-dom/client"; 
//import "./index.css"; // ✅ Make sure this line is included- if index.css is not inside public but in root


const name="Angela";
const lname="Yu";
const root = createRoot(document.getElementById("root"));
root.render(<div>
  <ul>
    <li><img className="imagee" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480"/></li>
    <li><img className="imagee" src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg" /></li>
    <li><img className="imagee" src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"/></li>
  </ul>
</div>);

