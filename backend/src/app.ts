import express from "express";
import { config } from "dotenv";
config();
const app = express();

// middleware
app.use(express.json()); // MC: Need this to tell POST command that requests are in JSON format.

export default app;
