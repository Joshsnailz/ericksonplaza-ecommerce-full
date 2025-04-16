import React, { useState } from "react";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    type: "",
    price: "",
    category: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, product]);
    setProduct({ name: "", type: "", price: "", category: "", image: "" });
  };

  return (
    <div className="seller-dashboard">
      <h2>Seller Dashboard</h2>
      <div className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Product Type"
          value={product.type}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={product.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Product Category"
          value={product.category}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="product-list">
        <h3>Products</h3>
        <ul>
          {products.map((prod, index) => (
            <li key={index}>
              {prod.name} - {prod.type} - ${prod.price} - {prod.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SellerDashboard;