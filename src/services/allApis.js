import { BASE_URL } from "./baseurl";
import { commonApi } from "./commonApi";


//to register 
export const registerApi=async (data)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,data,'')
}

//to login
 export const loginApi=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,data,'')


}

// //to add product
export const addProductApi=async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/add/product`,data,headers)
}



// //to get allusers
export const allusers=async()=>{
    return await commonApi("GET",`${BASE_URL}/admin/userslist`,'','')
}

// //to get allproduct
export const allproducts=async()=>{
    return await commonApi("GET",`${BASE_URL}/admin/prodlist`,'','')
}

// //to update product
export const editProductApi=async(headers,data,id)=>{
    return await commonApi("PUT",`${BASE_URL}/editproduct/${id}`,data,headers)
}

// //to delete user
export const deleteUserApi=async(headers,id)=>{
    return await commonApi("DELETE",`${BASE_URL}/deleteuser/${id}`,{},headers)
}

// //to delete product
export const deleteproductApi=async(headers,id)=>{
    return await commonApi("DELETE",`${BASE_URL}/deleteprod/${id}`,{},headers)
}

//to get category
export const category=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/category/${id}`,'','')
}

//to view product
export const viewproduct=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/viewprod/${id}`,'','')
}

//to add wish
export const addwishs=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/addwish`,data,'')
}



//to get wish
export const getwish=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/wishlist/${id}`,'','')
}


 //to delete wishitem
export const deleteWishApi=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/delwish/${id}`,{},'')
}


//to add to cart
export const addcart=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/addcart`,data,'')
}

//to get cartlist
export const getcart=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/cartlist/${id}`,'','')
}

 //to delete cartitem
 export const deletecartApi=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/delcart/${id}`,{},'')
}

//to increase cart item
export const incrcart=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/inccart/${id}`,'','')
}

//to decrease cart item
export const decrcart=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/deccart/${id}`,'','')
}

//to add to orderslist
export const addorder=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/addorder`,data,'')
}

//to remove cart
export const deletecart=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/cartdel/${id}`,'','')
}
