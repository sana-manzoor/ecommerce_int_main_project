import React from 'react'

function footer() {
  return (
    <>
     <>
    <div className='mt-1  shadow fixed-end ' >
    <div style={{height:'360px',width:'100%',backgroundColor:'black',color:'white', overflowY:'hidden'}}>
    <Row className='p-5'>
      <Col md='3'>
      <div className='text-center text-light  head'  style={{overflowY:'hidden'}}> 
      <img src="./logo1.png" className=' img-fluid' style={{height:'120px',width:'160px'}} alt="" />
</div><br />
      {/* <p style={{textAlign:'center',color:'white'}}>© 2023 Bundle Technologies Pvt. Ltd</p> */}

      </Col>
      <Col md='3' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden',color:'white'}}>Links</h3>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Home</Link>
        <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}className='pt-2 pb-2'>Cart</Link>
        <Link to={'/wish'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Wishlist</Link>
        <Link to={'/view/:id'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>View</Link>

        {/* <Link to={'./Projects'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Projects</Link> */}



      </Col>
      <Col md='3' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden',color:'white'}}>References</h3>
        <Link to={'https://fontawesome.com'} style={{textDecoration:'none',color:'white'}} className='pt-3 pb-2'>Fontawesome</Link>
        <Link to={'https://getbootstrap.com'} style={{textDecoration:'none',color:'white'}}className='pt-3 pb-2'>Bootstrap</Link>
      

      </Col>

      <Col md='3' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden',color:'white'}}>Contact Us</h3>
        <input type="text" className='form-control' placeholder='Enter your email id..' />
        <button className="btn text-dark bg-light mt-3" >Submit</button>
      </Col>
    <div>
      <br /><br />
     <p className='text-center' style={{color:'white'}}>Copyright © 2023 Ekart. Built with ZELAB.</p> 
  </div>
    </Row>
    </div>
  </div>
   </>
    </>
  )
}

export default footer