
import React, { useState } from 'react';

const Footer = () => {
  const [enquiry, setEnquiry] = useState(false);

  const handleIcons = () => {
    setEnquiry(!enquiry);
  };

  return (
    <>
      <div className="container-fluid footer">
        <div className="row gx-1 gy-2 footer-row">
          <div className="col-lg-3 col-md-6">
            <div className="">
              <div className="footer-logo">
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
          <div className="col-lg-2 col-md-3 footer-links-col">
            <div className="footer-outer-link-box">
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
          <div className="col-lg-2 col-md-3 footer-links-col">
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
          <div className="col-lg-2 col-md-6 footer-links-col">
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
          <div className="col-lg-3 col-md-6 footer-links-col">
            <div className="footer-outer-link-box">
              <h6>Contact Info</h6>
              <div className="footer-links">
                <p>
                  {" "}
                  123 Street, Old Trafford,
                  <br /> New South London, UK
                </p>
                <p> info@sitename.com</p>
                <p> + 457 789 789 65</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-copy-rite-box">
          <hr />
          <p className="text-center pb-4"> Developed @ by Pooja</p>
        </div>
      </div>
      {/* ===========================bottom-enquiry============= */}
      <div className="icon-box1 fixed-bottom mb-4 ms-2 ms-sm-5 d-flex flex-column col-2">
        <a
          href="tel:+8595917193"
          className={`btn btn-danger rounded-circle icon1 mb-2 ${enquiry ? 'icon1-move' : ''}`}
        >
          <i className="fa-solid fa-phone"></i>
        </a>
        <a
          href="https://wa.me/8595817183"
          className={`btn btn-danger rounded-circle icon2 mb-2 ${enquiry ? 'icon2-move' : ''}`}
        >
          
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <button
          type="button"
          className="btn btn-danger rounded-circle messageicon"
          onClick={handleIcons}
        >

          {
            enquiry ? <i class="fa-solid fa-xmark"></i> :<i className="fa-solid fa-message"></i> 

          }
        
        </button>
      </div>

    </>
  );
};

export default Footer;
