import React from "react";
import { Style } from "./Form.css";
import swal from "sweetalert";
import useStore from "../../store";


export const Form = () => {

  const store = useStore()


  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      store.product.title === "" ||
      store.product.description === "" ||
      store.product.price === ""
      
    ) {
      swal("Error", "Please fill all the fields", "error");
    }else if (store.product.price === "0"){
      swal("Error", "Price cannot be 0", "error");
    }
     else {
      event.preventDefault();
      store.addToProducts({
        title: store.product.title,
        description: store.product.description,
        price: Number(store.product.price),
      });
      store.clearForm()
      swal("Success", "Product added successfully", "success");
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    const { name, value } = target;

    const newValue = {...store.product,
      [name]: value,}

    store.handleFormChange(newValue)
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
        value={store.product.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        value={store.product.description}
        onChange={handleChange}
      />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        value={store.product.price}
        onChange={handleChange}
      />
      <button type="submit">{store.editMode ? 'Update' : 'Save'}</button>
    </Style>
  );
};
