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
		<div
			className='res-card'
			style={{
				backgroundColor: '#f0f0f0',
			}}
		>
			<img
				src={CDN_URL + cloudinaryImageId}
				alt='biryani'
				className='res-logo'
			/>

			<h3>{name}</h3>
			<h4>{cuisinesModified.join(', ')}</h4>
			<h4>{avgRatingString}</h4>
			<h4>{sla.slaString}</h4>
			<h4>{costForTwo}</h4>
		</div>
	);
};

export default RestaurantCard;
