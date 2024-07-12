import React from 'react'
import Banner from './Banner'
import GirlsTopCards from './GirlsTopCards'

const Home = ({ handleAddToCart, ProductShow ,searchQuery={searchQuery}}) => {
  return (
    <div>
      <Banner/>
      <GirlsTopCards handleAddToCart={handleAddToCart} ProductShow={ProductShow} searchQuery={searchQuery} />
   
    </div>
  )
}

export default Home
