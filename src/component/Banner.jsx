// import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  
  const handleTopClick = () => {
    navigate('/tops');
  };

  const handleTrousersClick = () => {
    navigate('/trousers');
  };

  const handleDressClick = () => {
    navigate('/dress');
  };
  
  return (
    <>
    <div className="container-fluid banner">
      <div className="bannerdiv col-lg-8 col-md-9 col-sm-8 col-7">
        <div className="col-lg-3 col-md col-sm-3 col-6">
          <img
            src="https://emart.wpthemedemos.com/women-fashion/wp-content/uploads/sites/5/2022/11/fashino-CLOTHING-OUTLET-logo-03.webp"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="heading">
          <h1>New Fashion Collection</h1>
        </div>
      </div>
    </div>
    <div className="container px-4 my-5">
      <h2 className='shop-categories mb-4'>Shop by categories</h2>
      <div className="row gx-5 gy-5">
        <div className="col-lg-4 col-md-6">
          <div className="Category">
            <button type="button" className="btn btn-outline-primary shopbtn" onClick={handleTopClick}>
              Shop Tops
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="Category Category2">
            <button type="button" className="btn btn-outline-primary shopbtn" onClick={handleTrousersClick}>
              Pents
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="Category Category3">
            <button type="button" className="btn btn-outline-primary shopbtn" onClick={handleDressClick}>
              Dresses
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Banner;
