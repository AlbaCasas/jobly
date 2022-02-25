const express = require("express");

const api = express();

api.get("/hello", (req, res) => {
  const name = req.query.name;

  res.set("Content-type", "application/json");

  res.status(200).json({ hello: name });
});

api.listen(8080, () => console.log("server started"));
