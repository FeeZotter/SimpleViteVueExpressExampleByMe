const express = require("express");
const app = express();
const port = 3000; //your port

//add websites to all sites
app.use(express.static("../frontend/root"));

//start server with node .\server.js
app.listen(port, () => {
  console.log(`Codeshit bingo listening at http://localhost:${port}`);
});
