import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();
app.use(express.json());

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

app.get("/api/v1/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Service is up and running",
    database: "MongoDB is connected"
  });
});

app.use("/api/v1", router);
//Global Error Handler
app.use(globalErrorHandler)
//Not Found
app.use((req, res, next) => {
  res.status(404).json({ error: "Resource not found" });
});

export default app;
