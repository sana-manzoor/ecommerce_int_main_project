import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import Header from './Header';



const stripePromise = loadStripe('pk_test_51PjcIrGvWCRuSvdqrw8431B3XAvtDErWcnBofOXvgM66TPjTDWhsmvOaQ5nFKoqMv98CjvEM1AUa6ErDZg6OA4X100S5FxlnS2');


function Payment() {
  return (
    <>
    <Header/>
     {/* <h1 className='text-center mb-5 mt-4 mb-4'>Pa</h1> */}
     <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
     <Elements stripe={stripePromise}>
          <Checkout/>
        </Elements>
     </div>
      
    </>
  )
}

export default Payment