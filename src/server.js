import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import * as dotenv from "dotenv";
import connectDB from "./config/connectDB";

dotenv.config();

let app = express();
let port = process.env.PORT || 8000;

// Config app
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

connectDB();

viewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
