
import React,{useEffect} from 'react'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import './App4.css'
import CheckOut from './CheckOut'
import { useStateValue } from './StateProvider'
import {auth} from './Firebase'
import Index1 from './Index1'

function App4() {
    
    const [{user},dispatch]=useStateValue();
 

    useEffect(()=>{
     const unsubscribe=   auth.onAuthStateChanged((authUser)=>{
            if(authUser) {
        
                dispatch({
                    type:'SET_USER',
                    user:authUser
                })


            }else{
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
        });

        return ()=>{
            unsubscribe();
        }

    },[])
    console.log(user)

    return (
        <Router>
        <div className="app">
            <Switch>
               <Route exact path="/checkout">
               <Header />
               <CheckOut />
               </Route>
               <Route exact path="/login">
               <Login />
               </Route>
               <Route exact path="/">
              
               <Header />
               <Home />
           
               </Route>
               
               <Route exact path="/index" component={Index1}></Route>
            </Switch>
        </div>
        </Router>
    )
}

/*
import React from 'react'
import Index1 from './Index1'

function App4() {
    return (
        <div>
            <Index1 />
        </div>
    )
}
*/
export default App4


