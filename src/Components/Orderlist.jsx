import React from 'react'
import Bar from './Bar'
import { Table } from 'react-bootstrap'

function Orderlist() {
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
                                    <th>Payment_id</th>
                                    <th>Name</th>
                                    <th>Id</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    prod?.map((item, index) => ( */}
                                        <tr className='lead font-weight-normal'>

                                            <td>1</td>
                                            <td>kmvl</td>
                                            <td>3453</td>
                                            <td>skamflk</td>
                                            <td>smxlk</td>
                                            <td>aSJLisca</td>
                                            <td><button className='btn btn-success '>Update</button></td>

                                        </tr>
                                    {/* ))
                                } */}





                            </tbody>

                        </Table>




                        {/* <ToastContainer /> */}
                    </div>


                </div>

            </div>


    </>
  )
}

export default Orderlist