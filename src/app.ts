import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { AuthRouter } from "./app/routes/authRoute";
import { router } from "./app/routes";

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes
app.use("/api/auth", AuthRouter);
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Hello World!");
  } catch (error) {
    next(error);
  }
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
