import React, { useState,useRef } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Auth.css'
// import Header from '../Components/Header';
import { registerApi } from '../services/allApis';
import { loginApi } from '../services/allApis';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/log1.gif'
import emailjs from 'emailjs-com';

function Auth({ register }) {

  const [userData, setUserData] = useState({
    username: "", address: "", email: "", password: ""
  })

  const registerForm = register ? true : false

  const formRef = useRef(null);


  const navigate = useNavigate()

  // const handleRegistration = async (e) => {
  //   e.preventDefault()
  //   if (!userData.username || !userData.address || !userData.email || !userData.password) {
  //     // alert("Enter values for every fields!!")
  //     alert("Enter Valid Values!!")
  //   }
  //   else {
 
  //     const res = await registerApi(userData)
  //     console.log(res.data)
  //     if (res.status === 200) {
  //       alert(`Registration of ${res.data.username} is Successfull!!`)

      
          
  //         emailjs.sendForm('service_gvz8ck5', 'template_pwyhq38', res, 'J_BWey6cYBZLaEJyF')
  //             .then((result) => {
  //                 console.log('Email sent successfully:', result.text);
  //                 navigate('/login');
  //             })
  //             .catch((error) => {
  //                 console.error('Error sending email:', error);
  //                 alert('Failed to send confirmation email. Please try again.');
  //             });
  //     } else {
  //         console.error('Form reference is null.');
  //         alert('Could not send confirmation email. Please try again.');
  //     }

  //       setUserData({ username: "", address: "", email: "", password: "" })
  //       // navigate('/login')
  //     }
    
  //     // console.log(res.response.data)
    
  // }


  const handleRegistration = async (e) => {
    e.preventDefault();
  
    // Check if user data is complete
    if (!userData.username || !userData.address || !userData.email || !userData.password) {
      alert("Enter Valid Values!!");
      return;
    }
  
    try {
      const res = await registerApi(userData);
      console.log('Registration Response:', res.data);
  
      if (res.status === 200) {
        alert(`Registration of ${res.data.username} is Successful!!`);
  
        // Ensure formRef is set and valid
        if (formRef.current) {
          emailjs.sendForm('service_gvz8ck5', 'template_pwyhq38', formRef.current, 'J_BWey6cYBZLaEJyF')
            .then((result) => {
              console.log('Email sent successfully:', result.text);
              navigate('/login'); // Navigate to login page
            })
            .catch((error) => {
              console.error('Error sending email:', error);
              alert('Failed to send confirmation email. Please try again.');
            });
        } else {
          console.error('Form reference is null.');
          alert('Could not send confirmation email. Please try again.');
        }
  
        // Reset user data
        setUserData({ username: "", address: "", email: "", password: "" });
      } else {
        alert(`Error: ${res.response?.data || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again later.');
    }
  };
  


  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(userData)
    const { email, password } = userData
    if (!email || !password) {
      alert("Enter Email and Password!!")
    }
    else {
      const res = await loginApi(userData)
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem("currentUser", JSON.stringify(res.data.excistingUser._id))
        localStorage.setItem("name", JSON.stringify(res.data.excistingUser.username))
        localStorage.setItem("role", res.data.role)
        localStorage.setItem("token", res.data.token)
        alert("Login Successfull!!")
        setUserData({ email: "", password: "", })
        if (localStorage.getItem("role") == "admin") {
          navigate('/admindb')
        }
        else {
          navigate('/')
        }
      }
      else {
        alert("Login Failed!!")
      }
      // navigate('/')
    }

  }


  console.log(userData)


  return (
    <>

      <Link to={'/'} style={{ textDecoration: 'none' }} className='d-flex align-items-center m-3'>
        <i class="fa-solid fa-circle-arrow-left fa-2x" style={{ color: 'black' }}></i>
        <span className='btn text-center p-0 m-0 '></span>
      </Link>

      <div className=' align-items-center container' >

        <div className='container border shadow fw-bolder mt-5 mb-5'>


          <div className=' rounded container '  >
            {/* style={{backgroundColor:'#F5E3E3'}}  */}

            <div className='d-flex justify-content-center mt-4 mb-3' >
              {/* <img src="" alt="" style={{ height: '70px', width: '160px', textAlign: 'center' }} className='img-fluid ' /> */}
              {/* <h2>SIGN UP</h2> */}
            </div><br /><br />

            <div className='row align-items-center'>
              <div className='col-md'>
                <img src={logo} className='img-fluid d-none d-sm-block ' style={{ height: '360px' }} alt="" />
                <img src={logo} className='img-fluid d-block d-sm-none' style={{ height: '200px' }} alt="" />

              </div>
              <div className='col-md'>
                <div className='d-flex align-items-center flex-column'>


                  <form className='w-100  mt-4' ref={formRef} >

                    {
                      registerForm &&
                      <>
                        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                            Username:
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" placeholder="Enter Your Name" value={userData.username} name='username' onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                          <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                            Address:
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control as="textarea" placeholder="Enter Your Address" name='address' value={userData.address} onChange={(e) => { setUserData({ ...userData, address: e.target.value }) }} />
                          </Col>
                        </Form.Group>
                      </>
                    }

                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                        Email:
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" placeholder="Enter Your Email" name='email' value={userData.email} onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput4">
                      <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                        Password:
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="password" placeholder="Password" name='e.' value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                      </Col>
                    </Form.Group>



                    {
                      registerForm ?
                        <div className='d-flex justify-content-center  align-items-center'>
                          <Button variant="outline-primary" className='btn m-4 ' style={{ textAlign: 'center' }} onClick={handleRegistration}>SIGN UP</Button>
                          <Link to={'/login'} className='text-primary l1'>Already a User?Sign in..</Link>

                        </div> :
                        <div className='d-flex justify-content-center  align-items-center'>
                          <Button variant="outline-primary" className='btn m-4 ' style={{ textAlign: 'center' }} onClick={handleLogin} >SIGN IN</Button>
                          <Link to={'/register'} className='text-primary l1'>New User?Sign Up..</Link>

                        </div>
                    }

                  </form><br />




                </div>
              </div>
            </div>

          </div><br /><br /><br />
        </div>
        {/* <ToastContainer/>  */}
      </div>
    </>
  )
}

export default Auth