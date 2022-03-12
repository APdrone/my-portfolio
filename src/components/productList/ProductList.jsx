import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          {/* Create & inspire. It's Lama */}
          Secret closet
        </h1>
        <p className="pl-desc">
          {/* Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside. */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem
          tempore, itaque quisquam maxime fugit dolore blanditiis ducimus saepe
          expedita.
        </p>
      </div>
      <div className="pl-list">
        {/* {products.map((item) => (
        <Product key={item.id} img={item.img} link={item.link} />
      ))} */}
        {products.map((item) => (
          <Product
            key={item.id}
            img="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
