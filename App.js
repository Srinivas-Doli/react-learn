import React from "react";
import ReactDOM from "react-dom/client";


/**
 *  Header
 * -Logo
 * -NAV Items
 * Body
 * -Search
 * -RestaurentContainer
 * -RestaurentCard
 * -> Img, Name of the restaurent, cuisine, Delivery time
 * Footer
 * -CopyRight
 * -Links
 * -Address
 * -Contact
 * 
 */

const Header = () => {
   return (<div className="header">
      <div className="logo">
        < img src ="https://th.bing.com/th/id/OIP.BqUXf4lsmlLwAQVf3Mw-7AHaHa?w=197&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/>
      </div>
      <div className="nav-items">
        <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
        </ul>
      </div>
   </div>);
};

const RestaurentCard = (props) => {
   const {resName, cuisine, Outlet}= props;
   return (
      <div className="restaurentcard" style={{backgroundColor:"grey"}}>
         <img 
         className = "res-logo" 
         alt ="res-logo" 
         src ="https://th.bing.com/th/id/OIP.JaXsqtUtPHL_X5e3iNjfzgHaE8?w=273&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/>
       <h3>{resName}</h3>
       <h4>{Outlet}</h4>
       <h4>{cuisine}</h4>
       <h4>4.9 stars</h4>
       <h4>30 minutes</h4>
      </div>
   );
};

const Body = () => {
   return (
   <div className="body">
    <div className="search">Search</div>
    <div className="restaurent-container">
        <RestaurentCard resName="Pendem Foods" cuisine="Biryanis, Starters, Bevarages"/>
        <RestaurentCard resName="KFC" Outlet="Chicken, Popcorn, Bevarages"/>
    </div>
    </div>
   );
};


const AppLayout = () => {
   return <div className="app">
      <Header/>
      <Body/>
   </div>;
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);