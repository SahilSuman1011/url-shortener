import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";
dotenv.config();
connectDb();

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", shortUrl);

app.listen(port, () => {
    console.log(`server started successfull on port : ${port}`);
});