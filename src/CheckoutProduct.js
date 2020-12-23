import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,item,title,price,image,rating}) {

   const[{basket},dispatch]=useStateValue();

   const removeFromBasket =()=>{
         dispatch({
             type:"REMOVE_FROM_BASKET",
             id:id
         })
   }

    return (
        <div className="checkoutProduct">
             <img className="checkoutProduct_image" src={image} alt=""></img>
             <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>

                <p className="checkoutProduct_price">
                   <small>rs</small>
                   <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                        <p>⭐</p>
                    ))
                }
                </div>

                <button class="btn btn-warning" onClick={removeFromBasket} >Remove from basket</button>

             </div>
        </div>
    )
}

export default CheckoutProduct
