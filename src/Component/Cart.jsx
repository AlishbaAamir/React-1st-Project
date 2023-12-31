import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartContext } from '../Context/addtoCart/Context';
import CartItems from './CartItems';


function Cart() {

    const [show, setShow] = useState(false);

    const {state,dispatch} = useContext(CartContext)

    
  return (
    <>
        <Button type='button' onClick={()=> setShow(true)} className='btn btn-dark position-relative' >
    <i className='fa-solid fa-cart-shopping'></i>
    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
        {state.cart.length} 
          <span className='visually-hidden' >Unread Message</span>
    </span>
  </Button>
  <Offcanvas show={show} onHide={()=>setShow(false)} placement='end' name='end'>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Cart</Offcanvas.Title>
     
    </Offcanvas.Header>
    <button className="btn btn-outline-dark" onClick={() => dispatch({
            type : "CLEAR_CART"
           })}>  Clear Cart</button>
    <Offcanvas.Body>
      Some text as placeholder. In real life you can have the elements you
      have chosen. Like, text, images, lists, etc.
      {
            state.cart.map((val, key) =><CartItems key={key} data={val}/> )
          }
                     </Offcanvas.Body>
           </Offcanvas>
  </>
  )
}

export default Cart