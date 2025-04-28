/*this is just for practicing middlewares but it has a serious technical fault. use a global variable pass_check, which is set by the authentication middleware. But pass_check is shared between ALL users because it's global.
If one user enters the correct password, then every user afterward will pass.   To solve this we need to remove middleware and
just checking for authentication within the post method*/

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app=express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));

var pass_check=false;
var password='1234';

function authentication(req,res,next){
    if(req.body.password == password){
        pass_check=true;
    }
next();
}
app.use(authentication);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req,res) =>{
    if(pass_check){
    res.sendFile(__dirname+ "/public/secret.html");}
    else{
        res.send("<h1>Wrong password. Please try again</h1>")
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });