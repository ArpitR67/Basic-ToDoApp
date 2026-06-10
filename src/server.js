import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authroutes from "./routes/authroutes.js";
import todoroutes from "./routes/todoroutes.js";
import authMiddleware from "./middleware/authmiddleware.js";

const app = express();
const PORT = process.env.PORT || 6767;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.use("/auth", authroutes);
app.use("/todos", authMiddleware, todoroutes);

app.listen(PORT, () => {
  console.log(`"server has  started on port : ${PORT}"`);
});
