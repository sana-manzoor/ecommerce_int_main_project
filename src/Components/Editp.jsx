import React, { useState,useEffect } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { editProductApi } from '../services/allApis';
import { BASE_URL } from '../services/baseurl';


function Editp({ product }) {

  const [prod, setProd] = useState({
    title: product.title, price: product.price, category: product.category, description: product.description, userid: product.userid, product_image: product.product_image
  })

  const [show, setShow] = useState(false);

  const [preview,setPreview]=useState("")

  const [token,setToken]=useState("")

  const handleClose = () => {
    setShow(false);

  }
  const handleShow = () => setShow(true);


  useEffect(() => {
    const excistingUser = JSON.parse(localStorage.getItem("currentUser"))
    setProd({ ...prod, userId: excistingUser })
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])

  // console.log(token)
  useEffect(() => {
    if (prod.product_image != product.product_image) {
      setPreview(URL.createObjectURL(prod.product_image))
    }
  }, [prod.product_image])

  const updateProduct = async () => {
    if (!prod.title || !prod.price || !prod.category || !prod.description || !prod.product_image ) {
      alert("Enter Valid Values!!")

    }
    else {

      console.log("Valid")
      const pData = new FormData()
      pData.append("title", prod.title)
      pData.append("price", prod.price)
      pData.append("category", prod.category)
      pData.append("description", prod.description)
      pData.append("product_image", prod.product_image)
      pData.append("userid", prod.userid)
      console.log(pData)
      if (prod.product_image == product.product_image) {
        const reqHeader = {
          "Content-Type": "application/json", "Authorization": `Bearer ${token} `
        }
        const res = await editProductApi(reqHeader, pData, product._id)
        console.log(res)
        if (res.status == 200) {

          alert("product Updated Successfully!!")
          handleClose()
        }
        else {
          alert(res.response)
        }
      }
      else {
        const reqHeader = {
          "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token} `
        }
        const res = await editProductApi(reqHeader, pData, product._id)
        console.log(res)
        if (res.status == 200) {

          alert("Product Updated Successfully!!")
          handleClose()
        }
        else {
          alert(res.response)
        }
      }

    }
  }
  console.log(prod)


  return (
    <>
      <i className="fa-regular fa-pen-to-square fa-lg text-warning ps-3" onClick={handleShow} ></i>

      <Modal className='modal-lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='row align-items-center'>
            <div className='col-lg-4'>
              <label htmlFor="product">
                <input type="file" id='product' style={{ display: 'none' }} onChange={(e) => setProd({ ...prod, product_image: e.target.files[0] })} />
                {/* <img src="https://icon-library.com/images/upload-file-icon/upload-file-icon-7.jpg" className='img-fluid m-4' alt="" /> */}
                <img src={preview ? preview : `${BASE_URL}/upload/${prod.product_image}`} className='img-fluid m-4' alt="" />
              </label>
            </div>
            <div className='col-lg-8'>
              <div className='d-flex align-items-center flex-column'>


                <form className='w-100  mt-4'>
                  <Form>

                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                        Name:
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" placeholder="Name"  defaultValue={product.title} onChange={(e) => setProd({ ...prod, title: e.target.value })}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                        Price:
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" placeholder="Price" defaultValue={product.price} onChange={(e) => setProd({ ...prod,price : e.target.value })}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                        Category:
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" placeholder="Category" defaultValue={product.category} onChange={(e) => setProd({ ...prod,category : e.target.value })}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput4">
                      <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                        Description:
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" placeholder="Description" defaultValue={product.description} onChange={(e) => setProd({ ...prod,description : e.target.value })}/>
                      </Col>
                    </Form.Group>
                  </Form>


                </form><br />




              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" className='btn btn-lg' style={{ textAlign: 'center' }} onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-warning" className='btn btn-lg' style={{ textAlign: 'center' }} onClick={updateProduct} >Update</Button>

        </Modal.Footer>
      </Modal> 
    </>
  )
}

export default Editp