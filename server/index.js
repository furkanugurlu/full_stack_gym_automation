const express = require("express");

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("SPOR SALONU OTAMASYONU!");
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT}'unda çalıştı`);
});
