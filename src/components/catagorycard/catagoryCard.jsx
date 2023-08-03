import { Link } from 'react-router-dom';
import './catagoryCard.css'
import React from 'react';
export const CatagoryCard=(props)=>{
    return(
        <div className={`catagory-card ${props.size} card`} style={{backgroundImage:`url(${props.imgurl})`}} >
            
            <div className='Button'>
                <Link className='title-shop link' to={`${props.routeName}`}>
                <div className='title-shop'>
                
                <p>{props.title} </p>
                <p>SHOP NOW</p>
                <a href='link/link'>
                    <span className='link'></span>
                </a>
            </div>

                </Link>
                

            </div>
        </div>
    );
}
