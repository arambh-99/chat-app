import dotenv from "dotenv"
dotenv.config({ path: '../.env' }); 

import express from "express";
import cors from "cors"
import { connectDB } from "./lib/db.js";

import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";


const port=process.env.PORT;

const app = express();

app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);


app.listen(port, () => {
  console.log("server is running on port: "+ port);
  connectDB();
});
