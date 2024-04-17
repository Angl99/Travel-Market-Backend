import express from 'express'
import cors from 'cors';
const app = express();
import userRouter from "./routes/userRoute.js"
// import prodRouter from "./routes/productRoute.js"

app.use(express.json());
app.use(cors());

// app.use("/users", userRouter);
// app.use("/products", prodRouter)

export default app;