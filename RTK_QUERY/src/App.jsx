import React from "react";
// import AllProducts from "./components/AllProducts.jsx";
// import GetByIdProduct from "./components/GetByIdProduct.jsx";
// import AddNewProduct from "./components/AddNewProduct.jsx";
// import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct.jsx";
const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <GetByIdProduct /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct productId={2} /> */}
      <DeleteProduct productId={2} />
    </div>
  );
};

export default App;
