import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Add = () => {


    const [rece,setRece] = useState({
      "recepie_Name":"",
      "Cook_Time":null,
      "Prep_Time":null,
      "Serves":null,
      "Categorie":"",
      "recepie_Description":"",
      "recepie_Ingredients":"",
      "recepie_Image":""
    })
  
    const handleChange = (e) => {
      const value = e.target.value;
      setRece({...rece,[e.target.name]: value});
      console.log(rece)
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
            "recepie_Name": rece.recepie_Name,
            "Cook_Time": rece.Cook_Time,
            "Prep_Time": rece.Preparation_Time,
            "Serves": rece.Serves,
            "Categorie": rece.Categorie,
            "recepie_Description": rece.recepie_Description,
            "recepie_Ingredients": rece.recepie_Ingredients,
            "recepie_Image": rece.recepie_Image,
      };
      axios.post("http://localhost:4000", data).then((res) => {
        console.log(res.status, res.data);
      });
    }




  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" name="recepie_Name" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" name="Cook_Time" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" name="Prep_Time" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" name="Serves" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Categorie" name="Categorie" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" name="recepie_Description" onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" name="recepie_Ingredients" onChange={handleChange}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" name="recepie_Image" onChange={handleChange}/>
      </div>
      <button className="create-recipe-btn" onClick={handleSubmit}>Create Recipe</button>
    </div>
  );
};
export default Add;
