import "dotenv/config";

import compression from "compression";
import cors from "cors";

import express from "express";
import passport from "passport";

import initPassport from "../config/passport";
import routes from "../routes/users";
import { connect } from "./database";

const server = express();
server.use(compression());

initPassport(passport);
server.use(passport.initialize());

if (process.env.NODE_ENV !== "test") {
  connect();
}

server.use(cors());
server.use(express.json());

server.use("/api/users", routes);

export default server;
