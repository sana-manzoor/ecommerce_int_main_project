import React from 'react'
import Header from '../Components/Header'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bar from '../Components/Bar';
import './Adm.css'


function Admindb() {
  return (
    <>
     {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href=""><Link to={'/'}><img src="./logo1.png" className=' img-fluid' style={{height:'80px',width:'100px'}} alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> */}
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          {/* </Nav>
          <Nav>
            <Nav.Link href="#deets"><Button className="btn ">Logout</Button></Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          {/* </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}





    <div className='row '>
        <div className='col-lg-3'>
          <Bar />
        </div>
        <div className='col-lg-7'>

          <div className='mt-4 mb-5 text-center' id='he1'>Welcome <span id='he2' className='text-warning'>Admin!!</span></div>
          <div className=" row mt-3 mb-5">
            <div className="col-lg-6 cat1">
              <img src="https://visme.co/blog/wp-content/uploads/Percent-Total-and-E-Commerce-Catalog-sales-by-Category-1999-2016.gif" alt="" style={{ height: '150px',width:'650px' }} />

            </div>
            <div className="col-lg-6 cat1">
              <img src="https://th.bing.com/th/id/OIP.gYvI4r45Og5ciiH5wKpUYgAAAA?rs=1&pid=ImgDetMain" alt="" style={{ height: '150px',width:'650px' }} />
            </div>
            
          </div>

          <div className="mt-5">
            <div className="row">
              <div className="col">
                <h3 id='he3' className="d-flex">
                  All about <span id='he4'className='ms-3 text-warning'>EKart</span> 
                </h3>
              </div>
              <div className='mt-4'>

                <div>
                  <span>E-commerce is the activity of electronically buying or selling products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic funds transfe…Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
              </div>

            </div>

          </div>
          <div >
          </div>
        </div>

      </div>



      <br />
      {/* <ToastContainer/> */}

    </>
  )
}

export default Admindb