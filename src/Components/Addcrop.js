import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
// import { SideNav } from "./SideNav";
import './AddCrop.css'

const AddCrop = () => {
  let [cropData, setcropData] = useState({
    name: "",
    category: "",
    price: "",
    weight: "",
  });

  var handleChange = (event) => {
    setcropData({ ...cropData, [event.target.name]: event.target.value });
  };

  var handleSubmit = async (event) => {
    event.preventDefault();

    console.log(cropData);
  };
  return (
    <>
    <div className="row">
    {/* <div className="col-lg-2">
        <SideNav></SideNav>
    </div> */}
      <div className="col-lg-10 bgp1">
        <h1 className="text-center fs-1 bold text-white">Add Crop</h1>
        <Form onSubmit={handleSubmit}>
          <label  for="name">Name:</label>
          <br></br>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter Crop Name"
            onChange={handleChange}
          ></input>
          <br></br>
          <br></br>
          <label for="category">Category:</label>
          <br></br>
          <input
            id="category"
            type="text"
            name="category"
            placeholder="Enter Crop category"
            onChange={handleChange}
          ></input>
          <br></br>
          <br></br>
          <label for="price">Price:</label>
          <br></br>
          <input
            id="price"
            type="text"
            name="price"
            placeholder="Enter Crop price per Kg"
            onChange={handleChange}
          ></input>
          <br></br>
          <br></br>
          <label className="label" for="weight">Weight:</label>
          <br></br>
          <input
            id="weight"
            type="number"
            name="weight"
            placeholder="Enter Crop weight in Kg"
            onChange={handleChange}
          ></input>
          <br></br>
          <br></br>
          <button className="btn btn-primary" type="submit">
            Add Crop
          </button>
        </Form>
      </div>
      </div>
    </>
  );
};

export default AddCrop;