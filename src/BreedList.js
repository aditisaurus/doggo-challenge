import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import {useNavigate} from "react-router-dom";
import {Button, Row, Col} from 'react-bootstrap';
import styles from './BreedList.module.css';

function BreedList() {
    
  const navigate = useNavigate();

  const [dogsList, setDogsList] = useState([]);

  useEffect(()=>{
    const dogStore = async()=>{
     const response = await fetch("https://dog.ceo/api/breeds/list/all");
     const jsonData = await response.json();
     setDogsList(jsonData.message);
    }
    dogStore();
 }, [])
    
  return (
   
    <Container>
         <Row> 
        <Col>
        <Alert key="dark" variant="info">
       Select a Dog Breed from below!
        </Alert>
        </Col> 
      </Row>
  
      <Row>
         <Col>
         <div className={styles.list}>
         {Object.keys(dogsList)?.map((value) => (
         <Button onClick={()=> navigate("/breedImage", { state: { value: value } }) }variant="outline-secondary">{value}</Button>
         ))}
         </div>

         </Col>
         
      </Row>

    </Container>
    
  )
}

export default BreedList
