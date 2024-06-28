import React from 'react'
import { useState } from 'react'

const ProductDetailePage = ({ ProductD, handleAddToCart, QuntityHandler }) => {

  const [mainImage, setMainImage] = useState(null)
  return (


    ProductD?.map((x, i) => {
      const { qty, price, name, img1, img2, img3, img4 } = x;
      const images= [img1,img2,img3,img4]
     return(
      <div className="container modl " key={i}>
      <div className="row  gy-3 mb-4 ">
        <div className=" col-md-6 col-lg-4 cardimgs">
          <div className="  left-cart-det ">
            <img
              src={mainImage || img1}
              className="card-img-top main-img "
              alt="..."
              id="mainimg"
            />
          </div>
          <div className="row gx-2 mt-2 modlsho">
          {
            images.map((image,index)=>{
              return(
                <div className="col-3 " key={index}>
                <img
                  src={image}
                  // className="card-img-top  smig"
                  className={`card-img-top smig ${image === mainImage ? 'active-image' : ''}`}
                  alt="..."
                  onClick={()=>setMainImage(image)}
                  // style={{border:"2px solid #df4141"}}
                />
              </div>
              )
            })
          }
            {/* <div className="col-3 ">
              <img
                src={img2}
                className="card-img-top  smig "
                alt="..."
              />
            </div>
            <div className="col-3 ">
              <img
                src={img3}
                className="card-img-top  smig "
                alt="..."
              />
            </div>
            <div className="col-3 ">
              <img
                src={img4}
                className="card-img-top smig "
                alt="..."
              />
            </div> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className=" right-cart-det">
            <h5>{name}</h5>
            <div className="reviews-counter">
              <div className="rate">
                <input
                  type="radio"
                  id="star5"
                  name="rate"
                  defaultValue={5}
                  defaultChecked=""
                />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input
                  type="radio"
                  id="star4"
                  name="rate"
                  defaultValue={4}
                  defaultChecked=""
                />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input
                  type="radio"
                  id="star3"
                  name="rate"
                  defaultValue={3}
                  defaultChecked=""
                />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
              <span>Reviews</span>
            </div>
            <p className="text-muted mt-2">
              $<span className="text-muted">{price}</span>
            </p>
            <div className="prdct-qty-container">
              <button className="prdct-qty-btn" type="button" onClick={() => { QuntityHandler(x, -1) }}>
                <i className="fa fa-minus"></i>
              </button>
              <input type="text" name="qty" value={qty} className="qty-input-box" disabled />
              <button className="prdct-qty-btn" type="button" onClick={() => { QuntityHandler(x, 1) }}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
            {/* Quantity{" "}
        <input type="number" name="" defaultValue={1} className="qty" /> */}
            <button className="add-to-card addbtn" onClick={() => handleAddToCart(x)}> Add to Cart</button>
            <h6 className="pro-info pb-2 pt-3">Product Details</h6>
            <span className="info text-muted">
              I'm a product detail. I'm a great place to add more information about
              your product such as sizing, material, care and cleaning instructions.
              This is also a great space to write what makes this product special
              and how your customers can benefit from this item. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Facere assumenda provident
              adipisci praesentium blanditiis repellat officiis eos obcaecati natus
              alias error omnis, ducimus excepturi numquam consequuntur, architecto
              deserunt aliquid at?
            </span>
          </div>
        </div>
      </div>
    </div>
     )
    })




  )
}

export default ProductDetailePage
