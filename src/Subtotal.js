import React from 'react'
import {getBasketTotal} from './reducer'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import {NavLink} from 'react-router-dom'
import Index1 from './Index1'

function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">

            <CurrencyFormat 
                    renderText={(value)=>(
                       <>
                           <p>
                              Subtotal ({basket.length} items:<strong>{`${value}`}</strong>)
                           </p>
                           <small className="subtotal_gift">
                               <input type="checkbox"></input>
                               This order contains a gift
                           </small>
                       </>

                    )}
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeparator={true}
               prefix={"$"}
            
            />

            <button class="btn btn-warning "><NavLink to='/index' className="b">Proceed to Checkout</NavLink></button>
        </div>
    )
}

export default Subtotal
