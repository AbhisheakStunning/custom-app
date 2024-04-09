import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function AddVideo({customaddVideos}) {

  const[video, setVideo]=useState({

    time:"1 year ago",
    Channel:'codecreativ solutions',
    verified:true,


  })


  function handleSubmit(e){

 e.preventDefault()
 customaddVideos(video)
 


  }


function handlechange(e){

console.log( e.target.name, e.target.value)

setVideo({...video,

  [e.target.name]: e.target.value

})


}



  return (

    <>
      <Container>
      <Row>
        <Col>     
        <Form.Control size="lg" type="text" name='title' onChange={handlechange}  placeholder="title" className='mb-2' />
        <Form.Control size="lg" type="text" name='views' onChange={handlechange}  placeholder="Views"  className='mb-2'/>
        <Button variant="danger" className='mb-2' type='submit' onClick={handleSubmit}>Add Video</Button>
        </Col>
    </Row>
  </Container>
 
     


    </>

  )

}

export default AddVideo