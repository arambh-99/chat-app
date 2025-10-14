import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";

import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config({ path: '../.env' }); 


const port=process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(port, () => {
  console.log("server is running on port: "+ port);
  connectDB();
});
