import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
//import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8311631&lng=80.9242563&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    //console.log(json);
    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  //Post Latitude and Longitude to get more list of restaurants
  // useEffect(() => {
  //   fetchData2();
  // }, []);
  // const fetchData2 = async () => {
  //   const response = await fetch(
  //     "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/update",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ lat: "26.8311631", lng: "80.9242563" }),
  //     },
  //   );
  //   //const resJson = await response.json();
  //   console.log(response);
  // };
  //conditional rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer/>;
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="Search-Btn"
            onClick={() => {
              const filterdRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurant(filterdRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
