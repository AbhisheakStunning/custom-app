import React from "react"
import './Video.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Video({title, id, bgColor, channel="Codecreativsol",views,time,online,children}){



  return (

    <>

  <Container>
      <Row>
        <Col>
        <Card style={{marginBottom:'40px', background:'none'}}>
      <Card.Img variant="top" src={`https://picsum.photos/id/${id}/640/640`} />

      <Card.Body>
        <Card.Title style={{backgroundColor:bgColor}}>{title}</Card.Title>
        <Card.Text>

          <p>{channel}{online?'✅':null}</p>
          {/*<p>{channel}{online && '✅' }</p>*/}
        {views} views <span>.</span>{time}
        {children}


        </Card.Text>
      </Card.Body>
    </Card>

    </Col>
    
      </Row>
    </Container>


    </>


  )
}


export default Video