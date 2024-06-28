import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid footer">
    <div className="row gx-1 gy-2   footer-row">
      <div className="col-lg-3 col-md-6  ">
        <div className="">
          <div className=" footer-logo">
            <img
              src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_light.png"
              alt=""
            />
          </div>
          <div className="footer-text">
            <p className="pt-4">
              If you are going to use of Lorem Ipsum need to be sure there isn't
              hidden of text
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-2  col-md-3  footer-links-col">
        <div className="footer-outer-link-box ">
          <h6 className="">Useful Links</h6>
          <div className="footer-links">
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Location</li>
              <li>Affiliates</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-2  col-md-3  footer-links-col">
        <div className="footer-outer-link-box">
          <h6>Category</h6>
          <div className="footer-links">
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Location</li>
              <li>Affiliates</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-2  col-md-6  footer-links-col">
        <div className="footer-outer-link-box">
          <h6>My Account</h6>
          <div className="footer-links">
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Location</li>
              <li>Affiliates</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6  footer-links-col">
        <div className="  footer-outer-link-box">
          <h6>Contact Info</h6>
          <div className="footer-links">
            <p>
              {" "}
              123 Street, Old Trafford,
              <br /> New South London , UK
            </p>
            <p> info@sitename.com</p>
            <p> + 457 789 789 65</p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="footer-bottom-copy-rite-box
    
     "
    >
      <hr />
      <p className="text-center pb-4"> Copy @ by pooja</p>
    </div>
  </div>
  
  )
}

export default Footer
