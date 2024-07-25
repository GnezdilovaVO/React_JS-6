import "./App.css";
import { AddProduct } from "./components/AddProduct";
import { Products } from "./components/Products";
import { EditProduct } from "./components/EditProduct";

function App() {
  return (
    <div className="App">
      <h3>Products:</h3>
      <h3>Add new:</h3>
      <AddProduct />
      <Products />
      <EditProduct />
    </div>
  );
}

export default App;
