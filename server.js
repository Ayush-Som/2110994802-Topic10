const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("Hello world");
});
