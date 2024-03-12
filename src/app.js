import express from "express";
import morgan from "morgan";
import cors from "cors";
import fileUpload from "express-fileupload";

// ROUTES
import indexRoutes from "./routes/index.routes.js"



const app = express();

app.use(
  cors({
    origin: "",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

// routes

app.use(indexRoutes)

export default app;