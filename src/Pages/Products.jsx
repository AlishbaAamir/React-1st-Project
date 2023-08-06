import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CartContext } from '../Context/addtoCart/Context';

function Products() {
const [data, setData]=useState([])

const {state, dispatch} = useContext(CartContext)

useEffect(() => {
  AOS.init();
}, [])

  useEffect(()=>{
axios.get('https://fakestoreapi.com/products').then(json=>setData(json.data))
  },[])

  const addtoCart = (item)=> {
    // console.log(item)
    dispatch(
      {
        type : "Add_To_Cart",
        payload : item
      }
    )
  }
  return (
    

      <div className="container">
    <div className="my-5 text-center">
    <div data-aos="zoom-in-up">
      <h1>Products</h1>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos perferendis ipsum neque id culpa.</p>
    </div>
    </div>
    <div className="container">
      <div className="row ">
{
  data.map((val,key)=>
  <div className="col-md-4" key={key}> 
  <Link className='text-decoration-none' to={`/products/${val.id}`}>
  <div data-aos="fade-left">
  <Card className='my-2 bg-light' style={{ height:'450px' }} >
   <Card.Img variant="top" src={val.image} style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>{val.title.length > 20 ? val.title.slice(0,20)+'...' : val.title}</Card.Title>
       
        <Card.Text>
         {val.description.length > 60 ? val.description.slice(0,60)+'...' : val.description} 
         </Card.Text>
         <span className='badge bg-secondary my-2 '>{val.price}$</span>
         <div className='d-grid'> <button className='btn btn-outline-dark' type='button' onClick={()=>addtoCart(val)}>
          Add To Cart</button>
          </div>
       </Card.Body>
    </Card>
    </div>
  </Link>
  </div>
  
  )
}
      
</div>
    </div>
    </div>
    
  )
}

export default Products