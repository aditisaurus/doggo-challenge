import React from 'react'
import styles from './Login.module.css';
import {Button, Row, Col, Alert, Container} from 'react-bootstrap';
import {useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  
  

  return (
    <Container>
     <Row>
        <Col>
        <Alert key="light" variant="info">
           DOGGO CHALLENGE
        </Alert>
        </Col> 
        </Row>

    <div className={styles.login}>

    <img src="https://raw.githubusercontent.com/aditisinghdeveloper/doggo-challenge/master/doggo-challenge.jpeg" alt="dog" />

      <form>
        <input placeholder="Full Name" type="text" />

        <input placeholder="Your email address" type="email" />

        <input placeholder="Password" type="password" />
        
        <Button onClick={()=> navigate("/breedList")} variant="info">Login</Button>{' '}
      </form>

      
    </div>
    </Container>
  )
}

export default Login