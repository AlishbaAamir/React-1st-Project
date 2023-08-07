import React, { useReducer, useState } from 'react'
import Header from '../Component/Header'
import CategorySection from '../Component/CategorySection'
import Products from './Products'


export default function Home() {

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

