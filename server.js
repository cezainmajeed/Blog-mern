import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


//components
import Connection from "./database/db.js"
import Router from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",Router);

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT=process.env.PORT || 8000;

app.listen(PORT,function(){
  console.log("server is running on port 8000");
});

const URL = process.env.MONGO_URL;

Connection(URL);
