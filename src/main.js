const express = require("express");
const { password } = require("./index");

const app = express();

const PORT = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ password: password });
});

app.listen(PORT);