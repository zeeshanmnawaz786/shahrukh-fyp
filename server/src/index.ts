import { Request, Response } from "express";
import auth from "./routes/auth";
import societyRegister from "./routes/societyRegister";
import { config } from "dotenv";
import mongoose from "mongoose";
import express from "express";

config();
const app = express();
app.use(express.json());

app.use("/api", auth);
app.use("/api", societyRegister);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({
    massege: "⚡️[server]: Server is running",
  });
});

const PORT = process.env.PORT || 8000;
const MONGO_URL = String(process.env.MONGO_URL);
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
    );
  })
  .catch((error: any) => console.log(`${error} did not connect`));
