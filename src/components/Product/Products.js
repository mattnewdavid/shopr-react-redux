import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import ProductModal from "./ProductModal";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled4382.jpg",
    price: 25,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://www.notebookcheck.net/fileadmin/_processed_/3/6/csm_Lenovo_Yoga_9i_Gen_7_Front_Facing_Windows_11_d915a18c77.png",
    price: 25,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL: "https://www.notebookcheck.net/uploads/tx_nbc2/7310.png",
    price: 25,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://www.notebookcheck.net/uploads/tx_nbc2/HPPavilion13-b__1__03.jpg",
    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://static.acer.com/up/Resource/Acer/Laptops/Aspire_3/rev-jan-2021/20210311/main_640.jpg",
    price: 25,
  },
];
const Products = () => {
  const showProduct = useSelector((state) => state.product.showProduct);
  return (
    <div>
      <h4>Laptop | Top Deals</h4>

      <div className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <Product
            key={index}
            id={product.id}
            name={product.name}
            imgURL={product.imgURL}
            price={product.price}
          />
        ))}
      </div>
      {showProduct && <ProductModal />}
    </div>
  );
};

export default Products;
