import express from "express";
import userRouter from "./routes/routes";

const app = express();

app.use(express.json());

app.use(userRouter);

app.listen(3000);
