import express from 'express'
import cors from 'cors';
const app = express();
import userRouter from "./routes/userRoute.js"
// import prodRouter from "./routes/productRoute.js"
const vendorRouter = require("./Routes/vendorRouter.js")

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/vendors")

export default app;