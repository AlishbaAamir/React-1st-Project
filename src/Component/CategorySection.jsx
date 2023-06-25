import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function CategorySection() {
    const [categories, setCategories] = useState([])
  
  useEffect(() => {
      axios.get('https://fakestoreapi.com/products/categories').then(json => setCategories(json.data))
  }, [])

  return (
   <>
   
   <div className="container-fluid my-2  bg-warning">

            <div className="my-2 text-center">
                <h1>Categories</h1>
                <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quos architecto, aliquid commodi facilis rerum tempora beatae doloribus in sed fugiat nihil ullam excepturi minima aspernatur ad, temporibus magni consequuntur!</p>
            </div>


            <div className="row">
                {
                    categories.map((val, key) => 
                    <div className="col-md-3 my-2 text-center fw-bold" key={key}>
                         <Link className='text-decoration-none'to={`/products/category/${val}`}> 
                            <Card>
                                <Card.Body>{key+1}-{val.toUpperCase()}</Card.Body>
                            </Card>
                         </Link> 
                    </div>)
                }
            </div>
        </div>
    

        
    
   </>
  )
}

export default CategorySection