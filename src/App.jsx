import './App.css'
import {Route, Routes,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Products from './Pages/Products'
import Page404 from './Pages/Page404'
import ProductPage from './Pages/ProductPage'
import CategoryPage from './Pages/CategoryPage'
import Navigation from './Component/Navigation'
 import Footer from './Component/Footer'
import { useState } from 'react'


// import SideBar from './Component/SideBar'

function App() {
const [user,setUser]=useState(true)

  return (
    <><section>
      <div>
      <Navigation/>
      </div>
    </section>
   
    {user?
    (<Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/products" element={< Products/>} />
       <Route path="/products/:productId" element={< ProductPage/>} />
       <Route path="/products/category/:categoryName" element={< CategoryPage/>} /> 
       <Route path="*" element={<Page404/>} />
    </Routes>)
    :
    (<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="*" element={<Navigate to="/login" replace={true}/>} />
    </Routes>)
    }
      {/* <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/about" element={< About/>}/>
      <Route path="/contactUs" element={< ContactUs/>}/> 
      <Route path="/products/:productID" element={< ProductPage/>}/>
      <Route path="/products/category/:CategoryName" element={< CategoryPage/>}/>
      <Route path="/products" element={< Products/>} />
      <Route path="*" element={<Page404/>} />
     </Routes>   */}
      <Footer/> 
    </>
  )
}

export default App
