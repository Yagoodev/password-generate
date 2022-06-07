const express = require("express");
const { password } = require("./index");

const app = express();

const PORT = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/password", (req, res) => {
  res.json({ password: password });
});

app.listen(PORT);