import express from 'express';
import cors from 'cors';
import router from "./Routes/vendorRouter.js"

const app = express();



app.use(express.json());
app.use(cors());

app.use("/vendors", router);

export default app;