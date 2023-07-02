import React from 'react'

function Footer() {
  return (
    <>
    <div data-aos="zoom-in-down">
  <footer className="bg-dark text-whie pt-5 pb-4 my-4">
    <div className="container text-centre text-md-left">
      <div className="row text-centre text-md-left">
        {/* Brand */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
            {" "}  Shopper,s Delight </h5>
            </div>
        {/* information */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
            {" "}  INFORMATION</h5>
          <p><a  href="#"  className="text-white" style={{ textDecoration: "none" }}  >
              Terms &amp; Condition{" "} </a></p>
          <p><a href="#" className="text-white"  style={{ textDecoration: "none" }}>
              {" "} Privacy Policy</a></p>
          <p><a href="#" className="text-white"  style={{ textDecoration: "none" }}>
              {" "}Shipping Policy</a></p>
          <p><a href="#" className="text-white"style={{ textDecoration: "none" }}>
              {" "}Refund &amp; Exchange</a></p>
          <p> <a href="#" className="text-white" style={{ textDecoration: "none" }}>
              {" "}FAQ's</a></p>
        </div>
        {/* Product */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
            {" "}
            PRODUCT
          </h5>
          <p><a to="#" className="text-white" style={{ textDecoration: "none" }}>
              {" "}Electronics</a></p>
          <p><a href="#" className="text-white" style={{ textDecoration: "none" }}>
              {" "}Jwellery</a></p>
          <p><a href="#" className="text-white" style={{ textDecoration: "none" }}>
              {" "} Men's Collection</a></p>
          <p><a href="#" className="text-white" style={{ textDecoration: "none" }}>
              {" "}
              Women's Collection</a></p>
         </div>
        {/* CONTACT */}
        <div className="col-md-4 col-lg-2 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
            {" "}
            CONTACT
          </h5>
         
          <p><a href="#" className="text-white" style={{ textDecoration: "none" }}>
              shopper@gmail.com</a></p>
          <p> <a href="#" className="text-white" style={{ textDecoration: "none" }}>
              +92 315654348</a></p>
          
        </div>
      </div>
    </div>
  </footer>
</div>

    
    </>
  )
}

export default Footer