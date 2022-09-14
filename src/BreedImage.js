import React, {useState, useEffect} from 'react'
import {Row, Col, Alert, Container, Card} from 'react-bootstrap';
import {useLocation} from "react-router-dom";
import styles from './BreedImage.module.css';

function BreedImage() {

  const[imageList, setImageList] = useState([]);

  const {state} = useLocation();
  const { value } = state; 

useEffect(() => {
  const images = async()=>{
    const response = await fetch(`https://dog.ceo/api/breed/${value}/images`);
    const jsonData = await response.json();
    setImageList(jsonData.message);
    
   }
   images();
}, [value])

  return (
    <Container>
    <Row >
        <Col >
    <Alert  key="dark" variant="info">
       You selected {value} breed!
        </Alert>   
    </Col>
    </Row>
 
    <Row>
    <Col>
       <div className={styles.image}>
       {imageList?.map((img) => (
       <Card style={{width: '12rem', height: '10rem'}}>
      <Card.Img variant="top" src={img}/>
        </Card>
         ))}
       </div>
       </Col>

     </Row>
</Container>
  )
}

export default BreedImage