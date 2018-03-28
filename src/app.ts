import * as express from "express";

const app = express();

app.get("/health", (req, res) =>
  res.status(200).json({
    message: "All is superme well",
  }),
);

export { app };