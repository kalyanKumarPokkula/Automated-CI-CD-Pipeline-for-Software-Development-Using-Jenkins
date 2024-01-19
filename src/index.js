import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(
    "Automated Continuous Integration/Continuous Deployment (CI/CD) Pipeline for Software Development and Deployment Using jenkins and Docker  "
  );
});

function Server() {
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
}

Server();
