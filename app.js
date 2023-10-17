import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import mongoose from "mongoose";
import _ from "lodash";

const app = express();
let port = process.env.PORT;
const API_URL = "http://localhost:3000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



if (port==null || port =="")
{
  port = 3000;
}
app.listen(port, function () {
  console.log(`Backend server is running on ${port}`);
});
