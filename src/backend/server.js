const express = require("express");
const app = express();
const port = 3000; //your port

//add websites
app.use(express.static("../frontend/root"));
app.use(express.static("../frontend/root/example"));
app.use(express.static("../frontend/root/example2"));

//start server
app.listen(port, () => {
  console.log(`Codeshit bingo listening at http://localhost:${port}`);
});
