import { CatagoryCard } from "../components/catagorycard/catagoryCard";
import './CatagoryContainer.css'
import { Route } from "react-router-dom";
import React from "react";
const CatagoryContainer=()=>{
    const catagories=[
        {
            title:'MANGA',
            imgUrl:'https://i.guim.co.uk/img/media/2281074279af96115bbfdfa2f64dfc1eab685d69/0_0_3000_2318/master/3000.jpg?width=465&quality=85&dpr=1&s=none',
            size:'small',
            id:1,


            routeName:'/manga'

        },
        {
            title:'KIDS',
            imgUrl:'https://img.freepik.com/free-vector/back-school-instagram-stories_52683-42889.jpg?w=900&t=st=1688550095~exp=1688550695~hmac=10bb86672c93110a8aebf3cde08485b23f138a753cc9fd10fe0e23745b278a5b',
            size:'small',
            id:2,
            routeName:'/kids'
        },
        {
            title:'HISTORY',
            imgUrl:'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            size:'small',
            id:3,
            routeName:'/history'
        },
       
        {
            title:'MATHS',
            imgUrl:'https://img.freepik.com/free-vector/isometric-maths-elements-background_52683-8061.jpg?w=996&t=st=1688551156~exp=1688551756~hmac=d57cda3bb56ec7de6e13fe90381acd65ba1fe93023092fb62126845a66a045eb',
            size:'large',
            id:5,
            routeName:'/math'
        },
        {
            title:'SCIENCE',
            imgUrl:'https://japaneselevelup.com/wp-content/uploads/2019/12/Why-Dr-Stone-Will-Improve-your-Japanese-4.jpg',
            size:'large',
            id:6,
            routeName:'science'
        }
    ]
    return (
        <div className="catagory-container" >
            {catagories.map(catagory=><CatagoryCard title={catagory.title} size={catagory.size} imgurl={catagory.imgUrl} key={catagory.id} routeName={catagory.routeName}></CatagoryCard>)}
        </div>
    );

}
export default CatagoryContainer;