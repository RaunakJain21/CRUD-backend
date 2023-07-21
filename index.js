const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();
const PORT=process.env.PORT;

// middleware to parse json request body
app.use(express.json());

// import routes to TODO api
const todoRoutes = require('./routes/todo')
// mount todo api routes
app.use("/api/v1",todoRoutes);

// start server
app.listen(PORT,()=>{
    console.log("server started");
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/",(req,res)=>{
    res.send(`<h1>djjjjjjjhjhbj</h1>`);
})