import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CategoryPage() {
  const {categoryName}=useParams()
  const [data,setData]=useState([])

useEffect(()=>{
axios.get(`https://fakestoreapi.com/products/category/${categoryName}`).then(json=>setData(json.data))
},[categoryName])


  return (
   <div className='container bg-warning ' >
    <div className='my-5 py-5  text-center'>
      <h1 className='fw-bold '>{categoryName.toUpperCase()}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum nam perspiciatis porro hic atque maiores eligendi aut saepe voluptatibus expedita reiciendis nostrum. Modi eius ut alias fugit quibusdam? Eligendi?</p>
    </div>
    <div className='row'>
      {
        data.map((val,key)=>
        <div className='col-md-6 my-3 ' key={key}>
       <Link className='text-decoration-none' to={`/products/${val.id}`}>
        <Card >
      <Card.Img variant="top" src={val.image} />
      <Card.Body>
        <Card.Title>{val.title}-{val.price}$</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      
        </Link>
        </div>
        )
      }
    </div>
   </div>
  )
}

export default CategoryPage
