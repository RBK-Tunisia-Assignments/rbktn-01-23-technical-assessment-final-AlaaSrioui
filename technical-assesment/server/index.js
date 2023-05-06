const express = require("express");
const app = express();
const PORT = 4000;
const connection = require('./database-mysql/index')
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    connection.query('SELECT * FROM recepie', (err, data) =>{
    try {
        res.json(data)
    } catch (err) {
        res.json(err)
    }
  })
});

app.post('/:users_user_Id', (req,res)=>{

  const name = req.body.recepie_Name;
  const cookTime = req.body.Cook_Time;
  const prepTime = req.body.Prep_Time;
  const serves = req.body.Serves;
  const categorie = req.body.categorie;
  const desc = req.body.recepie_Description;
  const ingred = req.body.recepie_Ingredients;
  const img = req.body.recepie_Image;
  const userID = req.params;

  connection.query("INSERT INTO recepie (`recepie_Name`,`Cook_Time`,`Prep_Time`,`Serves`,`categorie`,`recepie_Description`,`recepie_Ingredients`,`recepie_Image`,`users_user_Id`) VALUES (?,?,?,?,?,?,?,?,?) ",[name,cookTime,prepTime,serves,categorie,desc,ingred,img,userID], (err,rows,fields)=>{
    try {
      res.json("data pushed")
  } catch (err) {
      res.json(err)
  }
  });
  
})

app.delete('/:recepie_Id  ', (req, res, next) =>{
  connection.query(`DELETE FROM recepie WHERE recepie_Id = ${req.params}`, (err, data) =>{
    try {
        res.json(data)
    } catch (err) {
        res.json(err)
    }
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
