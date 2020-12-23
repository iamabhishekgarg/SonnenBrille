import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating,setSelectedImg}) {

 const [{},dispatch]=useStateValue();


  const addToBasket=()=>{ 
      dispatch({
          type:'ADD_TO_BASKET',
          item:{
             id:id,
             title:title,
             image:image,
             price:price,
             rating:rating,
          }
      })
  }

    return (
        <div className="product">
        <div  className="product_info">
        <p className="t">{title}</p>
            <p className="product_">
            <small>₹</small>
            <strong>{price}</strong>
            </p>
            <div className="product_rating">
            {
                Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))
            }
            </div>
        </div><br />
            
            <img src={image} onClick={()=>setSelectedImg(image)}></img>
            <button class="btn btn-warning text-dark" onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
