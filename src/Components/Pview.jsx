import React,{useState,useEffect} from 'react'
import Header from './Header'
import { viewproduct } from '../services/allApis'
import { BASE_URL } from '../services/baseurl'



function Pview() {

    const [prod,setProd]=useState()

    const [pid,setPid]=useState()

    

    const getproduct=async()=>{
        const result=await viewproduct(pid)
        console.log(result)
        // const arr=result.data[0]
        setProd(result.data)
        
    }

    useEffect(()=>{
        if (sessionStorage.getItem("id")) {
          setPid(sessionStorage.getItem("id"))
        }

        getproduct()
  
      },[pid])
      console.log(pid)
      console.log(prod)

   
    
  return (
    <>
    <Header />

    {
        prod?.map(item=>(
            <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={`${BASE_URL}/upload/${item.product_image}`} alt="..." height={'400px'} /></div>
            <div className="col-md-6">
                {/* <div className="small mb-1">Product Id: 23</div> */}
                <h1 className="display-5 fw-bolder">{item.title}</h1>
                <div className="fs-5 mb-4">
                    <h3> ₹{item.price}</h3>
                </div>
                <p className="lead">{item.description}</p>
                <div>
                    {/* <h4>Images</h4>
                    {
                        data?.images.length >0 &&
                        data?.images.map(item=>(
                            <img src={item} height={'100px'} width={'100px'} />
                        ))
                    } */}
                </div>
                {/* <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-dark"   ><i className="fa-solid fa-lg fa-heart-circle-plus" style={{color: '#ec1387'}}></i></button>
                        <button className="btn btn-outline-dark"  ><i className="fa-solid fa-cart-plus fa-lg"></i></button>
                </div> */}
            </div>
        </div>
    </div>

        ))
    }
    
    </>
  )
}

export default Pview