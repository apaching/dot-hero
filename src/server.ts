import cors from "cors";
import express from "express";
import { router } from "./routes/HeroRoutes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/hero", router);

app.get("/", (req, res) => {
  res.send("API working.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app