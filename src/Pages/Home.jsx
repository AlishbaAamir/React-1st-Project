import React, { useReducer, useState } from 'react'
import Header from '../Component/Header'
import CategorySection from '../Component/CategorySection'
import Products from './Products'


export default function Home() {
//   const [conter, setCounter] = useState()
// const couterCallBack= (state, action) =>{
//   switch (key) {
//     case value:
      
//       break;
  
//     default:
//       break;
//   }

// }
// const data = {
// count : 0
// }

//   const [state, dispatched] = useReducer(couterCallBack, data)
  return (
   <>
   <div>
    
   <Header/>
<CategorySection/>
<Products/>

    </div>
   
   </>
    
    
  )
}

