

import React from 'react';
import Product from '../Product.json';


const ProductCard = () => {
  console.log(Product);
  return (
    <>
      {Product.map((item, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img src={item.image} className="card-img-top" alt="..." />
          <img src={item.img1} className="card-img-top" alt="..." />
          <img src={item.img2} className="card-img-top" alt="..." />
          <img src={item.img3} className="card-img-top" alt="..." />
          <img src={item.img4} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
