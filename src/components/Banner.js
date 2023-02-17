import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import imgText from '../images/floqast-logo.png';
const Banner = () => {
  return (
<>
{/* // medium size below */}
<Container className="text-center p-3 d-md-none d-block">
    <Row className='bg-white bg-opacity-75 rounded-3'>
    <Image src={imgText}/>
    <h3 className="txt-green">The Fastest,Most Accurate</h3>
    <h3 className="txt-black">Way to Close Your Books!</h3>
    </Row>
    </Container>


{/* large size above */}

    <Row className="d-none d-md-flex mt-5">
	<Col xl={6} className="bg-white-fade d-flex flex-column justify-content-center mt-5">
	<div className="d-flex align-items-end">
	<Image src={imgText} /><span className="txt-black ml-5">The</span>
	</div>
	<h1 className="txt-green m-0">Fastest, Most Accurate</h1>
	<h1 className="m-0 txt-black">Way to Close Your Books!</h1>
	</Col>
	<Col xl={6} >
	</Col>

	</Row>

    </>
 

   
  )
}

export default Banner
