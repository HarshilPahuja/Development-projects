import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const country_codes=[];
const db=new pg.Client({
   user: "postgres",
  host: "localhost",
  database: "world",
  password: "root",
  port: 5432,
});

db.connect();
db.query("select country_code from visited_countries", (err,res)=>{
  if(err)
    {console.error("error executing query", err.stack);

    }
    else{
      for(var i=0; i<res.rows.length;i++){
      country_codes.push(res.rows[i].country_code);
      }
      
    }
  });


app.get("/", async (req, res) => {
  res.render("index.ejs", {
    countries: country_codes,
    total: 0
  });
});

app.post("/add", async(req,res)=>{

  let s1=req.body.country;
  let input_country_name=s1.charAt(0).toUpperCase() + s1.slice(1)

  db.query("select country_code from countries where country_name=$1",[input_country_name], (err,dbres)=>{  //check if the country name entered exist, if it doesnt it crashes the site. + if countries already been added do that case also, put try catch and pass error: when rendering(there is an error field already present in ejs)//left tbd
    if(err){
      console.error("error executing query", err.stack);  
    }
    else{
      let input_country_code=dbres.rows[0].country_code;
      db.query("insert into visited_countries(country_code) values($1)", [input_country_code]);
      country_codes.push(input_country_code);
      res.render("index.ejs", {
    countries: country_codes,
    total: 0
  });
    }
  });



});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
