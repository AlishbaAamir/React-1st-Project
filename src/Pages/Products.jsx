import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Products() {
const [data, setData]=useState([])
useEffect(() => {
  AOS.init();
}, [])
  useEffect(()=>{
axios.get('https://fakestoreapi.com/products').then(json=>setData(json.data))
  },[])
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
  <Card className='my-2 bg-light' style={{ height:'470px' }} >
   <Card.Img variant="top" src={val.image} style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         </Card.Text>
         <div className='btn-btn-dark my-4 py-2'> <button>Shop Now</button></div>
       
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