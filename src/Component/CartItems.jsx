import React from 'react'
import { useState } from 'react'


function CartItems({data}) {

    const [productQuantity,SetproductQuantitry]=useState(1)
    
  return (
    <div className='card mb-3 shadow-sm'>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={data.image} 
                style={{ width:'100%' , height:'20vh', objectFit:'contain'}} className='img-fluid rounded-start bg-dark '/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-flex-start align-item-left mb-2">
                                <div className="card-title">{data.title.length > 15 ? data.title.slice(0,15)+'...' : data.title} 
                                <button className='btn btn-dark mx-1 py-1 my-3' disabled={productQuantity >1? false:true} onClick={()=>SetproductQuantitry(productQuantity-1)}>-</button>
        {productQuantity}
        <button className='btn btn-dark mx-1 py-1 my-3'  onClick={()=>SetproductQuantitry(productQuantity+1)}>+</button>
        </div>
        <div> <button className='my-3 mt-3' onClick={() => dispatch({
            type : "DELETE_CART"
           })}><i className='fa fa-trash'></i></button>
       
       <div className='badge bg-secondary my-3'>{data.price}$</div></div>
      
        
        

                            </div>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default CartItems