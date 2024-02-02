import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonOne from './ButtonOne';
import {Card, Col, Container, Row} from 'react-bootstrap';

function Photos() {
     const[data,setdata]=useState([]);

     useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/photos')
       .then(function (response) {
         console.log(response.data)
         setdata(response.data)
       })
       .catch(function (error) {
         console.log(error)
       })  
     },[])
  return (
    <div className='App'>
      <ButtonOne></ButtonOne>
      <Container>
        <Row>
        {
          data.map((ele,ind)=>{
            return(
            
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={ele.url} />
                  <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Text>{ele.thumbnailUrl}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
        </Row>
      </Container>
    </div>
  );
}

export default Photos;