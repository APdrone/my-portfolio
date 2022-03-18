import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";
// import githubIconDark from "../../img/github_icon_dark.png";
// import githubIconLight from "../../img/github_icon_light.png";
import githubIcon from "../../img/github.png";

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
          Immerse yourself in this amazing portfolio projects .Project image
          click navigates to the demo and link to github repo
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <div className="pl-container" key={item.id}>
            <Product
              key={item.id}
              // img="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              img={item.img}
              link={item.link}
            />
            <div className="pl-details">
              <a href={item.repoURL} target="_blank" rel="noreferrer">
                <img
                  src={githubIcon}
                  alt="github icon"
                  width="24px"
                  height="24px"
                />
              </a>
              {item.stack.map((i, ind) => (
                <span key={ind}>
                  <span className="pl-stack-icon">{i}</span>
                  {/* <span className="pl-stack-icon">NodeJS</span>
              <span className="pl-stack-icon">Styled components</span> */}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
