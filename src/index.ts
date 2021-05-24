import express, { Express, Request, Response } from 'express';
import cors from "cors";
import dotenv from "dotenv";
import routes from "./api";
import connectDB from "./database"

dotenv.config();
const app: Express = express();
const PORT = process.env.PORT || 4000;
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', routes());
app.get('/', (req:Request, res: Response) => {
    res.send('REST Fullstack Challenge 20201209 Running')
})


app.listen(PORT, () => {
    console.log('The applications is listening on port ' + PORT);
})