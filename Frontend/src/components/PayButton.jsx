import axios from 'axios';
import {useSelector} from 'react-redux';
// import {url} from '../slices/api'

import React from 'react'

const PayButton = ({cartItem}) => {

  // const currentUser = useSelector((state) => state.user.currentUser);
  const currentUser = 'Abhijith';

const handleCheckout = () => {
axios.post(`http://localhost:5000/api/stripe/create-checkout-session`,{
  cartItem,
  userId:currentUser
}).then((res)=>{
  if(res.data.url){
    window.location.href = res.data.url;
  }
}).catch((err)=>{
console.log(err.message);
})
}

  return (
    <div>
      <button onClick={()=>handleCheckout()}>Checkout</button>
    </div>
  )
}

export default PayButton;