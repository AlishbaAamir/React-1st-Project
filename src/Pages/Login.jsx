import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const[email, setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const getInfo=(e)=> {
e.preventDefault();
const payload ={email,password}
console.log(payload)
  }
  
  return (
    
     
    <div className='container-fluid col-md-4 my-5 py-4 bg-dark '>
<h1 className='text-center fw-bold text-warning' >Login</h1>
<Form onSubmit={getInfo} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-warning'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <Form.Text className="text-warning ">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-warning'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" className='text-warning' />
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  )
  }

export default Login