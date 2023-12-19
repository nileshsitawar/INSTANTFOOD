import React ,{lazy , Suspense, useEffect, useState}  from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from "./components/Body"
import About from './components/About';
import Contact from './components/Contact';
import Error from "./components/Error"
import { createBrowserRouter , Outlet, RouterProvider  } from 'react-router-dom';
import RestaurantMenu from "./components/RestaurantMenu"
// import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';



// * not using key gives error of not giving key to same childs (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice) //s
// 

const Grocery = lazy(() => import("./components/Grocery"));
// above we are doing lazy loading and its importing syntax is also different 
// const (component name) = lazy(()= import("path of the component"))

const Footer = ()=> { 
  <div className='footer'>
    <h2>footer</h2>
  </div>
};

const AppLayout = () => {
  
  const [userName,setUserName] = useState("");
  //authentication 
  useEffect(()=>{
    const data ={
      name:"Nilesh Sitawar",
    };
    setUserName(data.name);
  });
  
  return (
    <Provider store = {appStore} >
        <UserContext.Provider value = {{loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header/>
          <Outlet />
          
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children: [ 
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:
         (
          <Suspense fallback={<h1>Loading please wait....</h1>} >
             <Grocery/>
            </Suspense>
            ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path:"/cart",
        element:<Cart/>,
      }
    ],
    errorElement: <Error/>,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)