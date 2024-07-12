// import React from 'react';
import Trousers from '../Trousers.json';
import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const GirlsTrousersCard = ({ handleAddToCart, ProductShow}) => {
  return (
    <div className="container card-first-box my-4">
      <div className="row gx-2 gy-1">
        {
        Trousers.map((item, i) => {
            const { name, image, price } = item;
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 top-card-box" key={i}>
                <div className="p-3 ">
                  <div className="card" style={{ width: "100%" }}>
                    <div className="card-img">
                      <img
                        src={image}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center icon-box">
                    <Tippy content="Add To Cart" placement="right">
                      <i
                        className="fa-solid fa-cart-shopping cart-icon"
                        onClick={() => handleAddToCart(item)}
                      />
                    </Tippy>
                    <Tippy content="View" placement="right">
                      <NavLink to={`/Product/${item.id}`} onClick={() => ProductShow(item)}>
                        <i className="fa-regular fa-eye view-icon" />
                      </NavLink>
                    </Tippy>
                    <Tippy content="Wishlist" placement="right">
                      <i className="fa-regular fa-heart heart-icon" />
                    </Tippy>
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">{name}</h6>
                      <div className="rating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                      <div className="price">
                        <p>${price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default GirlsTrousersCard;
