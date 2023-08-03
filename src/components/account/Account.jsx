import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import './account.css'
import { Auth } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { curUserSetter, selectUser } from "../../reducers/slices/userSlice";
// import React from "react";
export const Account=()=>{
   const dispatch= useDispatch();
   const user = useSelector(selectUser);
//    console.log(user);
    return(
        
        <div className>

            <div className={`dropdown`}>
               <div className="account dropbtn"> ACCOUNT</div>
               <div className="dropdown-content">
                    <Link className="a" to={'/account/Profile'}>PROFILE</Link>
                    <Link className="a">ORDER</Link>
                    <Link className="a" onClick={()=>{dispatch(curUserSetter(null));auth.signOut()}}>SIGNOUT</Link>
               </div>
                  
           
            
            </div>
           
            
           
        </div>

    )

}
// const a={}