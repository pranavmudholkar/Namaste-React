import RestaurantCard from '../components/RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './shimmer';

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_'
		);
		const json = await data.json();
		setListOfRestaurants(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		console.log(json.data);
	};

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className='body'>
			<div className='filter'>
				<button
					className='filter-btn'
					onClick={() => {
						const filteredList = listOfRestaurants.filter(
							(res) => res.info.avgRating > 4
						);
						console.log(filteredList);
						setListOfRestaurants(filteredList);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className='res-container'>
				{listOfRestaurants.map((Restaurant) => (
					<RestaurantCard resData={Restaurant} key={Restaurant.info.id} />
				))}
			</div>
		</div>
	);
};

export default Body;
