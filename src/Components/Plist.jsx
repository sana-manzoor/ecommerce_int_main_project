import React, { useState, useEffect } from 'react'
import Bar from './Bar'
import { Table, Button } from 'react-bootstrap'
import Editp from './Editp'
import { deleteproductApi } from '../services/allApis'
import { allproducts } from '../services/allApis'

function Plist() {

    const [prod, setProd] = useState([])

    const [token, setToken] = useState("")

    const getprod = async () => {
        const result = await allproducts()
        console.log(result)
        setProd(result.data)
    }

    const deleteProd = async (id) => {
        console.log(id)
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `Bearer ${token}`
        }
        console.log(reqHeader)
        const result = await deleteproductApi(reqHeader, id)
        console.log(result)
        if (result.status === 200) {
            console.log(result.data)
            getprod()
            // setStudents(result.data)
            alert("delete successfull")
        }
        else {
            alert("deletion failed")
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
        getprod()

    }, [])
    console.log(prod)
    return (
        <>
            <div className='row '>
                <div className='col-sm-4'>
                    <Bar />
                </div>
                <div className='col-sm-6'>



                    {/* <Link to={'/admindashboard'} style={{ textDecoration: 'none' }} className='d-flex align-items-center m-3'>
                <i class="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
                <span className='btn text-center p-0 m-0 '></span>
            </Link> */}

                    <div className=' rounded scr '  >
                        {/* style={{backgroundColor:'#F5E3E3'}}  */}

                        <div className='d-flex justify-content-center mt-4 mb-3'  >
                            <h2 className='text-warning mt-4'>Products List</h2>
                        </div><br /><br />
                        <Table striped responsive bordered hover className='container text-center shadow' >
                            <thead className='head2'>

                                <tr className='text-center lead'>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    prod?.map((item, index) => (
                                        <tr className='lead font-weight-normal'>

                                            <td>{index+1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>{item.category}</td>
                                            <td><i className="fa-solid fa-trash fa-lg me-3 text-warning" onClick={()=>{deleteProd(item._id)}} ></i> <Editp product={item} /></td>

                                        </tr>
                                    ))
                                }





                            </tbody>

                        </Table>




                        {/* <ToastContainer /> */}
                    </div>


                </div>

            </div>



        </>
    )
}

export default Plist







