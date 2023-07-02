import React from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div className='row'>
    <div className='d-flex container my-5'>
      <div className='col-md-6 '> <Col xs={6} md={4}>
          <Image src="https://img-c.udemycdn.com/course/750x422/2845994_d001.jpg" rounded style={{height:'500px', width:'500px'}} />
        </Col></div>
      <div className='col-md-6 mx-2 my-5 '><h1 className='fw-bold'>About Us</h1>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div><h3>Follow us</h3>
      <div ><i class="fa-brands fa-facebook mx-1" ></i> 
      <i class="fa-brands fa-square-instagram mx-2"></i>
      <i class="fa-brands fa-square-twitter"></i>
      </div>
      </div>
      </div>
   </div>
    </div>
  )
}

export default About