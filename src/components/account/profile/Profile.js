import { useDispatch, useSelector } from 'react-redux';
import './Profile.css'
import React from "react";
import { selectUser } from '../../../reducers/slices/userSlice';
const Profile=()=>{
    const userdetails = useSelector(selectUser)
    // console.log(userdetails.UserImpl);
    // const name=userdetails.displayName
    return(
        <div className="profile-container">
            {/* <div>Username:{userdetails}</div> */}

        </div>
    );

}
export default Profile;