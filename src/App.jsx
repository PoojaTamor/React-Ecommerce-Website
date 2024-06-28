import { useState } from 'react'
import './App.css'
import {Toaster} from "react-hot-toast"
import Navbar from './component/Navbar'
import GirlsTopCards from './component/GirlsTopCards'
import Footer from './component/Footer'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './component/Home'
import GirlsDressCard from './component/GirlsDressCard'
import GirlsTrousersCard from './component/GirlsTrousersCard'
import AddToCartItems from './component/AddToCartItems'
import ProductDetailePage from './component/ProductDetailePage'
import { toast } from 'react-hot-toast';

function App() {
  const [addcart, setAddCart] = useState([]);
  console.log(addcart);

  const addToCart = (data) => {
    setAddCart([...addcart, data]);
  }

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    if (addedItems.includes(item.id)) {
      toast.error("Item is already added!");
    } else {
      addToCart(item);
      setAddedItems([...addedItems, item.id]);
      toast.success("Your product is added!");
    }
  };

  const QuntityHandler = (item, value) => {
    const updatedCart = addcart.map((pro) => {
      // console.log(value)
      // console.log(item)
      // console.log(pro)
      // console.log(addcart)
      if (pro.id === item.id) {
       let v= pro.qty += value;
       console.log(v)
  
        // Ensure the quantity doesn't go below 1
        if (pro.qty < 1) {
          pro.qty = 1;
        }
        else if(pro.qty>10){
          pro.qty=10
        }
      }
      return pro;
    });
  
    setAddCart([...updatedCart]);
  };
  
  // Delete item
  let handleDelete = (index) => {
    const updatedList = [...addcart];
    updatedList.splice(index, 1);
    setAddCart(updatedList);
  };


  
const [ProDetail,setproDetail]=useState([])

let ProductShow=(item)=>{
  console.log({...item})
  setproDetail([{...item}])
}

  return (
    <BrowserRouter>
      <>
      <Toaster/>
        <Navbar count={addcart.length} addcart={addcart}  QuntityHandler={QuntityHandler} handleDelete={handleDelete} />
        <Routes>
          <Route path='/' element={<Home  handleAddToCart={handleAddToCart}  ProductShow={ProductShow}/>}/>
           <Route path='/tops' element={<GirlsTopCards  handleAddToCart={handleAddToCart}  ProductShow={ProductShow}/>} /> 
           <Route path='/trousers' element={<GirlsTrousersCard  handleAddToCart={handleAddToCart}  ProductShow={ProductShow}/>} /> 
           <Route path='/dress' element={< GirlsDressCard  handleAddToCart={handleAddToCart}  ProductShow={ProductShow}/>} /> 
           {/* <Route path='/mycart' element={<AddToCartItems addcart={addcart} count={addcart.length} QuntityHandler={QuntityHandler} handleDelete={handleDelete} />} />  */}
           <Route path='/Product/:id' element={< ProductDetailePage  ProductD={ProDetail} handleAddToCart={handleAddToCart} QuntityHandler={QuntityHandler}/>} /> 
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
