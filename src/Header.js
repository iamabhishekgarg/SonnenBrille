import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import { auth } from './Firebase'

function Header() {

    const [{basket,user}]=useStateValue();
    //console.log(basket);

     const login=()=>{
         if(user){
             auth.signOut();
         }
     }



    return (
        <nav className="header">
        <Link to="/">
        <img className="header_logo" src="/images/logo5.png"></img>
        </Link>

        <div className="header_search">
        <input type="text" className="header_searchInput"></input>
           <SearchIcon className="header_searchIcon"/>
           </div>

        <div className="header_nav">
              <Link to={!user && "/login"} className="header_link">
                   <div onClick={login} className="header_option">
                   <span className="option1">Hello {user?.email}</span>
                   <span className="option2">{user?'Sign Out':'Sign In'}</span>
                   </div>
              </Link>
              
       

      
         <Link to="/checkout" className="header_link">
            <div className="basket">
            <ShoppingBasketIcon />
            <span className="option2 basketc">{basket?.length}</span>
            </div>
         </Link>
              
        </div>
        </nav>
    )
}

export default Header
