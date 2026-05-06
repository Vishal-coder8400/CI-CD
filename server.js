const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Broken App 😵");
});

const PORT = process.env.PORT || 3000;

// ❌ BROKEN VARIABLE
app.listen(PORTTT, () => {
  console.log(`Server running`);
});