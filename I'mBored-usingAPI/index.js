import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result,
      error_message:"",
    });
    
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
      error_message:""
    });
  }
});

app.post("/", async (req, res) => {
  
  var reqtype=req.body.type;
  var reqparticipants=req.body.participants;
  try {
    
    var endpoint="https://bored-api.appbrewery.com/filter?type="+reqtype+"&participants="+reqparticipants;
   

    const response = await axios.get(endpoint);
    
    const result = response.data;
    var select=Math.floor(Math.random() * result.length);
    res.render("index.ejs", { data: result[select],
      error_message:""
    });
    
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
      error_message:"No activities that match your criteria"//need to put
    });
  }

  
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
