import React,{useState,useEffect} from 'react'
import { Table, Button } from 'react-bootstrap'
import Bar from './Bar'
import { allusers } from '../services/allApis'
import { deleteUserApi } from '../services/allApis'


function Usersl() {

    const [list,setList]=useState()

    const [token,setToken]=useState("")

    const getUsers=async()=>{
        const result=await allusers()
        console.log(result)
        setList(result.data)
    }

    const deleteuser=async(id)=>{
        console.log(id)
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `Bearer ${token}`
        }
        console.log(reqHeader)
        const result=await deleteUserApi(reqHeader,id)
        console.log(result)
        if (result.status === 200) {
            console.log(result.data)
            getUsers()
            // setStudents(result.data)
            alert("delete successfull")
        }
        else{
            alert("deletion failed")
        }
    }
  
    useEffect(()=>{
        if (localStorage.getItem("token")) {
          setToken(localStorage.getItem("token"))
        }
        getUsers()
  
      },[])
console.log(token)
    
  return (
    <>
    
    <div className='row '>
                <div className='col-sm-4'>
                    <Bar />
                </div>
                <div className='col-sm-5'>




                    {/* <Link to={'/admindashboard'} style={{ textDecoration: 'none' }} className='d-flex align-items-center m-3'>
                <i class="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
                <span className='btn text-center p-0 m-0 '></span>
            </Link> */}




                    <div className=' rounded '  >
                        {/* style={{backgroundColor:'#F5E3E3'}}  */}

                        <div className='d-flex justify-content-center mt-4 mb-3' >
                            <h2 className='text-warning mt-4'>Users List</h2>
                        </div><br /><br />
                        <Table striped bordered hover shadow className='container text-center ' >
                            <thead >
                                <tr className='text-center lead head2'>
                                    <th>UserId</th>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    list?.map((item,index)=>(
                                        <tr className='lead font-weight-normal'>
                                        <td>{index+1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td><i className="fa-solid fa-trash fa-lg text-warning" onClick={()=>{deleteuser(item._id)}}></i></td>
                                    </tr>

                                    ))
                                }

                            
                            </tbody>
                        </Table>

                    </div><br /><br /><br />
                </div>
                {/* <ToastContainer /> */}
            </div>


    </>
  )
}

export default Usersl