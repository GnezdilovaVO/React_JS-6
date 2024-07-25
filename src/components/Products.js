import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProduct } from "./EditProduct";
import { deleteProduct, toggleAvailable } from "../reducers/productsSlise";

export const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [editProductId, setEditProductId] = useState(null);

  const handleEditBtn = (productId) => {
    setEditProductId(productId);
  };
  const handleCloseBtn = () => {
    setEditProductId(null);
  };
  return (
    <div>
      {editProductId && (
        <EditProduct productId={editProductId} onClose={handleCloseBtn} />
      )}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              {product.name} - {product.description} - {product.price} - {""}
              {product.available ? "Available" : "Not available"}
            </div>
            <div>
              <button onClick={() => dispatch(toggleAvailable(product.id))}>
                Available
              </button>
              <button onClick={() => handleEditBtn(product.id)}>Edit</button>
              <button onClick={() => dispatch(deleteProduct(product.id))}>
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
