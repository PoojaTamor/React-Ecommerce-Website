import React from 'react'
import Banner from './Banner'
import GirlsTopCards from './GirlsTopCards'

const Home = ({ handleAddToCart, ProductShow}) => {
  return (
    <div>
      <Banner/>
      <GirlsTopCards handleAddToCart={handleAddToCart} ProductShow={ProductShow}/>
   
    </div>
  )
}

export default Home
