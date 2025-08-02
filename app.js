import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<img
					className='logo'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K8f8hdrZw-SfHxZSG0GogsRClYEHyAqGEg&s'
				/>
			</div>
			<div className='nav-items'>
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};
const resList = [
	{
		'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
		data: {
			id: '240185',
			name: 'Burger King',
			cloudinaryImageId:
				'RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/bced9b52-f88c-4869-93f9-bafb284d7f83_240185.jpg',
			locality: 'Sheikpet',
			areaName: 'Toli Chowki',
			costForTwo: '₹350 for two',
			cuisines: ['Burgers', 'American'],
			avgRating: 4.3,
			parentId: '166',
			avgRatingString: '4.3',
			totalRatingsString: '40K+',
			sla: {
				deliveryTime: 33,
				lastMileTravel: 6.3,
				serviceability: 'SERVICEABLE',
				slaString: '30-35 mins',
				lastMileTravelString: '6.3 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2025-08-03 01:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: 'ITEMS',
				subHeader: 'AT ₹59',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: '--',
				},
			},
			ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
		},
		analytics: {
			context: 'seo-data-48c91496-a2da-4dfb-8e09-d0224de226c8',
		},
		cta: {
			link: 'https://www.swiggy.com/city/hyderabad/burger-king-sheikpet-toli-chowki-rest240185',
			text: 'RESTAURANT_MENU',
			type: 'WEBLINK',
		},
		widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
	},
	{
		'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
		data: {
			id: '9296',
			name: 'Subway',
			cloudinaryImageId:
				'RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/193228fa-d5fe-4ba9-ab36-8f7d8c52e6b6_9296.jpg',
			locality: 'Humayun Nagar',
			areaName: 'Mehdipatnam',
			costForTwo: '₹350 for two',
			cuisines: ['sandwich', 'Salads', 'wrap', 'Healthy Food'],
			avgRating: 4.1,
			parentId: '2',
			avgRatingString: '4.1',
			totalRatingsString: '28K+',
			sla: {
				deliveryTime: 27,
				lastMileTravel: 2.5,
				serviceability: 'SERVICEABLE',
				slaString: '25-30 mins',
				lastMileTravelString: '2.5 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2025-08-03 00:45:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: 'ITEMS',
				subHeader: 'AT ₹119',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: '--',
				},
			},
			ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
		},
		analytics: {
			context: 'seo-data-48c91496-a2da-4dfb-8e09-d0224de226c8',
		},
		cta: {
			link: 'https://www.swiggy.com/city/hyderabad/subway-humayun-nagar-mehdipatnam-rest9296',
			text: 'RESTAURANT_MENU',
			type: 'WEBLINK',
		},
		widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
	},
	{
		'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
		data: {
			id: '214964',
			name: 'Lingaiah Hotel',
			cloudinaryImageId: 'b5xld90dyzhmhfca3eo0',
			locality: 'Mallepally',
			areaName: 'Asif Nagar',
			costForTwo: '₹200 for two',
			cuisines: ['South Indian'],
			avgRating: 4.6,
			veg: true,
			parentId: '125253',
			avgRatingString: '4.6',
			totalRatingsString: '4.1K+',
			sla: {
				deliveryTime: 22,
				lastMileTravel: 0.5,
				serviceability: 'SERVICEABLE',
				slaString: '20-25 mins',
				lastMileTravelString: '0.5 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2025-08-02 14:30:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: '--',
				},
			},
			ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
		},
		analytics: {
			context: 'seo-data-48c91496-a2da-4dfb-8e09-d0224de226c8',
		},
		cta: {
			link: 'https://www.swiggy.com/city/hyderabad/lingaiah-hotel-mallepally-asif-nagar-rest214964',
			text: 'RESTAURANT_MENU',
			type: 'WEBLINK',
		},
		widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
	},
	{
		'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
		data: {
			id: '329070',
			name: 'Kamath Hotel',
			cloudinaryImageId: 'wx5qrfddnvfastifgmjy',
			locality: 'Nampally',
			areaName: 'Nampally',
			costForTwo: '₹200 for two',
			cuisines: [
				'South Indian',
				'North Indian',
				'Biryani',
				'Chinese',
				'Snacks',
			],
			avgRating: 4.5,
			veg: true,
			parentId: '657300',
			avgRatingString: '4.5',
			totalRatingsString: '24K+',
			sla: {
				deliveryTime: 24,
				lastMileTravel: 2.2,
				serviceability: 'SERVICEABLE',
				slaString: '20-25 mins',
				lastMileTravelString: '2.2 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2025-08-02 22:00:00',
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png',
						description: 'bolt!',
					},
					{
						imageId: 'v1695133679/badges/Pure_Veg111.png',
						description: 'pureveg',
					},
				],
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'bolt!',
									imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png',
								},
							},
							{
								attributes: {
									description: 'pureveg',
									imageId: 'v1695133679/badges/Pure_Veg111.png',
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: 'ITEMS',
				subHeader: 'AT ₹59',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: '3.8',
					ratingCount: '7.5K+',
				},
				source: 'GOOGLE',
				sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
			},
			ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
		},
		analytics: {
			context: 'seo-data-48c91496-a2da-4dfb-8e09-d0224de226c8',
		},
		cta: {
			link: 'https://www.swiggy.com/city/hyderabad/kamath-hotel-nampally-rest329070',
			text: 'RESTAURANT_MENU',
			type: 'WEBLINK',
		},
		widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
	},
	{
		'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
		data: {
			id: '1136764',
			name: 'Third Wave Coffee',
			cloudinaryImageId:
				'RX_THUMBNAIL/IMAGES/VENDOR/2025/7/15/4babf7c3-4a1e-47a4-a9c4-b0275d24cbf9_1136764.JPG',
			locality: 'Himayath Nagar',
			areaName: 'Himayath Nagar',
			costForTwo: '₹400 for two',
			cuisines: ['Desserts', 'Beverages', 'Cafe'],
			avgRating: 4.4,
			parentId: '274773',
			avgRatingString: '4.4',
			totalRatingsString: '19',
			sla: {
				deliveryTime: 36,
				lastMileTravel: 5,
				serviceability: 'SERVICEABLE',
				slaString: '35-40 mins',
				lastMileTravelString: '5.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2025-08-02 23:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '20% OFF',
				subHeader: 'ABOVE ₹1200',
				discountTag: 'FLAT DEAL',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			isNewlyOnboarded: true,
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: '--',
				},
			},
			ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
		},
		analytics: {
			context: 'seo-data-48c91496-a2da-4dfb-8e09-d0224de226c8',
		},
		cta: {
			link: 'https://www.swiggy.com/city/hyderabad/third-wave-coffee-himayath-nagar-rest1136764',
			text: 'RESTAURANT_MENU',
			type: 'WEBLINK',
		},
		widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
	},
	{
		'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
		data: {
			id: '1049038',
			name: 'Hotel Nayaab - Since 1986',
			cloudinaryImageId:
				'RX_THUMBNAIL/IMAGES/VENDOR/2025/3/4/e32ffd19-b4b9-49d5-ae0a-44fb6e0bb954_1049038 (4).jpg',
			locality: 'Charminar',
			areaName: 'Charminar',
			costForTwo: '₹500 for two',
			cuisines: ['Biryani', 'North Indian'],
			avgRating: 4.2,
			parentId: '610013',
			avgRatingString: '4.2',
			totalRatingsString: '764',
			sla: {
				deliveryTime: 30,
				lastMileTravel: 3.7,
				serviceability: 'SERVICEABLE',
				slaString: '30-35 mins',
				lastMileTravelString: '3.7 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2025-08-02 23:59:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '₹125 OFF',
				subHeader: 'ABOVE ₹349',
				discountTag: 'FLAT DEAL',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			isNewlyOnboarded: true,
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: '--',
				},
			},
			ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
		},
		analytics: {
			context: 'seo-data-48c91496-a2da-4dfb-8e09-d0224de226c8',
		},
		cta: {
			link: 'https://www.swiggy.com/city/hyderabad/hotel-nayaab-since-1986-charminar-rest1049038',
			text: 'RESTAURANT_MENU',
			type: 'WEBLINK',
		},
		widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
	},
	{
		'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
		data: {
			id: '497449',
			name: 'Poorna Hotel',
			cloudinaryImageId: 'rwbdfnotthxci0ogd2pf',
			locality: 'Lakdi-Ka-Pul',
			areaName: 'Lakdi-Ka-Pul',
			costForTwo: '₹150 for two',
			cuisines: ['South Indian'],
			avgRating: 4.6,
			veg: true,
			parentId: '298230',
			avgRatingString: '4.6',
			totalRatingsString: '2.2K+',
			sla: {
				deliveryTime: 23,
				lastMileTravel: 3.7,
				serviceability: 'SERVICEABLE',
				slaString: '20-25 mins',
				lastMileTravelString: '3.7 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2025-08-02 16:00:00',
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1695133679/badges/Pure_Veg111.png',
						description: 'pureveg',
					},
				],
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'pureveg',
									imageId: 'v1695133679/badges/Pure_Veg111.png',
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: '4.3',
					ratingCount: '1.0K+',
				},
				source: 'GOOGLE',
				sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
			},
			ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
		},
		analytics: {
			context: 'seo-data-48c91496-a2da-4dfb-8e09-d0224de226c8',
		},
		cta: {
			link: 'https://www.swiggy.com/city/hyderabad/poorna-hotel-lakdi-ka-pul-rest497449',
			text: 'RESTAURANT_MENU',
			type: 'WEBLINK',
		},
		widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
	},
	{
		'@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
		data: {
			id: '7203',
			name: 'Taj Mahal-Abids',
			cloudinaryImageId: '8aa874a03b5bd0804b6781b1fd13f02d',
			locality: 'Abids',
			areaName: 'Abids',
			costForTwo: '₹400 for two',
			cuisines: ['South Indian', 'North Indian', 'Biryani', 'Snacks'],
			avgRating: 4.5,
			veg: true,
			parentId: '924',
			avgRatingString: '4.5',
			totalRatingsString: '65K+',
			sla: {
				deliveryTime: 32,
				lastMileTravel: 3,
				serviceability: 'SERVICEABLE',
				slaString: '30-35 mins',
				lastMileTravelString: '3.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2025-08-02 23:00:00',
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1695133679/badges/Pure_Veg111.png',
						description: 'pureveg',
					},
				],
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'pureveg',
									imageId: 'v1695133679/badges/Pure_Veg111.png',
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: 'ITEMS',
				subHeader: 'AT ₹79',
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: '4.2',
					ratingCount: '19K+',
				},
				source: 'GOOGLE',
				sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
			},
			ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
		},
		analytics: {
			context: 'seo-data-48c91496-a2da-4dfb-8e09-d0224de226c8',
		},
		cta: {
			link: 'https://www.swiggy.com/city/hyderabad/taj-mahal-abids-abids-rest7203',
			text: 'RESTAURANT_MENU',
			type: 'WEBLINK',
		},
		widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
	},
];
const RestaurantCard = (props) => {
	const { resData } = props;

	const { name, cuisines, avgRatingString, slaString, costForTwo } =
		resData.data;
	const cuisinesModified = cuisines.map((cuisine) => {
		return cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
	});
	console.log(cuisines);
	return (
		<div
			className='res-card'
			style={{
				backgroundColor: '#f0f0f0',
			}}
		>
			<img
				src={
					'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
					resData.data.cloudinaryImageId
				}
				alt='biryani'
				className='res-logo'
			/>

			<h3>{name}</h3>
			<h4>{cuisinesModified.join(',')}</h4>
			<h4>{avgRatingString}</h4>
			<h4>{slaString}</h4>
			<h4>{costForTwo}</h4>
		</div>
	);
};

const Body = () => {
	return (
		<div className='body'>
			<div className='search'>Search</div>
			<div className='res-container'>
				{resList.map((Restaurant) => (
					<RestaurantCard resData={Restaurant} />
				))}
			</div>
		</div>
	);
};
const AppLayout = () => {
	return (
		<div className='app'>
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
