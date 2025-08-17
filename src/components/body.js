import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurant, setfilteredRestaurant] = useState([]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(
				'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_'
			);
			const json = await data.json();
			setListOfRestaurants(
				json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants
			);
			setfilteredRestaurant(
				json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants
			);
			// console.log(
			// 	json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
			// 		?.restaurants
			// );
		};
		fetchData();
	}, []);

	const onlineStatus = useOnlineStatus();

	if (!onlineStatus)
		return (
			<h1>Looks like you are offline! Please check your internet connection</h1>
		);
	else
		return listOfRestaurants.length === 0 ? (
			<Shimmer />
		) : (
			<div className='body'>
				<div className='filter flex'>
					<div className='search p-4 m-4 '>
						<input
							type='text'
							className='search-box border border-solid border-black'
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
						/>
						<button
							className='px-4 py-1 bg-green-100 m-4 rounded-lg'
							onClick={() => {
								console.log(searchText);
								const filteredRestaurant = listOfRestaurants.filter((res) =>
									res.info.name.toLowerCase().includes(searchText.toLowerCase())
								);
								setfilteredRestaurant(filteredRestaurant);
							}}
						>
							Search
						</button>
					</div>
					<div className='search p-4 m-4 flex items-center '>
						<button
							className='filter-btn px-4 py-2 bg-gray-100 rounded-lg cursor-pointer'
							onClick={() => {
								const filteredList = listOfRestaurants.filter(
									(res) => res.info.avgRating > 4
								);
								// console.log(filteredList);
								setListOfRestaurants(filteredList);
							}}
						>
							Top Rated Restaurants
						</button>
					</div>
				</div>
				<div className='res-container flex flex-wrap'>
					{filteredRestaurant.map((Restaurant) => (
						<Link
							to={'/restaurant/' + Restaurant.info.id}
							key={Restaurant.info.id}
						>
							<RestaurantCard resData={Restaurant} />
						</Link>
					))}
				</div>
			</div>
		);
};

export default Body;
