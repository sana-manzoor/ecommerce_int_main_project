import React,{useEffect, useState} from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';


const stripePromise = loadStripe('pk_test_51PjcIrGvWCRuSvdqrw8431B3XAvtDErWcnBofOXvgM66TPjTDWhsmvOaQ5nFKoqMv98CjvEM1AUa6ErDZg6OA4X100S5FxlnS2');

const Checkout = () => {
        const [amount, setAmount] = useState(); // Amount in cents
        const [delaying,setDelaying]=useState(false)


        const [paymentDetails,setPaymentDetails]=useState(null)
        const stripe = useStripe();
        const elements = useElements();
      
        const cardElementOptions = {
          style: {
            base: {
              color: "#32325d",
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: "antialiased",
              fontSize: "29px",
              "::placeholder": {
                color: "#aab7c4",
               
              },
            },
            invalid: {
              color: "#fa755a",
              iconColor: "#fa755a",
            },
          },
        };
      
        const navigate=useNavigate()
      
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          if (!stripe || !elements) {
            return;
          }
      
          // Call your backend to create a PaymentIntent
          const response = await fetch('http://localhost:4000/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount }),
          });
          const { clientSecret } = await response.json();
      
          const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          });
      
          if (error) {
            console.error(error);
          } else if (paymentIntent.status === 'succeeded') {
            alert('Payment successful!');
            setPaymentDetails(paymentIntent);
          //  console.log(paymentDetails)
         
           setDelaying(true);
           setTimeout(() => {
             navigate('/success'); // Replace with your target route
           }, 5000);
            // navigate('/success')
          }
        }
      useEffect(()=>{
        if (sessionStorage.getItem("amount")) {
            const amt = JSON.parse(sessionStorage.getItem("amount"))
            // console.log(uu)
            setAmount(amt)
        }

      },[])

      useEffect(()=>{
        if(paymentDetails){
          sessionStorage.setItem("details",JSON.stringify(paymentDetails))
        }
      },[paymentDetails])

     

      // console.log(paymentDetails)
  return (
    <>
    
    <div className='d-flex justify-content-center align-items-center border shadow mb-5' style={{width:'800px',height:'400px'}}>
    <form onSubmit={handleSubmit}>
      <h3 className='mb-4 text-center mt-3 mb-5'>Enter Card Details</h3>
      <div className='d-flex justify-content-center align-items-center'>
      <CardElement className="card-input" options={cardElementOptions}/>
      </div>
      <div>
        <table className='table' style={{fontSize:'25px'}}>
            <tr className='mt-2'>
                <td>Shipping Charge:</td>
                <td style={{textDecoration:'line-through'}}>₹40</td>
            </tr>
            <tr className='mt-2'>
                <td>Delivery Charge:</td>
                <td style={{textDecoration:'line-through'}}>₹50</td>
            </tr>
            <tr className='mt-4 '>
                <td>Total:</td>
                <td>₹{amount}</td>
            </tr>
        </table>
      </div>
      
      <button id='bt1' type="submit" className='btn btn-success btn-lg mt-5 btn-block w-100 mb-3 ' disabled={!stripe}>
        Pay ₹{amount}
      </button>
    
    </form>
    </div>
    

    {/* {
      paymentDetails && (
        <div className='d-flex justify-content-center align-items-center border shadow' style={{width:'800px',height:'400px'}}>
          <h2>Payment Details</h2>
          <p><strong>Payment ID:</strong> {paymentDetails.id}</p>
          <p><strong>Amount:</strong>₹{paymentDetails.amount}</p>
          <p><strong>Status:</strong> {paymentDetails.status}</p>
        </div>
      )
    } */}

    </>
  )
}

export default Checkout