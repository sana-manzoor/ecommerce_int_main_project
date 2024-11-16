import React from 'react'
import { Link } from 'react-router-dom'
import './Bar.css'

function Bar() {

  const handlelogout=()=>{
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    localStorage.removeItem("role")
     
  }
  return (
    <>
     <div style={{ height: '100vh', width: '280px' }} className='pt-5 pe-5 ps-3 bg-warning'>

<h3 className='text-left  cat3 ps-3 '><Link to={'/Admindb'} className=' hv1'>Dashboard</Link> </h3>
<h3 className='text-left   cat3 ps-3'><Link to={'/Addp'} className=' hv1'>Add Item</Link> </h3>
<h3 className='text-left   cat3 ps-3'><Link to={'/Usersl'}className=' hv1' >Users List</Link> </h3>
<h3 className='text-left   cat3 ps-3'><Link to={'/Plist'} className=' hv1' >Product List</Link> </h3>
<h3 className='text-left   cat3 ps-3'><Link to={'/order'} className=' hv1' >Order List</Link> </h3>
<h3 className='text-left   cat3 ps-3'><Link to={'/'} className=' hv1' onClick={handlelogout} >Logout</Link> </h3>
{/* <h3 className='text-left   cat3 ps-3'><Link to={'/orderlist'} className=' hv1' >Orders List</Link> </h3> */}

</div>
    
    
    
    
    </>
  )
}

export default Bar