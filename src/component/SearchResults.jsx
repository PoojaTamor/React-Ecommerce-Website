

import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
import notsearch from './../assets/images/notsearch.png'

const SearchResults = ({ items, handleAddToCart, ProductShow }) => {
  return (
    <div className="container card-first-box my-4">
      <div className="row gx-2 gy-1">

{
    items.length === 0 ?<div className="cart-empty search-empty-card ">

       <img src={notsearch} alt="" className='img-fluid' />
       <h1 className='display-6 bold'>No Result Found</h1>
     
      <Link to='/'>
      <button type="button" className="btn btn-danger curser-pointer mt-3">
                     SERACH AGAIN
                </button>
      </Link>
        {/* <i className="fa fa-search"></i>
    <p>No results found</p> */}
  </div>: items.map((item, i) => {
          const { name, image, price } = item;
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 top-card-box" key={i}>
              <div className="p-3">
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-img">
                    <img src={image} className="card-img-top" alt="..." />
                  </div>
                  <div className="d-flex align-items-center justify-content-center icon-box">
                    <i className="fa-solid fa-cart-shopping cart-icon" onClick={() => handleAddToCart(item)} />
                    <NavLink to={`/Product/${item.id}`} onClick={() => ProductShow(item)}>
                      <i className="fa-regular fa-eye view-icon" />
                    </NavLink>
                    <i className="fa-regular fa-heart heart-icon" />
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
          );
        })}


       
      </div>
    </div>
  );
};

export default SearchResults;
