import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import CartContextProvider from './Context/addtoCart/Context.jsx'

// const contextData ={
//   username : "Alishba Aamir"
// }
// const GlobalContext = createContext('Initial Value')
ReactDOM.createRoot(document.getElementById('root')).render(
  // <GlobalContext.Provider value={(contextData)}>
  <CartContextProvider>
  <React.StrictMode>
    <BrowserRouter> 
    <App/>
    </BrowserRouter>
  </React.StrictMode>
   </CartContextProvider>
  // </GlobalContext.Provider>
)
