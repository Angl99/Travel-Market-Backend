import express from 'express'
import cors from 'cors';
import userRoute from './Routes/userRoute.js';
import prodRouter from "./routes/productRoute.js"

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/products", prodRouter)

export default app;