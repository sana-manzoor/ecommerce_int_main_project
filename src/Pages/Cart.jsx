import React, { useState, useEffect,useMemo } from 'react'
import Header from '../Components/Header'
import { decrcart, getcart } from '../services/allApis'
import { BASE_URL } from '../services/baseurl'
import { deletecartApi } from '../services/allApis'
import { incrcart } from '../services/allApis'
import { Link } from 'react-router-dom'
// import {  PayPalCardFieldsProvider, PayPalNameField, PayPalNumberField, PayPalExpiryField, PayPalCVVField, usePayPalCardFields } from '@paypal/react-paypal-js'
// import { PayPalScriptProvider,PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom'


function Cart() {

    const [cartlist, setCartlist] = useState([])
    const [total,setTotal]=useState(0)

    const [uid, setUid] = useState("")

    const userid = () => {
        if (localStorage.getItem("currentUser")) {
            const uu = JSON.parse(localStorage.getItem("currentUser"))
            // console.log(uu)
            setUid(uu)
        }
    }

    const navigate=useNavigate()

    // const { cardFields, fields } = usePayPalCardFields();

    const cartss = async () => {
        console.log(uid)
        const result = await getcart(uid)
        console.log(result)
        if (result.status === 200) {
            console.log(result.data)
            setCartlist(result.data)
            // setTotal( result.data.map(item => item.price * item.quantity).reduce((p1, p2)=>p1 + p2))
        }
        else {
            console.log(result)
        }
    }

    // const initialOptions = {
    //     clientId: "test",
    //     currency: "USD",
    //     intent: "capture",
    // };

    const deletecartt = async (id) => {
        // console.log(id)
        const res = await deletecartApi(id)
        console.log(res)
        if (res.status === 200) {

            cartss()
        }
    }

    const increasee = async (id) => {
        const res = await incrcart(id)
        console.log(res)
        cartss()
    }

    const decreasee = async (id) => {
        const res = await decrcart(id)
        console.log(res)
        cartss()
    }

    const handletot=()=>{
        if(total){
            sessionStorage.setItem("amount", JSON.stringify(total))
           
        }
    }


    useEffect(() => {
        userid()
        cartss()
    }, [uid])

    useMemo(() => {
        const totalAmount = cartlist?.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount || 0); 
   
      }, [cartlist]);

  

    // console.log(total)

    // console.log(total)

    // console.log(uid)

    // function submitHandler() {
    //     if (typeof cardFields.submit !== "cartss") return; // validate that `submit()` exists before using it

    //     cardFields
    //         .submit()
    //         .then(() => {
    //             // submit successful
    //         })
    //         .catch(() => {
    //             // submission error
    //         });
    // }

    return (
        <>
            <Header />


            {

                cartlist?.length > 0 ?



                    <div className="p-5 row gx-0" style={{ minHeight: '70vh' }}>
                        <div className="col-md-8 me-5" >
                            <h3>Cart Summary</h3>

                            <table className="table table-bordered shadow p-3" >
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th className='text-center'>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    {/* <th>Total Price</th> */}
                                    <th></th>
                                </tr>



                                {
                                    cartlist?.map((item, index) => (
                                        <tr >
                                            <td>{index + 1}</td>
                                            <td>{item.title}</td>


                                            <td>
                                                <img src={`${BASE_URL}/upload/${item.product_image}`} width={'180px'} height={"180px"} alt="" />
                                            </td>
                                            {/* <!-- <td>{{i.price}}</td> --> */}
                                            <td> {item.price}</td>
                                            <td>
                                                <span>
                                                    <button className="btn" onClick={() => { increasee(item._id) }} >+</button>
                                                    {item.quantity}
                                                    <button className="btn" onClick={() => { decreasee(item._id) }} >-</button>

                                                </span>

                                            </td>

                                            <td onClick={() => { deletecartt(item._id) }} ><i className="fa-solid fa-trash fa-xl" style={{ cursor: 'pointer' }} ></i></td>
                                        </tr>


                                    ))
                                }



                            </table>



                        </div>

                        <div className="col-md-3 ms-2 ">
                            <div class=" mt-5 p-5 w-100  shadow">
                                <h5>Total Products: <span>{cartlist?.length}</span></h5>

                                {
                                    cartlist?.length > 0 ?
                                        <h5>Total Amount:
                                            {/* {
                                               
                                                cartlist.map(item => item.price * item.quantity).reduce((p1, p2)=>setTotal(p1+p2))

                                                
                                            } */}
                                            {total}
                                        </h5>
                                        :
                                        <span>0</span>
                                }


                            </div>
                            <div className="d-grid py-3">
                               <Link to={'/pay'}><button className="btn btn-outline-dark" onClick={handletot} >Check Out</button></Link> 
                                {/* <PayPalScriptProvider options={{ clientId: "test" }} >
                                    <PayPalButtons style={{ layout: "horizontal" }} />
                                </PayPalScriptProvider> */}

                            </div>

                        </div>
                    </div>
                    :
                    <div style={{ height: '70vh' }}>
                        <h2 className='text-center mt-5'>No Cart Summary....<Link to={'/'}><span className='text-dark' style={{ textDecoration: 'underline' }}>Click here to shop!!</span></Link></h2>
                    </div>


            }
        </>
    )
}

export default Cart
