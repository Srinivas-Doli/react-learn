import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import resList from "../Utilities/mockData";


const Body = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState(resList);
 
console.log(listOfRestaurents);
console.log(listOfRestaurents[0]);
   return (
   <div className="body">
    <div className="filter">
        <button className="filter-btn" onClick={()=>{
            const filterdList= listOfRestaurents.filter(
                (res)=>res.card.info.avgRating>4
            ); 
           setListOfRestaurents(filterdList);          
            }}>Top Rated Restaurants</button>
    </div>
    <div className="restaurent-container">
       {listOfRestaurents.map((restaurant) => (
    <RestaurentCard
     key={restaurant.card.info.id} resData={restaurant}
    />
  ))}
    </div>
    </div>
   );
};


export default Body;