import React from "react";
import "../index.scss";
import useAxios from "axios-hooks";
// import axios from "axios";








const AllRecepies = (props) => {

  const [{ data, loading, error }] = useAxios("http://localhost:4000");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  if (props.search===""){
    return data.map(recepie=>{
      return (
      <div key={recepie.recepie_Id} className="card-container">
      
        <div className="card">
          <button className="delete">delete</button>
          <button className="update">update </button>

          <>
            <div className="header">
              <img
                className="img"
                src={recepie.recepie_Image}
                alt="food"
                />
            </div>
            <div className="text">
              <h1 className="food">{recepie.recepie_Name}</h1>
              <i> {recepie.Cook_Time + recepie.Prep_Time} Mins</i> <br />
              <i>Serves: {recepie.Serves}</i>
            </div>
          </>
        </div>
      </div>
    );
  })
} else {
  return data.filter(recepie=>{
    return (
    <div key={recepie.recepie_Id} className="card-container">
    
      <div className="card">
        <button className="delete">delete</button>
        <button className="update">update </button>

        <>
          <div className="header">
            <img
              className="img"
              src={recepie.recepie_Image}
              alt="food"
              />
          </div>
          <div className="text">
            <h1 className="food">{recepie.recepie_Name.includes(props.search)}</h1>
            <i> {recepie.Cook_Time + recepie.Prep_Time} Mins</i> <br />
            <i>Serves: {recepie.Serves}</i>
          </div>
        </>
      </div>
    </div>
  );
})
}

};

export default AllRecepies;
