const express = require("express");
const router = express.Router();


var connection = require('../database-mysql/index')

router.get('/', (req, res, next) =>{
  connection.query('SELECT * FROM recepie', (err, data) =>{
    try {
        res.json(data)
    } catch (err) {
        res.json(err)
    }
  })
})


module.exports = router;
