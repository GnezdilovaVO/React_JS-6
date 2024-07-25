import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/productsSlise";
export const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(false);
  const dispatch = useDispatch();

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(name, description, price, available));
    setName("");
    setDescription("");
    setPrice(0);
    setAvailable(false);
  };
  return (
    <form onSubmit={handleAddProduct}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <label>
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
        Available
      </label>
      <button type="submit">Add</button>
    </form>
  );
};
