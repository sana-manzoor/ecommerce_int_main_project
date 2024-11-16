import React,{useState,useEffect} from 'react'
import Bar from './Bar'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { addProductApi } from '../services/allApis'



function Addp() {

  const [prod,setProd]=useState({
    title:"",price:"",category:"",description:"",userid:"",product_image:""
  })

  const [token,setToken]=useState("")

  const [preview,setPreview]=useState("")


  const handleAddproduct=async()=>{
    console.log("handle",prod.title,prod.product_image)
    if(!prod.title ||!prod.price || !prod.category || !prod.description  || !prod.product_image){
      alert("enter Valid Values")

    }
    else{
      // const {title,overview,languages,github,demo,userId,image}=projectDetails
      // console.log(projectDetails)
      const prData=new FormData()
      prData.append("title",prod.title)       
      prData.append("price",prod.price)
      prData.append("category",prod.category)
      prData.append("description",prod.description)
      prData.append("userid",prod.userid)
      prData.append("product_image",prod.product_image)
       console.log(prData)


       const reqHeader={
        // "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
        "Content-Type":"multipart/form-data","Authorization":`Bearer ${token} `
       }
       console.log(reqHeader);
       const res=await addProductApi(prData,reqHeader)
       console.log(res);
       if(res.status===200){
        // setAddProjectResponse(res.data)
       alert("Project added successfully..!!")
       setProd({ title:"",price:"",category:"",description:"",userid:"",product_image:""})
       
       }
       else{
       alert("Project adding failed..!!")
       }


    }
  }

  
  useEffect(()=>{
    const excistingUser=JSON.parse(localStorage.getItem("currentUser"))
    setProd({...prod,userid:excistingUser})
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
  },[])

  useEffect(()=>{
    if(prod.product_image){
      setPreview(URL.createObjectURL(prod.product_image))
    }
  },[prod.product_image])
  return (
    <>
     <div className='row '>
        <div className='col-sm-3'>
          <Bar />
        </div>
        <div className='col-sm-6'>





          {/* <Link to={'/admindashboard'} style={{ textDecoration: 'none' }} className='d-flex align-items-center m-3'>
        <i class="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
        <span className='btn text-center p-0 m-0 '></span>
      </Link> */}

         

              <div className=' rounded '  >
                {/* style={{backgroundColor:'#F5E3E3'}}  */}

                <div className='d-flex justify-content-center mt-4 ' >

                  <h1 className='mt-4 text-warning '>Add Item</h1>
                </div><br /><br />

                <div className='row '>
                  <div className='col-lg-5'>
                    <label htmlFor="food">
                      <input type="file" id='food' style={{ display: 'none' }} value={prod.product_image} onChange={(e)=>setProd({...prod,product_image:e.target.files[0]})} />
                      <img src={preview?preview:"https://icon-library.com/images/upload-file-icon/upload-file-icon-7.jpg"} className='img-fluid m-4 ' style={{ width: '340px', height: '250px' }} alt="" />
                    </label>
                  </div>
                  <div className='col-lg-7'>
                    <div className='d-flex align-items-center flex-column'>


                      <form className='w-100  mt-4'>
                        <Form>

                          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                              title:
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" placeholder="Title" value={prod.title} onChange={(e)=>setProd({...prod,title:e.target.value})}  />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                              Price:
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" placeholder="Price" value={prod.price}  onChange={(e)=>setProd({...prod,price:e.target.value})}  />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                              Category:
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" placeholder="Catgory" value={prod.category}  onChange={(e)=>setProd({...prod,category:e.target.value})} />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} className="mb-3 " controlId="exampleForm.ControlInput4">
                            <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                              Description: 
                            </Form.Label>
                            <Col sm="9" className='ms-4'>
                              <Form.Control type="text" as="Textarea" placeholder="Description" value={prod.description}  onChange={(e)=>setProd({...prod,description:e.target.value})}  />
                            </Col>
                          </Form.Group>
                        </Form>


                      </form><br />
                      <Button variant="outline-warning" className='btn btn-lg' style={{ textAlign: 'center' }} onClick={handleAddproduct} >ADD</Button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <ToastContainer /> */}
          </div>
    </>
  )
}

export default Addp