import express from "express";

import { bootstrap } from "./src/index.routes.js";
const app = express();

//connect with config.env
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
//application
let num = 0;

bootstrap(app, express);
