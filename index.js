
import express from 'express';
import cors from 'cors';
import userRoute from './Routes/userRoute.js';
// import prodRouter from "./routes/productRoute.js"
import router from "./Routes/vendorRouter.js"

const app = express();
import userRouter from "./Routes/userRoute.js"
// import prodRouter from "./routes/productRoute.js"

 import productRouter from "./routes/productRoute.js"

app.use(express.json());
app.use(cors());

app.use("/vendors", router);
app.use("/users", userRoute);
 app.use("/products", productRouter)
 

export default app;