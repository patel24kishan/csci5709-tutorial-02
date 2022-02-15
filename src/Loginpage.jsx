import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import './Loginpage.css';


const Loginpage = () => {

  let navigate= useNavigate();
  const [credentials, setCredentials]=useState({
    email:"",
    password:""
  })

   const updateCredentials=(e)=>{
      setCredentials({
        ...credentials,
        [e.target.name]:e.target.value
      })
   }

  
   const postData=async(e)=>{
     e.preventDefault()
    let postURL='https://tutorial4-api.herokuapp.com/api/users/login';
    let dataToSubmit=credentials;
    try
    {
      const data=await fetch(postURL,{
       method:'POST',
       headers:{
         "Content-Type":"application/json",
         "Accept":"application/json"
       },
       body:JSON.stringify(dataToSubmit)
     })
     console.log(data)
     if(data.status===200){
          navigate("/userlist");
      }else{
        alert("Invalid Email/ Password");
      }
    }catch(e){
        console.log(e)
    }

   }
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100" onSubmit={postData}>
        <h1 className="mb-3 fs-3 fw-normal">SIGN IN</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control value={credentials.email} onChange={updateCredentials} name='email' type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control value={credentials.password} onChange={updateCredentials} name='password' type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
        </Form.Group>
        <div className="d-grid">
          <Button type="submit" variant="primary" size="lg" >Sign in</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Loginpage;