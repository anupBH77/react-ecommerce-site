import "./App.css";
import React, { useEffect } from "react";
import CatagoryContainer from "./CatagoryContainer/CatagoryContainer";
import { Route, Routes } from "react-router-dom";
import ShopContainer from "./pages/shopPage/shopContainer";
import { Header } from "./pages/shopPage/Header/Header";
import logo from "./logo.svg";
import SignIn from "./Sign-In-and-Sign-Up/Sign-In/Sign-In";
import { Auth } from "firebase/auth";
import { Component } from "react";
import { auth } from "./firebase/firebase.utils";
import { PersonCircle } from "react-bootstrap-icons";
import { ProductItem } from "./components/product-item/ProductItem";
import { useDispatch,Provider, useSelector } from "react-redux";
import { selectUser } from "./reducers/slices/userSlice";
import { store } from "./store/store";
import { curUserSetter } from "./reducers/slices/userSlice";
import { selectCartItem } from "./reducers/slices/cartItemSlice";
import Profile from "./components/account/profile/Profile";
import CheckOut from "./pages/checkout.page/CheckOut";
import Manga from "./pages/catagoryProduct/Manga";
import Math from "./pages/catagoryProduct/math";
import Science from "./pages/catagoryProduct/science";
import Kids from "./pages/catagoryProduct/kids";
// import { Provider } from "react";
const App=()=>{
    
    const userChanges=useSelector(selectUser);
    let unSubFromAuth= null
    const dispatch= useDispatch();
    useEffect(()=>{
        unSubFromAuth=auth.onAuthStateChanged(user=>{
         
            dispatch(curUserSetter(user))
            // console.log(user)
            return ()=>{
                unSubFromAuth();
            }
        })
},[userChanges])

    return (
        <Provider store={store}>
         <div className="App">
           
           <Header ></Header>
           <Routes>
               <Route exect path="/" element={<CatagoryContainer />} />
               <Route path="/preview" element={<ShopContainer />} />
               <Route path="/signin" element={<SignIn/>} />
               <Route path="/productItem" element={<ProductItem/>}></Route>
               <Route path="/account/Profile" element={<Profile/>}></Route>
               <Route path='/cart/checkout' element={<CheckOut/>}></Route>
               <Route path = '/manga' element={<Manga/>}></Route>
               <Route path = '/math' element={<Math/>}></Route>
               <Route path = '/science' element={<Science/>}></Route>
               <Route path = '/kids' element={<Kids/>}></Route>

    
               {/* <Route  element={<PersonCircle/>} /> */}
           </Routes>
          
      
         </div>
         </Provider>
       );
}
export default App;