const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require("./Routes/userRoute.js");

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

module.exports = app;