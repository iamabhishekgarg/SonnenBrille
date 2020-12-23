import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './CheckOut.css'
import CurrencyFormat from 'react-currency-format'
import Subtotal from './Subtotal';

function CheckOut() {

    const [{basket}]=useStateValue();

    return (
        <div className="checkout">
        <div className="checkout_left">
       
            <img className="checkout_ad" src=""></img>
            {basket?.length===0?(
                <div>
                <h2>Your Shopping Basket is empty</h2>
               
                </div>
            ):(
                <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {basket?.map((item)=>(
                   
                    <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                    />
                    
                ))}
               
                </div>
            )}
            </div>
            {basket.length>0 && (
                <div className='checkout_right'>
                <Subtotal />
                </div>
            )}
        </div>
    )
}

export default CheckOut
