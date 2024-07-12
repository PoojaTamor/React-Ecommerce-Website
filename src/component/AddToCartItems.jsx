import { useState ,useEffect  } from "react"

// console.log()
   
const AddToCartItems = ({addcart, count,QuntityHandler ,handleDelete}) => {
  const [subtotal,SetSubtotal]=useState(0) ; 


  useEffect(()=>{
      HandleSubTotal()
  })

  // subtotal  calculation function
  
      let sum = 0;
      const HandleSubTotal = () => {
      
        addcart.forEach((item) => {
          sum += item.qty * item.price;  
        });
      
        SetSubtotal(sum);  
      };

      // total  price of each product in cart list
      const TotalAmount=(item)=>{
        return item.price*item.qty
      }
  return (
<div className="outer-container">
            <div className="row justify-content-center m-0">
                <div className="col-md-8 mt-5 mb-5">
                    <div className="card">
                        <div className="card-header bg-dark p-3">
                            <div className="card-header-flex">
                                <h5 className="text-white m-0"> My Cart </h5>
                                <h6 className="text-white m-0">Item:<span style={{color:"#fbb72c"}}>{count}</span></h6>

                            </div>
                        </div>
                        <div className="card-body p-0">
                        {
                                    count==0 ?
                                    <table className="table cart-table mb-0">

                              
                                    <tbody>
                                        <tr>
                                            <td colSpan="6">
                                                <div className="cart-empty">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    <p>Your Cart Is empty</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>:
                                  <table className="table cart-table mb-0">
                                  <thead>
                                      <tr className="text-center">
                                          <th>Product</th>
                                          <th>Name</th>
                                          <th>Price</th>
                                          <th className="text-center ">Qty</th>
                                          <th>Action</th>
                                          <th className="text-right"><span id="amount" className="amount">Total Amount</span></th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {
                                          addcart?.map((data, index) => {
                                              const { image, category, price ,qty} = data;
                                              let total=price*qty;
                                              return (
                                                  <tr key={index}>
                                                      <td><div className="product-img d-flex justify-content-center align-items-center"><img src={image} alt="" /></div></td>
                                                      <td><div className="product-name text-center"><p>{category}</p></div></td>
                                                      <td className='text-center'>${(price).toFixed(0)}</td>
                                                      <td>
                                                          <div className="prdct-qty-container d-flex justify-content-center align-items-center">
                                                              <button className="prdct-qty-btn" type="button" onClick={()=>{QuntityHandler(data ,-1)}}>
                                                                  <i className="fa fa-minus"></i>
                                                              </button>
                                                              <input type="text" name="qty" value={qty} className="qty-input-box" disabled />
                                                              <button className="prdct-qty-btn" type="button" onClick={()=>{QuntityHandler(data ,1)}}>
                                                                  <i className="fa fa-plus"></i>
                                                              </button>
                                                          </div>
                                                      </td>
                                                      <td className="d-flex justify-content-center align-items-center" ><button className="prdct-delete " onClick={() => handleDelete(index)} ><i className="fa fa-trash-alt"></i></button></td>
  
                                                      <td className="text-right text-center">${(TotalAmount(data).toFixed(0))}</td>
                                                      {/* <td className="text-right text-center">${(total).toFixed(0)}</td> */}
                                                  </tr>
                                              )
                                          })
                                      }
                                  </tbody>
                                  <tfoot>
                                      <tr>
                                          <th>&nbsp;</th>
                                          <th colSpan="4">&nbsp;</th>
                                          {/* <th>Items in Cart<span className="ml-2 mr-2">:</span><span className="text-danger"> {count}</span></th> */}
                                          <th className="text-right">Total Price<span className="ml-2 mr-2">:</span><span className="text-danger">${(subtotal).toFixed(0)}</span></th>
                                      </tr>
                                  </tfoot>
                              </table>

                                }
                           
                          

                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddToCartItems
