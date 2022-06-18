const express = require("express");
const app = express()
let PORT = process.env.PORT || 3000

app.use(express.static("public"))
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

  app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`);
  });