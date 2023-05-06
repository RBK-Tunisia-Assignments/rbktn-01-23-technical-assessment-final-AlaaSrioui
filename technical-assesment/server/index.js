const express = require("express");
const app = express();
const PORT = 4000;
const connection = require('./database-mysql/index')
const cors = require("cors")

app.use(cors())

app.get("/",(req,res)=>{
    const db=connection.query('SELECT * FROM recepie', (err, data) =>{
    try {
        res.json(data)
    } catch (err) {
        res.json(err)
    }
  })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
