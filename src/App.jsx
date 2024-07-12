
import { useState } from 'react'
import './App.css'
import { Toaster, toast } from "react-hot-toast"
import Navbar from './component/Navbar'
import GirlsTopCards from './component/GirlsTopCards'
import Footer from './component/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import GirlsDressCard from './component/GirlsDressCard'
import GirlsTrousersCard from './component/GirlsTrousersCard'
import SearchResults from './component/SearchResults';
import ProductDetailePage from './component/ProductDetailePage'

// Import JSON data
import Top from './Top.json';
import Dress from './Dress.json';
import Trousers from './Trousers.json';
import About from './component/About'
import Contact from './component/Contact'

function App() {
  const [addcart, setAddCart] = useState([]);
  console.log(addcart);

  const addToCart = (data) => {
    setAddCart([...addcart, data]);
  }

  const [addedItems, setAddedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Search state

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
      if (pro.id === item.id) {
        let v = pro.qty += value;
        console.log(v)

        // Ensure the quantity doesn't go below 1
        if (pro.qty < 1) {
          pro.qty = 1;
        } else if (pro.qty > 10) {
          toast.success("You can only select a maximum of 10 items");
          pro.qty = 10;
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

  const [ProDetail, setproDetail] = useState([])

  let ProductShow = (item) => {
    console.log({ ...item })
    setproDetail([{ ...item }])
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredItems = [
    ...Top.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    ...Dress.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    ...Trousers.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  ];

  return (
    <BrowserRouter>
      <>
        <Toaster />
        <Navbar count={addcart.length} addcart={addcart} QuntityHandler={QuntityHandler} handleDelete={handleDelete} searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
        <Routes>
          <Route path='/' element={<Home handleAddToCart={handleAddToCart} ProductShow={ProductShow} searchQuery={searchQuery} />} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/tops' element={<GirlsTopCards handleAddToCart={handleAddToCart} ProductShow={ProductShow} searchQuery={searchQuery} />} />
          <Route path='/trousers' element={<GirlsTrousersCard handleAddToCart={handleAddToCart} ProductShow={ProductShow} searchQuery={searchQuery} />} />
          <Route path='/dress' element={<GirlsDressCard handleAddToCart={handleAddToCart} ProductShow={ProductShow} searchQuery={searchQuery} />} />
          <Route path='/search' element={<SearchResults items={filteredItems} handleAddToCart={handleAddToCart} ProductShow={ProductShow} />} />
          <Route path='/Product/:id' element={<ProductDetailePage ProductD={ProDetail} handleAddToCart={handleAddToCart} QuntityHandler={QuntityHandler} />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
