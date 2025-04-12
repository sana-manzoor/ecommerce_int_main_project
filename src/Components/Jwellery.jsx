import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { category,addwishs } from '../services/allApis'
import { Card,Button } from 'react-bootstrap'
import { BASE_URL } from '../services/baseurl'
import { useNavigate } from 'react-router-dom'
import { addcart } from '../services/allApis'

function Jwellery() {

    const [jwel,setJwel]=useState([])

    const [wish,setWish]=useState([])

    const cd="jewellery"

    const getCat=async()=>{
       
        const result=await category(cd)
        console.log(result)
        setJwel(result.data)
    }

    const navigate=useNavigate()

    const storep=async(id)=>{
      sessionStorage.setItem("id",id)
      navigate('/pview')
    }

   

    const userr=()=>{
      if (localStorage.getItem("currentUser")) {
          const uid = JSON.parse(localStorage.getItem("currentUser"))
          // console.log(studentid)
          setWish({ ...wish, uid })
          console.log(wish)
      }
     
  }

    const addwishlist=async(item)=>{
      if(!localStorage.getItem("currentUser")){
        alert("Login First!!")
        navigate('/login')
      }
      else{
      // console.log(item)
      // setWish({...wish, item})
      const dataToSend = { pid:item._id, title:item.title ,price:item.price , category: item.category ,description:item.description,product_image:item.product_image,uid: wish.uid};
          console.log(dataToSend)
          const res1 = await addwishs(dataToSend) 
          console.log(res1)
          if (res1.status === 201) {   
             alert("Item added to Wishlist!!")
             navigate('/wish')
          }
          else{
              alert("Product Already excists")
          }
        }
    }
  

    const addtocart=async(item)=>{
      if(!localStorage.getItem("currentUser")){
        alert("Login First!!")
        navigate('/login')
      }
      else{
      const dataToSend = { pid:item._id, title:item.title ,price:item.price , category: item.category ,description:item.description,product_image:item.product_image,uid: wish.uid};
          console.log(dataToSend)
          const res1 = await addcart(dataToSend) 
          console.log(res1)
          if (res1.status === 201) {   
             alert("Item added to cart!!")
             navigate('/cart')
          }
          else{
              alert("Product Already excists in cart")
          }
        }
    }
   
  
    useEffect(() => {
      getCat()
      userr()
    }, [])
  



  return (
    <>
            <Header />

            {/* ----------------navbar------------------------ */}
            <div className='d-flex justify-content-evenly s1 ' >

                <div className='n2 d-none d-sm-block'>
                <span className='ft2'><Link to={'/'} className=' text-dark'>All</Link> </span>
                    <span className='ft2'><Link to={'/shoes'} className=' text-dark'>Shoes</Link> </span>
                    <span className='ft2'><Link to={'/mob'} className=' text-dark'>Mobile Phones</Link> </span>
                    <span className='ft2'><Link to={'/lady'} className=' text-dark'>Ladies Wear</Link> </span>
                    <span className='ft2'><Link to={'/gents'} className=' text-dark'>Gents Wear</Link> </span>
                    <span className='ft2'><Link to={'/kids'} className=' text-dark'>Kids wear</Link> </span>
                    <span className='ft2'><Link to={'/jwel'} className=' text-dark'>Jewellery</Link> </span>
                    <span className='ft2'><Link to={'/elec'} className=' text-dark'>Electronics</Link> </span>

                </div>
            </div >

            
            <h1 className='text-center m-5'>Jewellery</h1>

            <div className='row ms-3 mt-4 mb-3'>

                    {
                        jwel?.map(item=>(
                            <div className="col-md-3 mb-5">
                            <Card style={{ width: '20rem', height: '420px',cursor:'pointer' }} className='border shadow  mb-2 text-center' >
                            <Card.Img variant="top" src={`${BASE_URL}/upload/${item.product_image}`} style={{ height: '230px' }} className='img-fluid m-2' onClick={()=>{storep(item._id)}} />
                              <Card.Body>
                                <div id='t1' className='mb-2'><b>{item.title}</b></div>
                                <h5>Price:₹{item.price}</h5>
                                 
                                <div className="card-footer d-flex justify-content-between">
                                  <Button className="btn "  onClick={()=>{addwishlist(item)}} variant="outline-dark"  ><i className="fa-solid fa-lg fa-heart-circle-plus" ></i></Button>
                                  <Button className="btn " onClick={()=>{addtocart(item)}}  variant="outline-dark"  ><i className="fa-solid fa-cart-plus fa-lg"></i></Button>
                                </div>
                              </Card.Body>
                              
                            </Card>
                            </div>
                        ))
                    }
                    {/* <div className='  col-sm col-md mb-2 mt-2'>
                       
                    </div> */}

                    

                </div>


        </>
  )
}

export default Jwellery