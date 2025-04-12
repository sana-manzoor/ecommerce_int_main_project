import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { addorder } from '../services/allApis'
import { deletecart } from '../services/allApis'

function Success() {
    const [details,setDetails]=useState([])
    const [data,setData]=useState({
        uid:JSON.parse(localStorage.getItem("currentUser")),uname:JSON.parse(localStorage.getItem("name"))
    })


    const orderadd=async()=>{
        const result=await addorder(data)
        console.log(result)
        if(result.status ==200){
            console.log(result.data)

        }
        else{
            console.log("error")
        }
           
    }

    useEffect(()=>{
        if (sessionStorage.getItem("details") && localStorage.getItem("name") && localStorage.getItem("currentUser") ) {
            const det = JSON.parse(sessionStorage.getItem("details"))
            // console.log(uu)
            setDetails(det)
            setData({...data,oid:details.id,amount:details.amount,status:details.status})
            // const name1 = JSON.parse(localStorage.getItem("name"))
            // const uid1= JSON.parse(localStorage.getItem("currentUser"))
            // // console.log(uu)
            // setData({...data,uid:uid1,uname:name1})
            orderadd()
        }

       

    },[])

    const clearall=async()=>{
        
        sessionStorage.clear()
        const result=await deletecart(data.uid)
        if(result.status==200){
            console.log("success")
        }
        else{
            console.log("unsuccessfull")
        }

    }

  

   console.log(details) 

    // console.log(details)
    return (
        <>
            <>
                <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: '#E2EAF4' }}>
                    <div style={{ height: '600px', width: '550px', backgroundColor: 'white' }}>
                        <img src="https://th.bing.com/th/id/OIP.n1O1DU2SRBZ3Fe0lX31tNQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{ width: '550px', height: '250px' }} alt="" />
                        <h2 className='text-center text-success'>Payment Successfull</h2>

                        <h5 className='text-center'>We received your purchase request!!</h5>
                        <div className='text-left ms-5 mt-4' style={{fontSize:'22px'}}>
                            {/* <h2 className='text-center'>Payment Details</h2> */}
                            <p><strong>Payment ID:</strong> {details.id}</p>
                            <p><strong>Amount paid:</strong>₹{details.amount}</p>
                            <p><strong>Status:</strong> {details.status}</p>
                            
                       </div>
                      <div className='text-end'> <button className='text-dark' onClick={clearall}>Home</button> </div> 
                    </div>

                </div>
            </>
        </>
    )
}

export default Success