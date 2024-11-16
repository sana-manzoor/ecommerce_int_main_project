import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import { getwish } from '../services/allApis'
import { Card, Button } from 'react-bootstrap'
import { BASE_URL } from '../services/baseurl'
import { deleteWishApi } from '../services/allApis'
import { addcart } from '../services/allApis'
import { useNavigate } from 'react-router-dom'

function Wish() {

    const [wishList, setWishList] = useState([])

    const [uid, setUid] = useState("")

    const navigate=useNavigate()

    const userid = () => {
        if (localStorage.getItem("currentUser")) {
            const uu = JSON.parse(localStorage.getItem("currentUser"))
            // console.log(uu)
            setUid(uu)
        }
    }

    const wishess = async () => {
        console.log(uid)
        const result = await getwish(uid)
        console.log(result)
        if (result.status === 200) {
            console.log(result.data)
            setWishList(result.data)
        }
        else {
            console.log(result)
        }
    }

    const deletewish = async (id) => {
        // console.log(id)
        const res = await deleteWishApi(id)
        console.log(res)
        if (res.status === 200) {
            // alert("Item removed from wish list")
            wishess()
        }
    }


    const addtocart=async(item)=>{
        if(!localStorage.getItem("currentUser")){
          alert("Login First!!")
          navigate('/login')
        }
        else{
        const dataToSend = { pid:item._id, title:item.title ,price:item.price , category: item.category ,description:item.description,product_image:item.product_image,uid: item.uid};
            console.log(dataToSend)
            const res1 = await addcart(dataToSend) 
            console.log(res1)
            if (res1.status === 201) {   
               alert("Item added to cart!!")
               deletewish(item._id)
               navigate('/cart')
            }
            else{
                alert("Product Already excists in cart")
            }
          }
      }
    

    useEffect(() => {
        userid()
        wishess()
    }, [uid])

    console.log(uid)


    return (
        <>
            <Header />
            <h3 className="text-center mt-2">Wishlist Items</h3>
            <section className="py-5">
                <div className=" mt-2">
                    <div className='row  ms-5 '>


                        {

                            wishList?.map(item => (

                                <div className="col-md-2 me-5 mb-5">
                                    <Card style={{ width: '20rem', height: '420px' }} className='border shadow  mb-2 text-center ' >
                                        <Card.Img variant="top" src={`${BASE_URL}/upload/${item.product_image}`} style={{ height: '230px' }} className='img-fluid m-2' />
                                        <Card.Body>
                                            <div id='t1' className='mb-2'><b>{item.title}</b></div>
                                            <h5>Price:₹{item.price}</h5>
                                            <div className="card-footer d-flex justify-content-between">
                                                <Button className="btn " variant="outline-dark" onClick={()=>{deletewish(item._id)}} ><i className="fa-solid fa-lg fa-heart-circle-xmark"  ></i></Button>
                                                <Button className="btn " variant="outline-dark" onClick={()=>{addtocart(item)}}  ><i className="fa-solid fa-cart-plus fa-lg"></i></Button>
                                            </div>
                                        </Card.Body>

                                    </Card>
                                </div>

                            ))
                        }






                    </div>
                </div>
            </section>
        </>
    )
}

export default Wish