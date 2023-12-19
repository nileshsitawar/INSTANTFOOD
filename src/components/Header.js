

import { LOGO_URL } from "../utils/constants";

import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [btnName, setbtnName] =useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
// selector is a Hook inside react-redux library
// we r subscribing to the store using Selector we have access to the portion on the store specifically store.cart.items  
  const cartItems = useSelector((store)=> store.cart.items);


    return (
      <div className="  flex shadow-lg p-4">
        <div className="logo-container bg-white">
          <img
            src= {LOGO_URL}
            alt="App Logo"
            className="w-16"
          />
        </div>
        <div className="flex  ">
          <ul className="flex p-1 m-1">
            <li className="m-1 p-1 mr-20  hover:bg-green-500 hover:text-white">
              Online Status : {onlineStatus ? "✅" : "🔴" }
            </li>

            <div className="ml-10 mr-10 flex justify-self-end">
                <li className=" ml-8 mr-8 hover:bg-green-500 hover:text-white rounded-md pb-0 mb-0 ">
                  <Link to="/">Home </Link>
                </li>

                <li className="ml-8 mr-8 hover:bg-green-500 hover:text-white rounded-md pb-0 mb-0 ">
                  <Link to="/about">About </Link>
                </li>

                <li className="ml-8 mr-8 hover:bg-green-500 hover:text-white rounded-md pb-0 mb-0 ">
                  <Link to="/contact">Contact </Link>
                </li>
                <li className="ml-8 mr-8 hover:bg-green-500 hover:text-white rounded-md pb-0 mb-0 ">
                  <Link to="/grocery">grocery </Link>
                </li>
                <li className="ml-8 mr-8 hover:bg-green-500 hover:text-white rounded-md pb-0 mb-0 ">
                  <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} />- ({cartItems.length}) </Link>
                </li>
            </div>


          </ul>
        </div>

        <div className="flex-col items-end justify-end ml-">
              
              <button 
              className="login m-1 px-8 py-1 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white "
              onClick={()=>{
                btnName=== "Login" ?
                setbtnName("Logout"):
                setbtnName("Login");
                
              }}> {btnName}</button>
              <p className="px-4 font-bold">{loggedInUser}</p>
            </div>
      </div>
      
    );
  };
  
  export default Header;