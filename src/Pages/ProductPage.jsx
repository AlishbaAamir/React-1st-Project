import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Products from './Products';
import Swal from 'sweetalert2'



function ProductPage() {
  const {productId}=useParams()
  const [data,setData]=useState({})
  const [review,setReview]= useState(" ")


const submitReview=()=>{
  const payload={
    productId:productId,
     review :review,
  

  }
  console.log(payload)
  Swal.fire({
    title: 'Successfully Submit',
    text: 'Thank you for reviewing our product',
    icon: 'success',
    confirmButtonText: 'OK'
  })
}

  useEffect(()=>{
   axios.get(`https://fakestoreapi.com/products/${productId}`).then(json=>setData(json.data))
  },[])


  return (
    <div className='container my-3 py-1 '>
      <div className='text-center'>
        <h1>{data.title}</h1>
        <p className="text-secondary">{data.description}</p>
        <Image src={data.image} fluid />;
 <div><h3 className='aling-item-center fw-bold'>{data.price}$</h3></div>
        <div className='d-flex justify-content-center'>
           <ReactStars
          count={5}
          size={24}
          edit={false}
          value={data.rating}
          color2={'#ffd700'}/>
        </div>
      </div>
      <div className='container-fluid col-md-6'>
        <div className='mb-5'>
          <h2 className='text-center my-3'>Reviews</h2>
          <div>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          defaultValue={review}
          onChange={(e)=> setReview(e.target.value)}
        />
      </FloatingLabel>
          </div>
          
          <button className='btn btn-dark my-2' onClick={submitReview}>Submit</button>
        </div>

      </div>
    </div>
    
  )
}

export default ProductPage
