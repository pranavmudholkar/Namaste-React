import { CDN_URL } from '../utils/constants';
const RestaurantCard = (props) => {
	const { resData } = props;

	const {
		name,
		cuisines,
		avgRatingString,
		costForTwo,
		cloudinaryImageId,
		sla,
	} = resData?.info;

	const cuisinesModified = cuisines.map((cuisine) => {
		return cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
	});
	return (
		<div className='res-card my-4 mx-1 py-4 px-2 w-[200px] h-130 rounded-lg bg-gray-100 hover:bg-gray-200 '>
			<img
				src={CDN_URL + cloudinaryImageId}
				alt='biryani'
				className='res-logo w-[218px] h-[180px] rounded-lg'
			/>

			<h3 className='font-bold py-4 text-lg'>{name}</h3>
			<h4 className='py-2 h-20'>{cuisinesModified.join(', ')}</h4>
			<h4 className='py-2'>{avgRatingString}</h4>
			<h4 className='py-2'>{sla.slaString}</h4>
			<h4 className='py-2'>{costForTwo}</h4>
		</div>
	);
};

export default RestaurantCard;
