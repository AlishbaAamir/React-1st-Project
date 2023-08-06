import React from 'react'
import { useState } from 'react'

function Cartitems({data}) {

    const [productQuantity,SetproductQuantitry]=useState(1)
  return (
    <div className='card mb-3 shadow-sm'>
        <div className="row g-0">
            <div className="col-md-4">
                <img src="data:image/png;base64,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" 
                style={{ width:'100%' , height:'20vh', objectFit:'contain'}} className='img-fluid rounded-start bg-dark '/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-flex-start align-item-left mb-2">
                                <div className="card-title">Title
                                </div>
                                <div><button className='btn btn-dark mx-1 py-1 my-3' disabled={productQuantity >1? false:true} onClick={()=>SetproductQuantitry(productQuantity-1)}>-</button>
        {productQuantity}
        <button className='btn btn-dark mx-1 py-1 my-3'  onClick={()=>SetproductQuantitry(productQuantity+1)}>+</button>
        </div>
        <div className='d-flex justify-content-space-around my-3 mt-4 py-4 '><span><i className='fa fa-trash'></i></span>
       
       <div className='badge bg-secondary'>Price</div></div>
        
        

                            </div>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Cartitems