import express from "express";
import connectDB from "./connectionDB.js";
import dotenv from "dotenv";
import userRouter from "./routers/UserRouter.js";
import productRouter from "./routers/productRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get("/", (req, res) => res.send("server is ready"));
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
