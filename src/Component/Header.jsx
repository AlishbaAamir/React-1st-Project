import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <>
    <div className='py-1 width-100%'>
    <Carousel slide={false}>
    <Carousel.Item>
      <img className="d-block w-100 "
        src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        alt="First slide" style={{height:'550px'}}
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
        alt="Second slide" style={{height:'550px'}} />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://previews.123rf.com/images/varijanta/varijanta1601/varijanta160100046/51310252-thin-line-flat-design-banner-of-online-shopping-e-commerce-m-commerce-modern-vector-illustration.jpg"
        alt="Third slide" style={{height:'550px'}}/>

      
    </Carousel.Item>
  </Carousel>
  </div>
  </>
  )
}

export default Header