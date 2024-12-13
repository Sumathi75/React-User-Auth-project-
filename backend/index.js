import express from "express";
import dotenv from 'dotenv';
import cors from "cors"; 
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json()); //allow us to parse incoming requests:req.body
app.use(cookieParser()); //allow us to parse incoming cookies
app.use("/api/auth",authRoutes)

app.listen(PORT, ()=> {
    connectDB();
    console.log("Server is running on port:", PORT);
    
})

