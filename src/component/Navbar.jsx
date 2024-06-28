import React from 'react'
import { useNavigate, Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from "react"


const Navbar = ({ addcart, count, QuntityHandler, handleDelete }) => {
  const navigate = useNavigate()

  const [subtotal, SetSubtotal] = useState(0);


  useEffect(() => {
    HandleSubTotal()
  })

  // subtotal  calculation function

  let sum = 0;
  const HandleSubTotal = () => {

    addcart.forEach((item) => {
      sum += item.qty * item.price;  // Assuming the quantity property is 'qty'
    });

    SetSubtotal(sum);  // Make sure to handle the case where 'sum' is NaN
  };

  // total  price of each product in cart list
  const TotalAmount = (item) => {
    return item.price * item.qty
  }
  return (
    <>
      <div className="container py-3  outer">
        <div className=" logo" onClick={() => navigate('/')}>
          <img
            src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png"
            alt=""
          />
        </div>
        <div className="side-nav ">
          <div className="side-nav-links">
            <ul>
              <li>Home</li>
              <li>Aobut</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="  icons p-2">
            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
            <Link to="/mycart" className='cartlink'>   <i className="fa-regular fa-heart mx-2" /></Link>
            <div className=' position-relative cartbtn' data-bs-toggle="modal" data-bs-target="#exampleModal"> <i className="fa-solid fa-cart-shopping " />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {count}
              </span>
            </div>

            <i className="fa-solid fa-bars d-lg-none  d-md-none   manu-icon ms-3 me-1 "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            />
          </div>
        </div>
      </div>
      {/* ================model============ */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title " id="exampleModalLabel">

                Shopping Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">



              {
                count == 0 ? <div className="cart-empty">
                  <i className="fa fa-shopping-cart"></i>
                  <p>Your Cart Is empty</p>
                </div> :
                  <div className="container-fluid ">



                    {
                      addcart?.map((data, index) => {
                        const { image, price, qty, name } = data;

                        return (
                          <>
                            <div className="row gx-1 border-bottom mycart-row" key={index}>
                              <div className="col-lg-3 col-md-3 col-sm-3  col-3 ">
                                <img
                                  src={image}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6  col-6  mycart-middl-box">
                                <div className="mycart-pro-name">
                                  <span>{name}</span>
                                  <p>${price}</p>
                                </div>
                                <div className="prdct-qty-container">
                                  <button className="prdct-qty-btn mycart-qty-btn" type="button" onClick={() => { QuntityHandler(data, -1) }} >
                                    <i className="fa fa-minus"></i>
                                  </button>
                                  <input type="text" name="qty" value={qty} className="qty-input-box mycart-qty-input-btn" disabled />
                                  <button className="prdct-qty-btn mycart-qty-btn" type="button" onClick={() => { QuntityHandler(data, 1) }} >
                                    <i className="fa fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3  col-sm-3  col-3   mycart-middl-box">
                                <div className='my-cart-delete-icon float-end'>
                                  <span className='float-end mycart-delete' onClick={() => handleDelete(index)}><i class="fa-solid fa-trash-can"></i></span>
                                </div>
                                <div className='my-cart-total-price'>
                                  <span className='float-end'>${(TotalAmount(data).toFixed(0))}</span>

                                </div>
                              </div>
                            </div>



                          </>
                        )
                      })
                    }



                    <div className='row subtotal-con pt-2'>
                      <div className='col-6'>
                        <h6>Subtotal</h6>
                      </div>
                      <div className='col-6'> <span className='float-end ' style={{color:"#df4141"}}>${subtotal.toFixed(0)}</span> </div>

                    </div>

                  </div>
              }

            </div>
            <div className="modal-footer">
              <span className='float-end'>item: <span className='itemcart'>{count}</span> </span>

              {/* <button type="button" className="btn btn-primary">
          Save changes
        </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* end of side nav bar */}
      {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel" />
          <button
            type="button"
            className="btn-close text-reset btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <NavLink to='/' className="nav-link px-3 ">
            Home
          </NavLink>
          <NavLink to='/about' className="nav-link px-3 ">
            About
          </NavLink>
          <NavLink to='/shop' className="nav-link px-3 ">
            Shop
          </NavLink>
          <NavLink to='/productDetail' className="nav-link px-3 ">
            Contact
          </NavLink>
        </div>
      </div>


    </>


  )
}

export default Navbar
