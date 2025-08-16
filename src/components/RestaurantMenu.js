import Shimmer from '../components/shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) {
		return <Shimmer />;
	}

	const { name, cuisines, costForTwoMessage, avgRatingString } =
		resInfo?.cards[2]?.card?.card?.info;
	const { itemCards } =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[3].card.card;
	console.log(
		resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[3].card.card
			.itemCards
	);

	return (
		<div className='menu'>
			<h1>{name}</h1>
			<p>
				{cuisines.join(', ')} - {costForTwoMessage}
			</p>
			<h1>Menu:</h1>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.name}>
						<span>{item.card.info.name + ' '}</span>
						<span>{'- Rs.' + item.card.info.price / 100}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
export default RestaurantMenu;
