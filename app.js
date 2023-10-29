const express = require("express");
const app = express();
const tasksRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//setting up the middleware
app.use(express.json());
app.use(express.static("./public"));

//The app is going to have the following routes

//app.get("/api/v1/tasks")        -> to get all the taks
//app.post("/api/v1/taks")        -> to create the new tasks
//app.get("/api/v1/tasks/:id")    -> to get the details about the particular task
//app.put("/api/v1/tasks/:id")    -> to update the particular task
//app.delete("/api/v1/tasks/:id") -> to delete the particular task

app.use("/api/v1/tasks", tasksRoute);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("The database is conneted successfully");
    app.listen(port, console.log(`The server is listening on port : ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
