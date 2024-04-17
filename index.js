import express from 'express'
import cors from 'cors';
const app = express();

 import productRouter from "./routes/productRoute.js"

app.use(express.json());
app.use(cors());

// app.use("/users", userRouter);
 app.use("/products", productRouter)
 

export default app;