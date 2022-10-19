import React from "react";
import { Style } from "./Form.css";
import { IItem } from "../../interfaces";
import swal from "sweetalert";
import useStore from "../../store";


export const Form = () => {
  const [values, setValues] = React.useState({
    title: "",
    description: "",
    price: "",
  });
  const store = useStore()
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      values.title === "" ||
      values.description === "" ||
      values.price === ""
      
    ) {
      swal("Error", "Please fill all the fields", "error");
    }else if (values.price === "0"){
      swal("Error", "Price cannot be 0", "error");
    }
     else {
      event.preventDefault();
      store.addToProducts({
        title: values.title,
        description: values.description,
        price: Number(values.price),
      });
      setValues({
        title: "",
        description: "",
        price: "",
      });
      swal("Success", "Product added successfully", "success");
    }
  };

  function handleChange(evt: { target: any }) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }
  return (
    <Style
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <label htmlFor="title">Product Name</label>
      <input
        id="title"
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        value={values.description}
        onChange={handleChange}
      />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        value={values.price}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </Style>
  );
};
