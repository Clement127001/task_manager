require("./db/connect");
const express = require("express");
const app = express();
const tasksRoute = require("./routes/tasks");

//setting up the middleware
app.use(express.json());

//The app is going to have the following routes

//app.get("/api/v1/tasks")        -> to get all the taks
//app.post("/api/v1/taks")        -> to create the new tasks
//app.get("/api/v1/tasks/:id")    -> to get the details about the particular task
//app.put("/api/v1/tasks/:id")    -> to update the particular task
//app.delete("/api/v1/tasks/:id") -> to delete the particular task

app.get("/hello", (req, res) => {
  res
    .status(200)
    .send(
      "<h3>Welcome to the first application: <strong>Task Manager</strong></h3>"
    );
});

app.use("/api/v1/tasks", tasksRoute);

const port = 3000;
app.listen(port, console.log(`The server is listening on port : ${port}`));
