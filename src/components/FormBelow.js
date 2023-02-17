import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../App.css';
const FormBelow = () => {

  
  return (
    <>

    {/* small size */}

<style type="text/css">
        {`
    .btn-green {
      background-color: #8bc540;
      color: white;
    }
    `}
      </style>
    <Container className="mx-auto p-0 m-0 d-md-none d-block">
	<Row className="justify-content-center text-center mx-auto">
	<Col xs={12} className="bg-green d-flex flex-column justify-content-center py-2 my-4 rounded-3">
	<h3 className='text-white'>SCHEDULE A DEMO</h3>
    <h5 className='text-white'>Learn More About FloQast</h5>
    </Col>
    <Col xs={12} className="bg-light py-2 rounded-3">
    <h5 className="text-secondary px-2">Learn How FloQast Can</h5>
    <h5 className="text-green">Improve Your Month-End</h5>
    </Col>

	<Container className="bg-light">
    <Form className="p-2">
    <Col xs={12} className="bg-light pb-3">
	<Form.Group controlId="firstName" className="my-1">
	<Form.Control type="text" placeholder="First Name*"/>
	</Form.Group>
	
	<Form.Group controlId="email"  className="my-1">
	<Form.Control type="text" placeholder="Email*"/>
	</Form.Group>
	<Button variant='green'  type="submit">SCHEDULE NOW</Button>
    </Col>
    </Form>
    </Container>

	</Row>
	</Container>

  {/* for large size */}
<div className='move-bot'>
  <Container>
  <Row className="justify-content-center text-center mt-5 d-none d-md-flex mx-auto bg-white">
    <Col lg={4}  className="bg-green clip-art">
    <div className="bg-green m-0 p-3 clip-box">
    <h3 className="text-light">SCHEDULE A DEMO</h3>
    <h5 className="text-light">Learn More About FloQast</h5>
    </div>
    </Col>
    <Col lg={8} className="bg-white text-center py-3">
    <h4 className="text-secondary px-3">Learn How FloQast Can
    <span className="imp-green"> Improve Your Month-End</span>
    </h4>
    <Form>
    <Row className="justify-content-center align-items-center">
    <Col  >
	<Form.Group>
	<Form.Control type="text" placeholder="First Name*"/>
	</Form.Group>
	</Col>
	<Col>
	<Form.Group controlId="email">
	<Form.Control type="text" placeholder="Email*"/>
	</Form.Group>
	</Col>
  <Col className='p-0'>
  <Button variant='green' type="submit">SCHEDULE NOW</Button>
	</Col>
    </Row>
    </Form>
    </Col>
    </Row>
    </Container>
    </div>

  </>
    
  )
}

export default FormBelow

