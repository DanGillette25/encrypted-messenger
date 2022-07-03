const router = require("express").Router();
const fs = require("fs");
const bodyParser = require('body-parser')
const db = require("../db/db");

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());

router.post("/msg", (req, res) => {

  fs.readFile("./db/db.json", "utf8", (error, data) => {

    if (error) {
      return console.log(error);
    }

    let tempArray = JSON.parse(data)

    let newNote = req.body;

    console.log(newNote)

    // newNote.id = newNote.title.replace(/\s+/g, '').toLowerCase();

    db.push(newNote)
  
    tempArray.push(newNote);

    newArray = JSON.stringify(tempArray)

    fs.writeFile ("./db/db.json", newArray, "utf8", (err) => {
      if (err){
        throw err;
      }
    })

    res.json(false);
  
  })
  
});

module.exports = router;