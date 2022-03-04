const express = require("express");

const api = express();

api.get("/hello", (req, res) => {
  const name = req.query.name;
  /* res.set("Content-type", "text/html"); */
  res.set("Content-type", "application/json");
  /*  res.status(200).json({ hello: name }); */
  return res.send(`<h1>Hello, ${name}!</h1>`);
});

api.post("/hello", jasonBodyParser, (req, res) => {
  const { name, surname } = req.body;

  res.json([name, surname]);
});

api.listen(8080, () => console.log("server started"));
