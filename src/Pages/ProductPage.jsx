import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Products from './Products';
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';


function ProductPage() {
  const {productId}=useParams()
  const [data,setData]=useState({})
  const [review,setReview]= useState(" ")
  const [productQuantity,SetproductQuantitry]=useState(1)


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
const addToCart=()=>{
 
  const payloader={
    ...data,
    productQuantity,
    totalPrice:data.price*productQuantity
  }
  console.log(payloader)
  Swal.fire({
    title: 'Added to Cart',
    text: 'Check your Cart ',
    icon: 'success',
    confirmButtonText: 'OK'
  })
}

useEffect(() => {
  AOS.init();
}, [])

  useEffect(()=>{
   axios.get(`https://fakestoreapi.com/products/${productId}`).then(json=>setData(json.data))
  },[])


  return (
   
    <div className='container my-3 py-1 '>
      <div className='text-center'>
        <div className='bg-warning'>
        <h1>{data.title}</h1>
        <p className="text-secondary">{data.description}</p>
        </div>
        <div data-aos="fade-left">
        <Image src={data.image} fluid style={{height:'400px'}} />;
        </div>
 <div><h3 className='aling-item-center fw-bold'>{data.price}$</h3></div>
        <div className='d-flex justify-content-center'>
           <ReactStars
          count={5}
          size={24}
          edit={false}
          value={data.rate}
          color2={'#ffd700'}/>
        </div>
        <div><button className='btn btn-dark mx-3 py-2 my-2' disabled={productQuantity >1? false:true} onClick={()=>SetproductQuantitry(productQuantity-1)}>-</button>
        {productQuantity}
        <button className='btn btn-dark mx-3 py-2 my-2'  onClick={()=>SetproductQuantitry(productQuantity+1)}>+</button>
        </div>
        <button className='btn btn-dark my-2 py-2 col-md-4' onClick={addToCart}>Add to Cart</button>
      </div>
      <div className='container-fluid col-md-8 my-2'>
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
