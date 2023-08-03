import React from "react";
import { Icon0Circle, Search } from "react-bootstrap-icons";
import * as Icon from "react-bootstrap-icons";
import SHOP_DATA from "../shopPageData";
import "./Search.css";
import { Link } from "react-router-dom";
// import  {Icon}from "react-bootstrap-icons"
export class Searchbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
        linkisClicked:false,
      isClicked: false,
      filteredList: [],
    };
  }
  flatList = Object.keys(SHOP_DATA).map(key=>SHOP_DATA[key]).map((element) => {
    return element.items;
  });
  flatList = [].concat(...this.flatList);

  searchHandler = (event) => {
    this.setState({linkisClicked:false})
    this.setState({
        
      filteredList: this.flatList.filter((element) =>
        element.name.includes(event.target.value)
      ),
    });
    console.log(this.state.filteredList);
  };
  render() {
    return (
      <div className="list-bar-container">
          {!this.state.isClicked ? (
            <Icon.Search
              className="search"
              onClick={() => {
                this.setState({ isClicked: true }, () => {
                  console.log(this.state.isClicked);
                });
              }}
            ></Icon.Search>
          ) : (
            <div className="bar-holder">
              
            <div className="search-bar">
              <input
                className="searchBox"
                placeholder="Search"
                onChange={this.searchHandler}
                ></input>{" "}
             
            </div>
            <div className="undo">
            <Icon.XLg
                className="search"
                onClick={() => {
                  this.setState({ isClicked: false });
                }}
              ></Icon.XLg>

            </div>
            </div>
          )}
        
        {this.state.isClicked ? (
          <div className="list-container">
            {this.state.filteredList.map((element) => (
                !this.state.linkisClicked?
              <Link to="/productItem" state={{ ImageUrl: element.imageUrl,Price:element.price,Name:element.name }} onClick={()=>{this.setState({linkisClicked:true})}} >{element.name
              }</Link>:null
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
