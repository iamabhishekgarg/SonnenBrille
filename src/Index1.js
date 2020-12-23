import React,{useState} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {getBasketTotal} from './reducer'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import {toast} from 'react-toastify'
import './Index1.css'
toast.configure();


function Index1() {
    const [{basket},dispatch]=useStateValue();
 
   async function handleToken(token,addresses){
          // console.log({token,addresses})
        const response= await axios.post('/checkout1',{
              token,
              basket
          });
        const {status} = response.data

        if(status=='success'){
            toast('Success! Check email for details',
               {type:'success'}
            )
        }else
        {
            toast('Something went wrong',
               {type:'error'}
            )
        }
    }

    return (
        <div className="d">
         
        <CurrencyFormat 
        renderText={(value)=>(
           <>
               <p>
                  Subtotal ({basket.length} items:<strong>{`${value}`}</strong>)
               </p>
              
           </>

        )}
   decimalScale={2}
   value={getBasketTotal(basket)}
   displayType={"text"}
   thousandSeparator={true}
   prefix={"$"}

/>
            <StripeCheckout
            stripeKey="pk_test_51HXr9JCbnsbZ6VdUBG2At7u7YPv63RXeiwQCd4xrX5A0YwsL85I4Ya0oLNpAslGMk4HKp5zWbrW35qNuNsF1j0ke00CIxmd1vR"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={getBasketTotal(basket)*100}
         
            />
        </div>
        
    )
}

export default Index1
