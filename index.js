import express from 'express';
import cors from 'cors';
import vendorRouter from "./Routes/vendorRouter.js"

const app = express();
import userRouter from "./routes/userRoute.js"
// import prodRouter from "./routes/productRoute.js"
const vendorRouter = require("./Routes/vendorRouter.js")

app.use(express.json());
app.use(cors());

app.use("/vendors", vendorRouter);

export default app;