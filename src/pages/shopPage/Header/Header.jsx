import { Routes, Router, Link } from "react-router-dom";
import "./Header.css";
import React from "react";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { ReactComponent as Logo } from "../../../SVGs/crown.svg";
import { Account } from "../../../components/account/Account";
import { auth } from "../../../firebase/firebase.utils";
import { Searchbar } from "./Serach";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../reducers/slices/userSlice";
import { increament } from "../../../reducers/slices/cartItemSlice";
import CartDropdown from "./cart.section/CartDropdown";
import { Selectbool } from "../../../reducers/slices/dropHandlerSlice";
import { Toggler,Togglerfalse } from "../../../reducers/slices/dropHandlerSlice";
// import { CatagoryCard } from '../../../components/catagorycard/catagoryCard'
export const Header = (/*{ User }*/) => {
  console.log()
  const dispatch=useDispatch();
  const user = useSelector(selectUser);

  const DropVisible=useSelector(Selectbool)
  let [isClicked, changer] = useState(false);
  const searchHandler = () => {
    changer(true);
    // console.log(clicked)
  };

  return (
    <div className="Header">
      <div className="left">
        <Link to={"/"}>
          <Logo className="logo-container option"></Logo>
        </Link>
      </div>

      <div className="middle  ">
        {/* <button onClick={()=>dispatch()}></button> */}
          <Searchbar></Searchbar>
      </div>

      <div className="right" >
        <Link className="option" onClick={()=>{dispatch(Togglerfalse())}}>CONTACT</Link>
        <Link className="shop option" to={"/preview"}>
          EXTRA'S
        </Link>
        {/* User?<div className='signin option'>SIGN OUT<div/>:<Link className='signin option' to={'signin'}>SIGN IN</Link> */}
        { user? (
         <Account></Account>
        ) : (
          <Link className="signin option" to={"/signin"} onClick={()=>{dispatch(Togglerfalse())}}>
            SIGN IN
          </Link>
        )}
        <Link className="option cart">
          
          <Icon.Bag onClick={()=>{dispatch(Toggler())}}></Icon.Bag>
          {DropVisible?<CartDropdown></CartDropdown>:<></>}
        </Link>
      </div>
    </div>
  );
};
