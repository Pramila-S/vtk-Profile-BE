const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mailRoute = require("./Routes/mail")
dotenv.config();

//MiddleWare
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (request, response) => {
  response.send("Server is running");
});

app.use("/api/mail",mailRoute)

//Listen Port
app.listen(process.env.PORT || 3001, () => {
  console.log("Backend Server is running!!");
});
