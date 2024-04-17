import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import router from "./routes/vendorRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/vendors", router);
app.use("/users", userRoute);
app.use("/products", productRouter);

export default app;
