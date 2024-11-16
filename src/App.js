import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Admindb from './Pages/Admindb';
// import Userdb from './Pages/Userdb';
import Header from './Components/Header';
import Footr from './Components/Footr';
import Pview from './Components/Pview';
import Cart from './Pages/Cart';
import Wish from './Pages/Wish';
import Addp from './Components/Addp';
import Usersl from './Components/Usersl';
import Plist from './Components/Plist';
import Editp from './Components/Editp';
import Navbr from './Pages/Navbr';
import Mobiles from './Components/Mobiles';
import Electronics from './Components/Electronics';
import Shoes from './Components/Shoes';
import Ladies from './Components/Ladies';
import Gents from './Components/Gents';
import Kids from './Components/Kids';
import Jwellery from './Components/Jwellery';
import Payment from './Components/Payment';
import Success from './Components/Success';
import Orderlist from './Components/Orderlist';
// import { PayPalScriptProvider,PayPalButtons } from '@paypal/react-paypal-js';
// import { loadStripe } from '@stripe/stripe-js';



function App() {

//   const initialOptions = {
//     clientId: "test",
//     currency: "USD",
//     intent: "capture",
// };

  return (
    <div className="App">

{/* <Header /> */}
      
      <Routes>
      <Route path='/register' element={<Auth register />} />
      <Route path='/login' element={<Auth/>} />
     
    
      
        <Route path='/' element={<Home />}/>
        
        
        <Route path='/admindb' element={<Admindb/>} />
        {/* <Route path='/userdb' element={<Userdb/>} /> */}
        <Route path='/pview' element={<Pview/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wish' element={<Wish/>} />
        <Route path='/addp' element={<Addp/>} />
        <Route path='/usersl' element={<Usersl/>} />
        <Route path='/plist' element={<Plist/>} />
        <Route path='/editp' element={<Editp/>} />
        {/* <Route path='/Userdb' element={<Userdb/>} /> */}
        <Route path='/navbar' element={<Navbr/>} />
        <Route path='/mob' element={<Mobiles/>} />
        <Route path='/elec' element={<Electronics/>} />
        <Route path='/shoes' element={<Shoes/>} />
        <Route path='/lady' element={<Ladies/>} />
        <Route path='/gents' element={<Gents/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/jwel' element={<Jwellery/>} />
        <Route path='/pay' element={<Payment/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/order' element={<Orderlist/>} />




      </Routes>
      <Footr/>
{/* 
      <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider> */}
       
    </div>
  );
}

export default App;
