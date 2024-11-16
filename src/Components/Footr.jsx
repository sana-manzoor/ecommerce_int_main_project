import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'

function Footr() {
  return (
    <>
    <div className='mt-1  shadow fixed-end ' >
    <div style={{height:'360px',width:'100%',backgroundColor:'#FDEFBA', overflowY:'hidden'}}>
    <Row className='p-5'>
      <Col md='3'>
      <div className='text-center   head'  style={{overflowY:'hidden'}}> 
      <img src={logo} className=' img-fluid' style={{height:'120px',width:'160px'}} alt="" />
</div><br />
      {/* <p style={{textAlign:'center',color:'white'}}>© 2023 Bundle Technologies Pvt. Ltd</p> */}

      </Col>
      <Col md='3' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden'}}>Links</h3>
        <Link to={'/'} style={{textDecoration:'none'}} className='pt-2 pb-2 text-dark'>Home</Link>
        <Link to={'/cart'} style={{textDecoration:'none'}}className='pt-2 pb-2 text-dark'>Cart</Link>
        <Link to={'/wish'} style={{textDecoration:'none'}} className='pt-2 pb-2 text-dark'>Wishlist</Link>
        <Link to={'/userdb'} style={{textDecoration:'none'}} className='pt-2 pb-2 text-dark'>UserDashboard</Link>

        {/* <Link to={'./Projects'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Projects</Link> */}



      </Col>
      <Col md='3' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden'}}>References</h3>
        <Link to={'https://fontawesome.com'} style={{textDecoration:'none'}} className='pt-3 pb-2 text-dark'>Fontawesome</Link>
        <Link to={'https://getbootstrap.com'} style={{textDecoration:'none'}}className='pt-3 pb-2 text-dark'>Bootstrap</Link>
      

      </Col>

      <Col md='3' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden'}}>Contact Us</h3>
        <input type="text" className='form-control' placeholder='Enter your email id..' />
        <button className="btn text-dark bg-light mt-3" >Submit</button>
      </Col>
    <div>
      <br /><br />
     <p className='text-center' >Copyright © 2023 Ekart. Built with ZELAB.</p> 
  </div>
    </Row>
    </div>
  </div>
   </>
  )
}

export default Footr