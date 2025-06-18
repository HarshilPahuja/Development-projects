import React from "react";
import { createRoot } from "react-dom/client"; 

const root = createRoot(document.getElementById("root"));

root.render(<h1 className="heading">Hello World!</h1>);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
